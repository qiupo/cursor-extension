import { sendToContentScript, type PlasmoMessaging } from "@plasmohq/messaging";
import { Storage } from "@plasmohq/storage"
console.log(
    "Live now; make now always the most precious time. Now will never come again."
)
let newTab = 'https://www.google.com/'
const storage = new Storage()

// storage.get("cursorOptions").then((result: any) => {
//     if (result) {
//         TO = result;
//     }
// })
async function saveTO(t) {
    storage.get("cursorOptions").then(async (result: any) => {
        console.log('xxx', result)
        await storage.set("cursorOptions", {
            ...(result || {}),
            [t.type]: t.options,
            activeType: t.type
        })
        sendToContentScript({
            name: 'set',
            body: t
        });
    })

}

async function getTO(callback) {
    const result: any = await storage.get("cursorOptions") // "value"
    console.log('xxx', result)
    if (result) {
        callback({
            type: result.activeType,
            options: result[result.activeType]
        });
    } else {
        callback({
            type: 'ghostCursor'
        })
    }
}

async function saveNewTab(t) {
    newTab = t;
    await storage.set("newTab", t)
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    const request = req.body;
    if (request.action === "init") {
        getTO(res.send)
    } else if (request.action === "get") {
        getTO(res.send)
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
