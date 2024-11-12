const TOKEN = "8007762081:AAGTlxjH2cYejda8K3ljOnixbLQuTFDAC44"; // Elaina bot token
const CHAT_ID: string | null = null;
const WEBHOOK = "/endpoint";
const SECRET = "AAGTlxjH2cYejda8K3ljOnixbLQuTFDAC44";
const ADMIN_CHAT_ID = "7792739542"; // Admin user ID
const ERROR_IMAGE_URL = "https://graph.org/file/7844ad60af6ef341bc57e-3d7702ba0a1b96e84d.jpg";
const START_IMAGE_URL = "https://graph.org/file/16d75311155d2afcd5824-4b578a0d4e37e581ed.jpg";
const Zero: string[] = [
    "https://telegra.ph/file/59b9696f98fc9801fb8a3.jpg",
    "https://telegra.ph/file/40ee2fea655fdaccb5676.jpg",
    "https://telegra.ph/file/2bf0a9e96e05c3b885f3e.jpg",
    "https://telegra.ph/file/748ab35ba5505941179d2.jpg",
    "https://telegra.ph/file/e3d517baa16d4d9175a63.jpg",
    "https://telegra.ph/file/31c761b649870cf244c68.jpg",
    "https://telegra.ph/file/ee33e0e9eb06f455fd8b8.jpg",
    "https://telegra.ph/file/5b647d2cb8ea742c14812.jpg",
    "https://telegra.ph/file/7d340e518b0503b7321e5.jpg",
    "https://telegra.ph/file/a1a2d523241d6dded6f81.jpg",
    "https://telegra.ph/file/3aa90e94a5601828a27b6.jpg",
    "https://telegra.ph/file/9e0f6ae4387667a40e4b1.jpg",
    "https://telegra.ph/file/53f6c0c089bebbb357d38.jpg",
    "https://telegra.ph/file/8cea94bf7e503531a3078.jpg",
    "https://telegra.ph/file/e2ae762e328636eb8277f.jpg",
    "https://telegra.ph/file/7a022c585f16ac3da9ca3.jpg",
    "https://telegra.ph/file/c618a8184593b89d97cac.jpg",
    "https://telegra.ph/file/f1fb515a11adf36a9d453.jpg",
    "https://telegra.ph/file/36a63da50dcc4943053db.jpg",
    "https://telegra.ph/file/4ee948352d7ea883904b2.jpg",
    "https://telegra.ph/file/5e715d363451474df62dd.jpg",
    "https://telegra.ph/file/6634462797341a1103e16.jpg",
    "https://telegra.ph/file/35a5c2d74e952a4ab91d3.jpg",
    "https://telegra.ph/file/4de8c34ef817b3c43b3a4.jpg",
    "https://telegra.ph/file/d1248deeabe5faa685c76.jpg",
    "https://telegra.ph/file/7ec14065c10886c21a460.jpg",
    "https://telegra.ph/file/5abf4bb5393629189d614.jpg",
    "https://telegra.ph/file/a88a5d73a122697938db3.jpg",
    "https://telegra.ph/file/a93939ff17aa2b344910d.jpg",
    "https://telegra.ph/file/5eaddf49d259af1546ec4.jpg",
    "https://telegra.ph/file/b53ab37579a42d5c504c3.jpg",
    "https://telegra.ph/file/398f82cc9965d27176d6f.jpg",
    "https://telegra.ph/file/73fb5f935ba47ecbede4b.jpg",
    "https://telegra.ph/file/db467cee76f37a490e4a0.jpg",
    "https://telegra.ph/file/ae5da8d0d1f8431dd5b51.jpg",
    "https://telegra.ph/file/80ca183c61fb91269c8b5.jpg",
    "https://telegra.ph/file/13dbe7df77791e9bd80c4.jpg",
    "https://telegra.ph/file/31bb5024d8e32a4333f87.jpg",
    "https://telegra.ph/file/57184799373eeeebfddce.jpg",
    "https://telegra.ph/file/098156c5d16866da0f5a8.jpg",
    "https://telegra.ph/file/be82723050edf998bd556.jpg",
    "https://telegra.ph/file/150f49bdd93181d2bc78f.jpg",
    "https://telegra.ph/file/f1d31ba99dd51e2e70481.jpg",
    "https://telegra.ph/file/0440b100868614d707b3c.jpg",
    "https://telegra.ph/file/d9dc7dba5eac897a33f47.jpg",
    "https://telegra.ph/file/9a83642458467be2df04a.jpg",
    "https://telegra.ph/file/c3eb7b4e06ff10d8a4694.jpg",
    "https://telegra.ph/file/eb83cef2a0806c97d4c0a.jpg",
    "https://telegra.ph/file/bbeb88cf6a25ed4071425.jpg",
    "https://telegra.ph/file/d62f7a27dfb73f8874f9a.jpg",
    "https://telegra.ph/file/127946a2d68030c67e945.jpg",
    "https://telegra.ph/file/779657a60dc3ebd930b80.jpg",
    "https://telegra.ph/file/4daa8ddd88b90fb99e96f.jpg",
    "https://telegra.ph/file/5ded4b7339e922f1fb25b.jpg",
    "https://telegra.ph/file/2496b1790c2c70c5598a4.jpg",
    "https://telegra.ph/file/eb0a57874ff169b94547e.jpg",
    "https://telegra.ph/file/b012ca4267d37001edaf4.jpg",
    "https://telegra.ph/file/b05221b0fc463abafbdfa.jpg",
    "https://telegra.ph/file/fee03ce28f6e426a1ccd7.jpg",
    "https://telegra.ph/file/1b1af538e96ec6d57a9eb.jpg",
    "https://telegra.ph/file/1a58f0ffcc50272d13d5a.jpg",
    "https://telegra.ph/file/261b94f61e387dffce19f.jpg",
    "https://telegra.ph/file/16e0eec0864b00a70d8d4.jpg",
    "https://telegra.ph/file/aaa11bac1f2b410259bdf.jpg",
    "https://telegra.ph/file/c75f04959e0b9d1f620af.jpg",
    "https://telegra.ph/file/5451cbac593d7e758b445.jpg",
    "https://telegra.ph/file/6a8a94833d568ea4b8bcb.jpg",
    "https://telegra.ph/file/834a8edd1f1169a9e4ff5.jpg",
    "https://telegra.ph/file/0970704ed7fb1be6e93f4.jpg",
    "https://telegra.ph/file/260e9b13a7560cf5980fa.jpg",
    "https://telegra.ph/file/bcc3c17be9b5073220217.jpg",
    "https://telegra.ph/file/4048ea8ec78276ab27eed.jpg",
    "https://telegra.ph/file/db08b3f97954172dde1b0.jpg",
    "https://telegra.ph/file/6c775cdb7eccbdb02766e.jpg",
    "https://telegra.ph/file/64e81bfbf58877eb4b914.jpg",
    "https://telegra.ph/file/7171044ffc9b0c7e328ce.jpg",
    "https://telegra.ph/file/3a9d343970db017d13490.jpg",
    "https://telegra.ph/file/39a46d232cd38746cb370.jpg",
    "https://telegra.ph/file/0ca48d870c7fbbe876cbf.jpg",
    "https://telegra.ph/file/7611d7f596e434dd5d7d2.jpg",
    "https://telegra.ph/file/a7c0df8d2c673afd5cb4a.jpg",
    "https://telegra.ph/file/5c495f44be4b1d21035ad.jpg",
    "https://telegra.ph/file/d28d9e38fae3bbfa54bfe.jpg",
    "https://telegra.ph/file/a4bce308f3d0b9c050aa4.jpg",
    "https://telegra.ph/file/e3ee09d8abceac61f3d03.jpg",
    "https://telegra.ph/file/ee1473eb244d34ec67d83.jpg",
    "https://telegra.ph/file/9a450ea8ab11630ffa023.jpg",
    "https://telegra.ph/file/fbd2df5fbb24d11658ce3.jpg",
    "https://telegra.ph/file/79f9c73a5786336dc2cb7.jpg",
    "https://telegra.ph/file/b0ccd3f20f76e1e242ce0.jpg",
    "https://telegra.ph/file/c32a0938308519f086b0d.jpg",
    "https://telegra.ph/file/78ad2a6550131881ef99d.jpg",
    "https://telegra.ph/file/de792f69b71a2cc61dedd.jpg",
    "https://telegra.ph/file/e0ab1d8e477118ccf1131.jpg",
    "https://telegra.ph/file/1ab0005517a31e23e593d.jpg"]; 

const RANDOMIMG: string[] = ["https://telegra.ph/file/c777a8fba33ea23e20f02.jpg","https://telegra.ph/file/eb2a1b5875dbd87ad16b5.jpg","https://telegra.ph/file/eb360fb4e80d7bb08b941.jpg","https://telegra.ph/file/4f5d1d86be0a8b5e7d81d.jpg","https://telegra.ph/file/eceb13fc17b0150aa9cea.jpg","https://telegra.ph/file/6f3a8b5643d0ca82bd1f6.jpg","https://telegra.ph/file/9a12a9d6a9fea986f2ec7.jpg","https://telegra.ph/file/5d95a16a2ad07f59d1074.jpg","https://telegra.ph/file/4b6bd810600733e53d929.jpg","https://telegra.ph/file/4a2e606b2f6d02bf61cb7.jpg","https://telegra.ph/file/c9c2969b16e86552f5b55.jpg","https://telegra.ph/file/d8a1aa350aa7d93e66d82.jpg","https://telegra.ph/file/904140188f9b0fc489590.jpg","https://telegra.ph/file/42adebe71fa4257f39b75.jpg","https://telegra.ph/file/0be9952c86295cb8f78db.jpg","https://telegra.ph/file/9036592c9f9b7b6bbc08a.jpg","https://telegra.ph/file/f14e9ba47831e5c82749f.jpg","https://telegra.ph/file/a0ef1ac59c6a1d104da96.jpg","https://telegra.ph/file/5e678d026ab7a6ac1922b.jpg","https://telegra.ph/file/0946bc125e890361ae2c2.jpg","https://telegra.ph/file/e35abc8996bb0fab9aa48.jpg","https://telegra.ph/file/997baa16121e0455acfad.jpg","https://telegra.ph/file/43a1f6a3fd4f9508ed5e3.jpg","https://telegra.ph/file/9377dbd1bdcf6b2f8d5dc.jpg","https://telegra.ph/file/5c02f2f3bd91ef1ccda66.jpg","https://telegra.ph/file/4f1d1437891ccc80812bf.jpg","https://telegra.ph/file/06e3a538771d6fd7f0a9a.jpg","https://telegra.ph/file/b583bcce2c335319ba368.jpg","https://telegra.ph/file/d6b80d241d4b329426452.jpg","https://telegra.ph/file/e4be7ef8a4f9acb9afc89.jpg","https://telegra.ph/file/5dc8d5be84911a0fca74c.jpg","https://telegra.ph/file/94f4ec81a1ea567eda83d.jpg","https://telegra.ph/file/3ef00db7ff5e15c8efc54.jpg","https://telegra.ph/file/22d56cf312248f4fa6489.jpg","https://telegra.ph/file/f5b2ba114aa8d8bb902db.jpg","https://telegra.ph/file/6dad71099a13379f2068d.jpg","https://telegra.ph/file/683959013c0a4c93acbd9.jpg","https://telegra.ph/file/be98dea07f4b5938a4490.jpg","https://telegra.ph/file/becb2d28b38bffd33f6ca.jpg","https://telegra.ph/file/f3bfe1068542aeaa5fd7c.jpg","https://telegra.ph/file/fe4c74858d288d5c61e65.jpg","https://telegra.ph/file/a6ee40f2a954fdac9cb18.jpg","https://telegra.ph/file/86ee02ba743844f861333.jpg","https://telegra.ph/file/158353fb837ca6ee8a77e.jpg","https://telegra.ph/file/9bf45ac99de2417e76bad.jpg","https://telegra.ph/file/72268e50261c5b9667f59.jpg","https://telegra.ph/file/90a3d8099817f471e66fe.jpg","https://telegra.ph/file/d6e53e25328d168eb37b7.jpg","https://telegra.ph/file/fda43826dded3e4738a9e.jpg","https://telegra.ph/file/77243a965fb002157c3f8.jpg","https://telegra.ph/file/9650e40e47e766cd81e35.jpg","https://telegra.ph/file/481a75960ca5d23f1db16.jpg","https://telegra.ph/file/a9ce7ce4258279cfbff31.jpg","https://telegra.ph/file/990bae958f00140b8ee2c.jpg","https://telegra.ph/file/02b80a77aaa39d88b2c79.jpg","https://telegra.ph/file/6c885935e50762da25472.jpg","https://telegra.ph/file/bf8ea432e132ec30cb0c2.jpg","https://telegra.ph/file/30250b09029076698e4b2.jpg","https://telegra.ph/file/bce5cfde2ed72fe655e69.jpg","https://telegra.ph/file/92f3de73c8a0c541dd672.jpg","https://telegra.ph/file/7145ff6c8877f27bf64ca.jpg","https://telegra.ph/file/d82e218980ec409672c68.jpg","https://telegra.ph/file/43693df3a30172b954632.jpg","https://telegra.ph/file/30b92f86ea0a712f4d0ed.jpg","https://telegra.ph/file/8cc5b6fe5a047a1ce1cbd.jpg","https://telegra.ph/file/e2c2fb24469b1b19a0866.jpg","https://telegra.ph/file/46b596a04f9db8041a9d1.jpg","https://telegra.ph/file/549ad9de7da164636e201.jpg","https://telegra.ph/file/2eb793749061146a6037c.jpg","https://telegra.ph/file/7ce0ef5e9216273b8bc27.jpg","https://telegra.ph/file/66a8e54145c27468f0c69.jpg","https://telegra.ph/file/da416ecfcc3e50973172e.jpg","https://telegra.ph/file/0708854fe104da9e1445e.jpg","https://telegra.ph/file/48aa2e6b48a32efaf7017.jpg","https://telegra.ph/file/920b88f2d2b0ccb4e648c.jpg","https://telegra.ph/file/fda8146fd6b22f9637733.jpg","https://telegra.ph/file/5417d79b1eea8d122008f.jpg","https://telegra.ph/file/a43806329815ecc6c2aa3.jpg","https://telegra.ph/file/7c4bf50287cc170d167c4.jpg","https://telegra.ph/file/4d0230d9ed3bf635c712a.jpg","https://telegra.ph/file/e2f9e93ba5af08a7930da.jpg","https://telegra.ph/file/60a2c14dadf79cd394d59.jpg","https://telegra.ph/file/2c564f940bf888aff4721.jpg","https://telegra.ph/file/4ba7e7a4c99f29fad2fb8.jpg","https://telegra.ph/file/912a1496be6da2e021a9a.jpg","https://telegra.ph/file/9a8ecf040565f18b480e4.jpg","https://telegra.ph/file/4b637281b81d3f637f643.jpg","https://telegra.ph/file/02fa944693f8fbcddbdde.jpg","https://telegra.ph/file/393d12eb83a47a0499312.jpg","https://telegra.ph/file/4899608b9d4efeb30ab3d.jpg","https://telegra.ph/file/3992f6c841bbeadad51c2.jpg","https://telegra.ph/file/31c70758a9f35665ee769.jpg","https://telegra.ph/file/d1a1932b2d0d3085c3e8c.jpg","https://telegra.ph/file/cb13f1b053b99afde7b6e.jpg","https://telegra.ph/file/21bc78f527468bc17974f.jpg","https://telegra.ph/file/fc95ab764d7d0ae09871b.jpg","https://telegra.ph/file/7461718da28a92be0e915.jpg","https://telegra.ph/file/9a00595a3a9c50d6d0417.jpg","https://telegra.ph/file/c07a4c967a8d1b74b7937.jpg","https://telegra.ph/file/05e66ebc81a2d4b545011.jpg","https://telegra.ph/file/8b99f321f1d2c04e7e070.jpg","https://telegra.ph/file/76d453ce911a26cd5d2c1.jpg","https://telegra.ph/file/4bc2491037c2b5e67d19f.jpg","https://telegra.ph/file/2203396db0c56a4a5a26e.jpg","https://telegra.ph/file/4dd18dc083d94fdf2b9f3.jpg","https://telegra.ph/file/8ad07af912c0d10445b38.jpg","https://telegra.ph/file/f96f524df10a61e0e3441.jpg","https://telegra.ph/file/11ef6ff8ef6a9ff8e0b28.jpg","https://telegra.ph/file/f92b2d170fb7a1b324da6.jpg","https://telegra.ph/file/b4b5e6c2b6b1571c8b202.jpg","https://telegra.ph/file/292c7ed92b8b6f2a05938.jpg","https://telegra.ph/file/563d14ae81d02b69e403b.jpg","https://telegra.ph/file/52557ff0a356ad90b0df0.jpg","https://telegra.ph/file/2705c40003a49da25f9d7.jpg","https://telegra.ph/file/5e618d003f40a9eea8826.jpg","https://telegra.ph/file/d555a6cb52d0c69c18b80.jpg","https://telegra.ph/file/1568d728f95e4cc7649e6.jpg","https://telegra.ph/file/ee59c2115f10b77eec04e.jpg","https://telegra.ph/file/cb3400b59354d3917a540.jpg","https://telegra.ph/file/ce6f69e98251a8c929bd8.jpg","https://telegra.ph/file/867456e9ba83a4988b020.jpg","https://telegra.ph/file/fafad841229f83fe0cdd4.jpg","https://telegra.ph/file/5378b26aeab101747e80f.jpg","https://telegra.ph/file/0eb5d8b82e4d5a34b7cb8.jpg","https://telegra.ph/file/1d2bff1f515a8a9137267.jpg","https://telegra.ph/file/2835355c0f265a05d1b85.jpg","https://telegra.ph/file/1678d68ff4fa6cdb8479e.jpg","https://telegra.ph/file/1ed45a4b6f019234106ec.jpg","https://telegra.ph/file/3e268fc172bc36273b8a5.jpg","https://telegra.ph/file/61a5097d674e1d08430fc.jpg","https://telegra.ph/file/3df107b48c5a03571110c.jpg","https://telegra.ph/file/39ef20f203c6b038b70e2.jpg","https://telegra.ph/file/511e9184e27c2b7eab420.jpg","https://telegra.ph/file/122703b999ebff4a0df9d.jpg","https://telegra.ph/file/30457fd55198b5b2e1f1f.jpg","https://telegra.ph/file/8d18336a635f511c7b09e.jpg","https://telegra.ph/file/689c0e8d963f0da95c6b8.jpg","https://telegra.ph/file/fe7fc8351b132f6a58755.jpg","https://telegra.ph/file/9e17f6e9b9f98ad9136be.jpg","https://telegra.ph/file/4f832d52e1093d1d618c2.jpg","https://telegra.ph/file/b6469a234fd250b1120ef.jpg","https://telegra.ph/file/97b92f4807e5b918388f3.jpg","https://telegra.ph/file/15b785d64a7a0f46891b7.jpg","https://telegra.ph/file/3dbf4fa1bc2b79b5b746b.jpg","https://telegra.ph/file/758f366c2c1dbec0e29c4.jpg","https://telegra.ph/file/12c7ad36af1131271f5a0.jpg","https://telegra.ph/file/961c2182274a5084e5cf0.jpg","https://telegra.ph/file/3eb2479b00f8c8f133f92.jpg","https://telegra.ph/file/1dd223e881133cc805b43.jpg","https://telegra.ph/file/56d288bb683218176bb4b.jpg","https://telegra.ph/file/05dd16ff17ad40eb4f2bb.jpg"]; 
const MARIN: string[] = ["https://telegra.ph/file/1442156ffea729eafc5a2.jpg", "https://telegra.ph/file/7edfdc57f89f508a6d166.jpg", "https://telegra.ph/file/5b8a8879ba305c7530543.jpg", "https://telegra.ph/file/415e5c1b5e06a60fe82d6.jpg", "https://telegra.ph/file/436ad5bc09c983893c330.jpg", "https://telegra.ph/file/866da383c8d2d01177066.jpg", "https://telegra.ph/file/6df8a0ada9eaf1e8e8cb8.jpg", "https:// telegra.ph/file/1f8125bef5d4ee1deeb90.jpg", "https://telegra.ph/file/f4253b875d058d2bf81a5.jpg", "https://telegra.ph/file/c8845eb73e0ee14967d3c.jpg", "https://telegra.ph/file/2fd9d3c1d73f0dd2bbae3.jpg", "https://telegra.ph/file/af862da50380ae37d7a2a.jpg", "https://telegra.ph/file/41bf552a93ed6977a3a04.jpg", "https://telegra.ph/file/ada594c1bd49ad155b5fe.jpg", "https://telegra.ph/file/3ec4974b34cebe7885ae4.jpg", "https://telegra.ph/file/4efeefa467f871646aa29.jpg", "https://telegra.ph/file/c284f7881bfd336642915.jpg", "https://telegra.ph/file/bd3273f5e8d1069dd842c.jpg", "https://telegra.ph/file/b6b464ae72bc07ca9268a.jpg", "https://telegra.ph/file/ee8981a3d4307e7e00ab9.jpg", "https://telegra.ph/file/1b16d00db6229aaf70f19.jpg", "https://telegra.ph/file/749046e4c47bd07b0f006.jpg", "https://telegra.ph/file/18170252e7f2dbf3acbf8.jpg", "https://telegra.ph/file/8e55bb36bf4cd2f4f3a06.jpg", "https://telegra.ph/file/a6a6abf8503e3bdd95cf0.jpg", "https://telegra.ph/file/7c4d5b94f5f3db8204200.jpg", "https://telegra.ph/file/bd2e07c550e78f9488bf5.jpg", "https://telegra.ph/file/de3b6c10bbcc148c380c0.jpg", "https://telegra.ph/file/32660ad9582aa5196ba20.jpg", "https://telegra.ph/file/e9465ec2465bf40591f86.jpg", "https://telegra.ph/file/7c51ba04262804d77fea9.jpg", "https://telegra.ph/file/829964dbc7df2d0d828b6.jpg", "https://telegra.ph/file/1a1d657824563e45c915f.jpg", "https://telegra.ph/file/919b37007c4cc8357ccc3.jpg", "https://telegra.ph/file/a30de31fa02394bc37a2a.jpg", "https://telegra.ph/file/ec854ad32b6ae7fc1e6b8.jpg", "https://telegra.ph/file/217e4b58e4defa8ceb537.jpg", "https://telegra.ph/file/fdac12dd09211aacc0b56.jpg", "https://telegra.ph/file/9d035ce100b9eb5b46ecf.jpg", "https://telegra.ph/file/36c0e534db776052c6c8f.jpg", "https://telegra.ph/file/1e8457bc5b1cbfd4158c5.jpg", "https://telegra.ph/file/70e2d556b309e662f85f6.jpg", "https://telegra.ph/file/5bdc6ae54226bc866aa34.jpg", "https://telegra.ph/file/ac77844e0de1fd34b0f1e.jpg", "https://telegra.ph/file/4e943c7ff6571e44b1cab.jpg", "https://telegra.ph/file/5babe677bcd972c1cd509.jpg", "https://telegra.ph/file/28eed4b2964f5b1805164.jpg", "https://telegra.ph/file/a22d6014c4355a3d49f28.jpg", "https://telegra.ph/file/25ca9e74bf7cb1e76f6c0.jpg", "https://telegra.ph/file/511b7dd8b49971c74270d.jpg", "https://telegra.ph/file/bb3dc24f16839653397b9.jpg", "https://telegra.ph/file/ede7f97c1c8b1a6255929.jpg", "https://telegra.ph/file/55504010908da2a1c40f7.jpg"]; // Populate with random images

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

  if (text === "/pfp" || text === "/animepfp") {
    await sendImageWithKeyboard(
      message.chat.id,
      "https://telegra.ph/file/00734ac3f3ebfe9cb264f.jpg",
      "Welcome To Elaina Pfp Store \nChoose Which Type Pfp You Wanr A Are Free ",
      {
        inline_keyboard: [
          [
            { text: "Zero Two", callback_data: "zerotwoo" },
            { text: "Marin Kitagawa", callback_data: "marinkitagava" }
          ],
          [
            { text: "Neko Anime [V1]", callback_data: "animev1" },
            { text: "Neko Anime [V2]", callback_data: "animev2" }
          ],
          [
            
            { text: "Neko Anime [V3]", callback_data: "nekov3" }
          ],
          [
            { text: "Husbando", callback_data: "animeboyspfp" },
            { text: "Fox Girl", callback_data: "foxgirlz" }
          ],
          [
            { text: "Kitsune", callback_data: "kitsunepfp" },
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
      const helpText = "*Help Section*\n\nUse /start to begin.\nI'll add more commands here.";             
      await sendMarkdown(chatId, helpText);
      break;       
    case "animev1":
      imageUrl = await fetchImage("https://api.waifu.pics/sfw/neko");
      break;
    case "animev2":
      imageUrl = await fetchImage("https://nekos.best/api/v2/neko");
      break;
    case "animeboyspfp":
      imageUrl = await fetchImage("https://nekos.best/api/v2/husbando");
      break;
    case "kitsunepfp":
      imageUrl = await fetchImage("https://nekos.best/api/v2/kitsune");
      break;
    case "waifupfp":
      imageUrl = await fetchImage("https://api.waifu.pics/sfw/waifu");
      break;
    case "foxgirlz":
      imageUrl = await fetchImage("https://nekos.life/api/v2/img/fox_girl)";
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
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.url || data.results[0].url || null;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}

function randomChoice(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}


async function editMessageText(chatId: string, messageId: number, text: string, keyboard?: InlineKeyboard) {
  try {
    const response = await fetch(apiUrl("editMessageText"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: messageId,
        text,
        parse_mode: "Markdown",
        reply_markup: keyboard
      })
    });


    const result = await response.json();
    if (!result.ok) {
    
      await sendMarkdown(
        ADMIN_CHAT_ID,
        `*Error Editing Message*\n\n*Chat ID:* ${chatId}\n*Message ID:* ${messageId}\n*Error:* ${result.description}`
      );
    }
  } catch (error) {
    
    console.error("Error in editMessageText:", error);
    await sendMarkdown(
      ADMIN_CHAT_ID,
      `*Error Editing Message*\n\n*Chat ID:* ${chatId}\n*Message ID:* ${messageId}\n*Error:* ${error.message}`
    );
  }
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

