import { useEffect } from "react"

import { sendToBackground } from "@plasmohq/messaging"

export default function IndexNewTab() {
  useEffect(() => {
    // 新开窗口
    sendToBackground({
      name: "ping",
      body: {
        action: "getNewTab"
      }
    }).then((res) => {
      // 判断是否是url,不是url就不跳转，是就跳转
      if (res.startsWith("http")) {
        window.open(res)
      } else {
        //如果没有协议头则添加
        window.open(`http://${res}`)
      }
      // window.open(res)
    })
  }, [])
  return (
    <div>
      <div className="text-[16px]">Hello new</div>
    </div>
  )
}
