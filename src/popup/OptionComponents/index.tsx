import { Form } from "antd"
import { useEffect } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import ClockCursor from "./components/ClockCursor"
import EmojiCursor from "./components/EmojiCursor"
import FairyDustCursor from "./components/FairyDustCursor"
import FollowingDotCursor from "./components/FollowingDotCursor"
import GhostCursor from "./components/GhostCursor"
import MouseCursor from "./components/MouseCursor"
import RainbowCursor from "./components/RainbowCursor"
import SnowflakeCursor from "./components/SnowflakeCursor"
import SpringyEmojiCursor from "./components/SpringyEmojiCursor"
import TextFlag from "./components/TextFlag"
import TrailingCursor from "./components/TrailingCursor"
import CharacterCursor from "./components/CharacterCursor"

export type optionsType =
  | "characterCursor"
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
  const render = (type: optionsType) => {
    switch (type) {
      case "characterCursor":
        return <CharacterCursor />
      case "ghostCursor":
        return <GhostCursor />
      case "bubbleCursor":
        return null
      case "clockCursor":
        return <ClockCursor />
      case "rainbowCursor":
        return <RainbowCursor />
      case "fairyDustCursor":
        return <FairyDustCursor />
      case "snowflakeCursor":
        return <SnowflakeCursor />
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
