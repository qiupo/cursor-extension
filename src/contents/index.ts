
import { sendToBackground, } from "@plasmohq/messaging";
import { listen } from "@plasmohq/messaging/message"
import type { PlasmoCSConfig } from "plasmo";
// import "url:./cursor-effects.js";
// import "url:./mouse-effects.js";
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  run_at: 'document_end'
}
let nowCursor;
window.addEventListener('load', function () {
  init();
});
listen((r) => {
  refresh(r.body)
})

function refresh(params) {
  const { type, options } = params || {};
  const op = options;

  nowCursor?.destroy?.();
  if (type !== "none") {
    const cv = document.getElementById("vixcityCanvas");
    const vd = document.getElementById("vixcityDiv");
    cv && cv.remove();
    vd && vd.remove();
    if ((type || "").startsWith("mouse-")) {
      const t = type.split("-")[1];
      const o = op?.color || "#ef672a";
      nowCursor = window['createMouseCanvas']?.()({ type: t, color: o });
    } else {
      nowCursor = new window['cursoreffects'][type](op);
    }
  }
}

async function init() {
  console.log("init");
  const TO = await sendToBackground({
    name: "ping",
    body: {
      action: 'init'
    }
  })
  refresh(TO);
}
