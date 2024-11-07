const TOKEN = "8007762081:AAGTlxjH2cYejda8K3ljOnixbLQuTFDAC44"; // Updated Bot Token
const CHAT_ID = null;
const WEBHOOK = "/endpoint";
const SECRET = "AAGFTRWCWtZPsbPNzpx54AMfwMy12a3N1No";
const ADMIN_CHAT_ID = "7792739542"; // MysticalDev's user ID
const ERROR_IMAGE_URL = "https://graph.org/file/7844ad60af6ef341bc57e-3d7702ba0a1b96e84d.jpg"; // Image for error messages
const START_IMAGE_URL = "https://graph.org/file/16d75311155d2afcd5824-4b578a0d4e37e581ed.jpg"; // Image for start message

addEventListener("fetch", (event) => {
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

function handleWebhook(event) {
  if (event.request.headers.get("X-Telegram-Bot-Api-Secret-Token") !== SECRET) {
    return new Response("Unauthorized", { status: 403 });
  }

  const handler = async function () {
    const update = await event.request.json();
    await onUpdate(update);
  };
  event.waitUntil(handler());
  return new Response("Bot is active");
}

async function onUpdate(update) {
  if ("message" in update) {
    const message = update.message;
    if (!message.text) {
      await sendImage(message.chat.id, ERROR_IMAGE_URL, "I can only respond to text messages.");
      return;
    }

    await onMessage(message);
  }
}

async function onMessage(message) {
  if (CHAT_ID && message.chat.id !== CHAT_ID) return false;

  const text = message.text.trim();

  if (text === "/start") {
    await notifyAdmin(message);
    return sendStartMessage(message.chat.id);
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
      await sendImage(message.chat.id, ERROR_IMAGE_URL, "An error occurred. Please try again later.");
      await sendMarkdown(ADMIN_CHAT_ID, `Error for user ${message.chat.id}: ${error.message}`);
    }
  }
}

async function notifyAdmin(message) {
  const { id: userId, username, first_name: firstName } = message.from;
  const mention = username ? `[@${username}](tg://user?id=${userId})` : `[${firstName}](tg://user?id=${userId})`;
  const userInfo = `*New User Started the Bot*\n\n*Name:* ${firstName}\n*ID:* ${userId}\n*Username:* ${username || "No username"}\n*Mention:* ${mention}`;

  await sendMarkdown(ADMIN_CHAT_ID, userInfo);
}

async function sendStartMessage(chatId) {
  const startMessage = `*🌟 Welcome to Elaina AI Bot!* 🌟\n\nI'm here to assist, entertain, and make every conversation memorable! 💬✨\n\nCrafted with care and ingenuity by the exceptional @MysticalDev 🔮, this bot is powered by advanced AI to provide intelligent responses`;

  try {
    await sendImage(chatId, START_IMAGE_URL, startMessage);
  } catch (error) {
    console.error("Error sending start message:", error);
    await sendImage(chatId, ERROR_IMAGE_URL, "An error occurred while sending the start message. Please try again later.");
    await sendMarkdown(ADMIN_CHAT_ID, `Error in sendStartMessage: ${error.message}`);
  }
}

async function sendMarkdown(chatId, text) {
  return (
    await fetch(apiUrl("sendMessage", {
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }))
  ).json();
}

async function sendImage(chatId, imageUrl, caption) {
  return (
    await fetch(apiUrl("sendPhoto"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        photo: imageUrl,
        caption: caption,
        parse_mode: "Markdown"
      })
    })
  ).json();
}

async function sendTyping(chatId) {
  return (
    await fetch(apiUrl("sendChatAction", {
      chat_id: chatId,
      action: "typing",
    }))
  ).json();
}

async function registerWebhook(event, requestUrl, suffix, secret) {
  const webhookUrl = `${requestUrl.protocol}//${requestUrl.host}${suffix}`;
  const response = await fetch(apiUrl("setWebhook", { url: webhookUrl, secret_token: secret }));
  const jsonResponse = await response.json();
  return new Response(jsonResponse.ok ? "Webhook registered" : JSON.stringify(jsonResponse, null, 2));
}

async function unRegisterWebhook(event) {
  const response = await fetch(apiUrl("setWebhook", { url: "" }));
  const jsonResponse = await response.json();
  return new Response(jsonResponse.ok ? "Webhook unregistered" : JSON.stringify(jsonResponse, null, 2));
}

function apiUrl(methodName, params = null) {
  let query = "";
  if (params) {
    query = "?" + new URLSearchParams(params).toString();
  }
  return `https://api.telegram.org/bot${TOKEN}/${methodName}${query}`;
}

