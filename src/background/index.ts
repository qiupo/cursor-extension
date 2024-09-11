import { sendToContentScript, type PlasmoMessaging } from "@plasmohq/messaging";
import { Storage } from "@plasmohq/storage"
console.log(
  "Live now; make now always the most precious time. Now will never come again."
)
let TO = {
  type: "ghostCursor",
  options: "",
};
const storage = new Storage()

// 监听来自content-script的消息
// chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
//   console.log(request);
//   if (request.action === "init") {
//     const result: any = await storage.get("cursorOptions") // "value"
//     console.log('result', result)
//     if (result?.cursorOptions) {
//       TO = result?.cursorOptions;
//       sendResponse(result?.cursorOptions);
//     }
//     return true;
//   } else if (request.action === "get") {
//     sendResponse(TO);
//   } else if (request.action === "set") {
//     await saveTO(request.payload);
//   } else {
//     sendResponse({});
//   }
// });
storage.get("cursorOptions").then((result: any) => {
  if (result?.cursorOptions) {
    TO = result?.cursorOptions;
  }
})
async function saveTO(t) {
  TO = t;
  // chrome.storage.sync.set({ cursorOptions: t });
  await storage.set("cursorOptions", t)
  sendToContentScript({
    name: 'set',
    body: {
      action: 'set',
      payload: t
    }
  });
}
function getTO() {
  return TO;
}
// 获取当前选项卡ID
function getCurrentTabId(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (callback) callback(tabs.length ? tabs[0].id : null);
  });
}
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const request = req.body;
  console.log('req', request)
  console.log(request);
  if (request.action === "init") {
    const result: any = await storage.get("cursorOptions") // "value"
    console.log('result', result)
    if (result?.cursorOptions) {
      TO = result?.cursorOptions;
      res.send(result?.cursorOptions);
    }
  } else if (request.action === "get") {
    res.send(TO);
  } else if (request.action === "set") {
    await saveTO(request.payload);
  } else {
    res.send({});
  }
}

export default handler
