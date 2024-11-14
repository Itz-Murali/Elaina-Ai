import { Zero, MARIN, RANDOMIMG, Quotes } from "./images";

const TOKEN = "8007762081:AAGTlxjH2cYejda8K3ljOnixbLQuTFDAC44"; // Elaina bot token
const CHAT_ID: string | null = null;
const WEBHOOK = "/endpoint";
const SECRET = "AAGTlxjH2cYejda8K3ljOnixbLQuTFDAC44";
const ADMIN_CHAT_ID = "7792739542"; // Admin user ID
const ERROR_IMAGE_URL = "https://graph.org/file/7844ad60af6ef341bc57e-3d7702ba0a1b96e84d.jpg";
const START_IMAGE_URL = "https://graph.org/file/16d75311155d2afcd5824-4b578a0d4e37e581ed.jpg";

(async function notifyAdminOnStart() {
  try {
    await sendMarkdown(ADMIN_CHAT_ID, "Elaina Has Started");
  } catch (error) {
    console.error("Error sending startup notification:", error);
  }
})();


addEventListener("fetch", (event: FetchEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname === WEBHOOK) {
    event.respondWith(handleWebhook(event));
  } else if (url.pathname === "/registerWebhook") {
    event.respondWith(registerWebhook(event, url, WEBHOOK, SECRET));
  } else if (url.pathname === "/unRegisterWebhook") {
    event.respondWith(unRegisterWebhook(event));
  } else {
    event.respondWith(new Response(null, { status: 404 }));
  }
});

async function handleWebhook(event: FetchEvent): Promise<Response> {
  if (event.request.headers.get("X-Telegram-Bot-Api-Secret-Token") !== SECRET) {
    return new Response("Unauthorized", { status: 403 });
  }

  try {
    const update = await event.request.json();
    if (update.callback_query) {
      await handleCallbackQuery(update.callback_query);
    } else if (update.message) {
      await onUpdate(update);
    }
    return new Response("Bot is active");
  } catch (error) {
    console.error("Error handling webhook:", error);
    return new Response("Error processing request", { status: 500 });
  }
}

async function onUpdate(update: any): Promise<void> {
  if ("message" in update) {
    const message = update.message;
    if (!message.text) {
      await sendImage(message.chat.id, ERROR_IMAGE_URL, "I can only respond to text messages.");
      return;
    }
    await onMessage(message);
  }
}


async function onMessage(message: any): Promise<void | boolean> {
  if (CHAT_ID && message.chat.id !== CHAT_ID) return false;

  const text = message.text.trim();
  const friendlyResponses = [
    "I'm having a little trouble understanding. Could you please rephrase or try again?",
    "Oops, I missed that! Could you please clarify?",
    "It seems I didn't catch that. Mind sending it again?",
    "Hmm, I didn’t quite get that. Could you provide more details?",
    "I’m here to help! Could you please repeat your message?",
    "My circuits got a bit tangled! Could you say that one more time?",
    "Could you rephrase? I want to make sure I get it right!",
    "I’m here to understand. Could you help me out by clarifying?",
    "I didn't quite get that. Could you give me a bit more info?",
    "Let’s try that again! Could you explain it a bit differently?",
    "Oops! I think I missed something there. Mind rephrasing?",
    "Could you share a bit more? I want to make sure I understand.",
    "Hmm, that didn’t come through clearly. Could you try again?",
    "Apologies! Could you please explain that in a different way?",
    "Let me give it another shot—could you repeat or add a bit more?",
    "I'm here to listen. Could you reword that for me?"
  ];
  if (text === "/id") {
    
    if (message.reply_to_message) {
      const repliedMessage = message.reply_to_message;

      if (repliedMessage.sticker) {
        const stickerId = repliedMessage.sticker.file_id;
        await sendMarkdown(message.chat.id, `Replied Message Sticker ID: \`${stickerId}\``);
      } 
    
      else if (repliedMessage.forward_from || repliedMessage.forward_from_chat) {
        const forwardFromId = repliedMessage.forward_from?.id || repliedMessage.forward_from_chat?.id;
        const forwardFromType = repliedMessage.forward_from ? "User" : "Channel";
        await sendMarkdown(message.chat.id, `Forwarded ${forwardFromType} ID: \`${forwardFromId}\``);
      } 
      
      else {
        await sendMarkdown(message.chat.id, "The replied message is not a sticker or forwarded message.");
      }
    } 

    else {
      const userId = message.from.id;
      await sendMarkdown(message.chat.id, `Here is your ID - \`${userId}\``);
    }
  } 
  else if (text === "/quotes") {
    
    await handleQuoteCommand(message.chat.id);
  } 

  else if (text === "/pfp" || text === "/animepfp") {
    await sendImageWithKeyboard(
      message.chat.id,
      "https://telegra.ph/file/00734ac3f3ebfe9cb264f.jpg",
      "Welcome To Elaina Pfp Store \nChoose Which Type Pfp You Want all Are Free ",
      {
        inline_keyboard: [
          [
            { text: "Zero Two", callback_data: "zerotwoo" },
            { text: "Marin Kitagawa", callback_data: "marinkitagava" }
          ],
          [
            { text: "Neko Anime [V1]", callback_data: "animev1" },
       //     { text: "Neko Anime [V2]", callback_data: "animev2" }
          ],
          [
            
            { text: "Neko Anime [V2]", callback_data: "nekov3" }
          ],
          [
        //    { text: "Husbando", callback_data: "animeboyspfp" },
            { text: "Fox Girl", callback_data: "foxgirlz" }
          ],
          [
           // { text: "Kitsune", callback_data: "kitsunepfp" },
            { text: "Waifu", callback_data: "waifupfp" }
          ],
          [
            { text: "Random Images", callback_data: "randomimgs" }
          ]
        ]
      }
    );
  } else if (text === "/start") {
    await notifyAdmin(message);
    await sendStartMessage(message.chat.id);
  } else {
    await sendTyping(message.chat.id);
    try {
      const userMessage = encodeURIComponent(text);
      const response = await fetch(`http://api.brainshop.ai/get?bid=181999&key=BTx5oIaCq8Cqut3S&uid=${message.chat.id}&msg=${userMessage}`);
      if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);

      const responseData = await response.json();
      const aiResponse = responseData.cnt;

      return sendMarkdown(message.chat.id, aiResponse);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const randomResponse = friendlyResponses[Math.floor(Math.random() * friendlyResponses.length)];
      await sendMarkdown(message.chat.id, randomResponse);
      if (ADMIN_CHAT_ID) {
        await sendMarkdown(ADMIN_CHAT_ID, `Error for user ${message.from.id}: ${error.message}`);
      }
    }
  }
}




async function notifyAdmin(message: any): Promise<void> {
  const { id: userId, username, first_name: firstName } = message.from;
  const mention = username ? `[${firstName}](tg://user?id=${userId})` : `[${firstName}](tg://user?id=${userId})`;
  const userInfo = `*New User Started the Bot*\n\n*Name:* ${firstName}\n*ID:* ${userId}\n*Username:* @${username || "No username"}\n*Mention:* ${mention}`;

  await sendMarkdown(ADMIN_CHAT_ID, userInfo);
}

async function sendStartMessage(chatId: string) {
  const startMessages = [
    "*🌟 Welcome to Elaina AI Bot!* 🌟\n\nI'm here to assist, entertain, and make every conversation memorable! 💬✨\n\nCrafted with care and ingenuity by the exceptional @MysticalDev 🔮",
    "*Hello and Welcome!* 🎉\n\nElaina AI Bot is here to add magic to your chats and make every conversation special. Reach out anytime! ✨",
    "*Greetings from Elaina AI!* 🤖✨\n\nYour personal AI companion is ready to help you with your queries and brighten your day! Created with passion by @MysticalDev 🔮",
    "*Hey there! Elaina AI Bot at your service!* 🌠\n\nI’m here to assist, inspire, and make your day better. Let’s make every interaction memorable! Powered by @MysticalDev 💫"
  ];
  const startImages = [
    "https://graph.org/file/7ac1c4be1ed4b2d2bfc8f-eff3552cdd5f4f2068.jpg",
    "https://graph.org/file/94897b71de655097afa76-a59b6d229ed1aefcb8.jpg",
    "https://graph.org/file/16d75311155d2afcd5824-4b578a0d4e37e581ed.jpg"
  ];

  const randomMessage = startMessages[Math.floor(Math.random() * startMessages.length)];
  const randomImage = startImages[Math.floor(Math.random() * startImages.length)];

  const inlineKeyboard: InlineKeyboard = {
    inline_keyboard: [
      [
        
        { text: "Support", url: "https://t.me/Mysticdevs" },
        { text: "Owner", url: "https://t.me/mysticaldev" }
      ],
        [
            { text: "Help", callback_data: "help" }
        ]
    ]
  };

  try {
    await sendImageWithKeyboard(chatId, randomImage, randomMessage, inlineKeyboard);
  } catch (error) {
    console.error("Error sending start message:", error);
    await sendImage(chatId, ERROR_IMAGE_URL, "An error occurred while sending the start message. Please try again later.");
    await sendMarkdown(ADMIN_CHAT_ID, `Error in sendStartMessage: ${error.message}`);
  }
}

async function handleCallbackQuery(callbackQuery: CallbackQuery): Promise<void> {
  const { data, message } = callbackQuery;
  if (!message) return;

  const chatId = message.chat.id;
  const messageId = message.message_id;
  let imageUrl: string | null = null;

  switch (data) {
    case "help":
      const helpText = "*Help Section*\n\nUse /start to begin \n/pfp for pfps.\nI'll add more commands here.";
      const backButton: InlineKeyboardMarkup = {
        inline_keyboard: [[{ text: "Back", callback_data: "back" }]]
      };

      await sendMarkdown(chatId, helpText, backButton);
      break;

    case "animev1":
      imageUrl = await fetchImage("https://api.waifu.pics/sfw/neko");
      break;

    case "waifupfp":
      imageUrl = await fetchImage("https://api.waifu.pics/sfw/waifu");
      break;

    case "foxgirlz":
      imageUrl = await fetchImage("https://nekos.life/api/v2/img/fox_girl");
      break;

    case "nekov3":
      imageUrl = await fetchImage("https://nekos.life/api/v2/img/neko");
      break;

    case "zerotwoo":
      imageUrl = randomChoice(Zero);
      break;

    case "marinkitagava":
      imageUrl = randomChoice(MARIN);
      break;

    case "randomimgs":
      imageUrl = randomChoice(RANDOMIMG);
      break;

    default:
      imageUrl = ERROR_IMAGE_URL;
  }

  if (imageUrl) {
    await sendImageWithKeyboard(
      chatId,
      imageUrl,
      "Generated Image",
      {
        inline_keyboard: [
          [{ text: "Generate Again", callback_data: data }],
        ]
      }
    );
  }
}
async function fetchImage(url: string): Promise<string | null> {
  const maxRetries = 3;
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { 'Accept': 'application/json' },
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Non-JSON response received. Content-Type: ${contentType}`);
      }

      const data = await response.json();
      return data.results?.[0]?.url || data.url || null;

    } catch (error) {
      console.error(`Attempt ${attempt} - Error fetching image:`, error.message, "\nURL:", url);

      
      if (attempt === maxRetries) {
        await sendMarkdown(ADMIN_CHAT_ID, `Error in Image Gen: ${error.message} \n${url}`);
        return ERROR_IMAGE_URL; 
      }

      
      await delay(1000 * attempt); 
    }
  }

  return null;
}



function randomChoice(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}



async function sendImageWithKeyboard(chatId: string, imageUrl: string, caption: string, keyboard: InlineKeyboardMarkup): Promise<void> {

  return fetch(apiUrl("sendPhoto"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      photo: imageUrl,
      caption: caption,
      parse_mode: "Markdown",
      reply_markup: keyboard
    })
  }).then(response => response.json());
}

async function sendMarkdown(chatId: string, text: string): Promise<any> {
  return fetch(apiUrl("sendMessage", { chat_id: chatId, text, parse_mode: "Markdown" })).then(response => response.json());
}

async function sendImage(chatId: string, imageUrl: string, caption: string): Promise<any> {
  return fetch(apiUrl("sendPhoto"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      photo: imageUrl,
      caption: caption,
      parse_mode: "Markdown"
    })
  }).then(response => response.json());
}

async function sendTyping(chatId: string): Promise<any> {
  return fetch(apiUrl("sendChatAction", { chat_id: chatId, action: "typing" })).then(response => response.json());
}

async function deleteMessage(chatId: string, messageId: number): Promise<void> {
  await fetch(apiUrl("deleteMessage", { chat_id: chatId, message_id: messageId }), {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });
}

async function handleQuoteCommand(chatId: string): Promise<void> {
  
  const generatingMessage = await sendMarkdown(chatId, "🌌 Generating an inspirational quote... ✨");


  await delay(2000);

  
  await deleteMessage(chatId, generatingMessage.message_id);


  const randomQuote = randomChoice(Quotes);
  await sendMarkdown(chatId, randomQuote);
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




async function registerWebhook(event: FetchEvent, requestUrl: URL, suffix: string, secret: string): Promise<Response> {
  const webhookUrl = `${requestUrl.protocol}//${requestUrl.host}${suffix}`;
  const response = await fetch(apiUrl("setWebhook", { url: webhookUrl, secret_token: secret }));
  const jsonResponse = await response.json();
  return new Response(jsonResponse.ok ? "Webhook registered" : JSON.stringify(jsonResponse, null, 2));
}

async function unRegisterWebhook(event: FetchEvent): Promise<Response> {
  const response = await fetch(apiUrl("setWebhook", { url: "" }));
  const jsonResponse = await response.json();
  return new Response(jsonResponse.ok ? "Webhook unregistered" : JSON.stringify(jsonResponse, null, 2));
}

function apiUrl(method: string, params?: object): string {
  const url = `https://api.telegram.org/bot${TOKEN}/${method}`;
  if (params) {
    const query = new URLSearchParams(params);
    return `${url}?${query.toString()}`;
  }
  return url;
}

