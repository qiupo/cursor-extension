import { sendToContentScript, type PlasmoMessaging } from "@plasmohq/messaging";
import { Storage } from "@plasmohq/storage"
console.log(
    "Live now; make now always the most precious time. Now will never come again."
)
let newTab = 'https://www.google.com/'
let TO = {
    type: "ghostCursor",
    options: "",
};
const storage = new Storage()

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
        body: t
    });
}

async function saveNewTab(t) {
    newTab = t;
    await storage.set("newTab", t)
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    const request = req.body;
    if (request.action === "init") {
        const result: any = await storage.get("cursorOptions") // "value"
        if (result) {
            TO = result;
            res.send(result);
        } else {
            res.send({})
        }
    } else if (request.action === "get") {
        res.send(TO);
    } else if (request.action === "set") {
        await saveTO(request.payload);
    } else if (request.action === "setNewTab") {
        await saveNewTab(request.payload);
    } else if (request.action === "getNewTab") {
        const result: any = await storage.get("newTab") // "value"
        if (result) {
            newTab = result;
            res.send(result);
        } else {
            res.send(newTab)
        }
    } else {
        res.send({});
    }
}

export default handler
