import { Form } from "antd"

import ClockCursor from "./components/ClockCursor"
import EmojiCursor from "./components/EmojiCursor"
import FairyDustCursor from "./components/FairyDustCursor"
import FollowingDotCursor from "./components/FollowingDotCursor"
import MouseCursor from "./components/MouseCursor"
import RainbowCursor from "./components/RainbowCursor"
import SpringyEmojiCursor from "./components/SpringyEmojiCursor"
import TextFlag from "./components/TextFlag"
import TrailingCursor from "./components/TrailingCursor"

const defaultOptions = {
  ghostCursor: undefined,
  bubbleCursor: undefined,
  clockCursor: {
    dateColor: "#ef8a17",
    faceColor: "#F75590",
    secondsColor: "#FBD87F",
    minutesColor: "#FBD87F",
    hoursColor: "#10FFCB"
  },
  rainbowCursor: {
    length: 10,
    colors: [
      "#FF0000",
      "#FF7F00",
      "#FFFF00",
      "#00FF00",
      "#0000FF",
      "#4B0082",
      "#9400D3"
    ],
    size: 2
  },
  fairyDustCursor: {
    colors: ["#FF6347", "#FFD700", "#7CFC00", "#00BFFF", "#9400D3"]
  },
  snowflakeCursor: undefined,
  trailingCursor: {
    particles: 15,
    rate: 0.8,
    baseImageSrc: ""
  },
  followingDotCursor: { color: ["#323232a6"] },
  textFlag: {
    text: "摸鱼",
    color: ["#FF0000"]
  },
  springyEmojiCursor: { emoji: "🤷‍♂️" },
  emojiCursor: { emoji: ["🔥", "🐬", "🦆"] },
  "mouse-1": { color: "#ef672a" },
  "mouse-2": { color: "#ef672a" },
  "mouse-3": { color: "#ef672a" },
  "mouse-4": { color: "#ef672a" },
  "mouse-5": { color: "#ef672a" },
  "mouse-6": { color: "#ef672a" },
  "mouse-7": { color: "#ef672a" },
  "mouse-8": { color: "#ef672a" },
  "mouse-9": { color: "#ef672a" },
  "mouse-10": { color: "#ef672a" },
  "mouse-11": { color: "#ef672a" }
  //   "mouse-12": { color: "#ef672a" },
}
export type optionsType =
  | "ghostCursor"
  | "bubbleCursor"
  | "clockCursor"
  | "rainbowCursor"
  | "fairyDustCursor"
  | "snowflakeCursor"
  | "trailingCursor"
  | "followingDotCursor"
  | "textFlag"
  | "springyEmojiCursor"
  | "emojiCursor"
  | "mouse-1"
  | "mouse-2"
  | "mouse-3"
  | "mouse-4"
  | "mouse-5"
  | "mouse-6"
  | "mouse-7"
  | "mouse-8"
  | "mouse-9"
  | "mouse-10"
  | "mouse-11"
export default function OptionsComponent({ type }: { type: optionsType }) {
  const form = Form.useFormInstance()
  form.setFieldValue("options", defaultOptions[type])
  const render = (type: optionsType) => {
    switch (type) {
      case "ghostCursor":
        return null
      case "bubbleCursor":
        return null
      case "clockCursor":
        return <ClockCursor />
      case "rainbowCursor":
        return <RainbowCursor />
      case "fairyDustCursor":
        return <FairyDustCursor />
      case "snowflakeCursor":
        return null
      case "trailingCursor":
        return <TrailingCursor />
      case "followingDotCursor":
        return <FollowingDotCursor />
      case "textFlag":
        return <TextFlag />
      case "springyEmojiCursor":
        return <SpringyEmojiCursor />
      case "emojiCursor":
        return <EmojiCursor />
      case "mouse-1":
      case "mouse-2":
      case "mouse-3":
      case "mouse-4":
      case "mouse-5":
      case "mouse-6":
      case "mouse-7":
      case "mouse-8":
      case "mouse-9":
      case "mouse-10":
      case "mouse-11":
        return <MouseCursor />
    }
  }
  return render(type)
}
