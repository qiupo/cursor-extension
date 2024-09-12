import { useEffect, useState } from "react"

import OptionsComponent from "../OptionComponents"

import "./index.css"

import { Button, ConfigProvider, Form, Input, Select, Space } from "antd"

import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

const defaultOptions = {
  characterCursor: {
    colors: ["#de0b90", "#e23434", "#fc5d5d", "#00ff51", "#fac937"],
    characters: ["h", "e", "l", "l", "0"],
    font: "15px serif"
  },
  ghostCursor: {
    randomDelay: true
  },
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
  snowflakeCursor: {
    icon: ["❄️"]
  },
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
  springyEmojiCursor: { emoji: "🐶🤷‍♂️🦅" },
  emojiCursor: {
    emoji: [
      "🔥",
      "🐬",
      "🦆",
      "🫥",
      "😶‍🌫️",
      "🥶",
      "🤯",
      "🤔",
      "🫢",
      "🫠",
      "🤫",
      "🫡",
      "🫣"
    ]
  },
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
function getBackgroundMessage({
  action
}: {
  action: string
}): Promise<{ type: string; options: any }> {
  return sendToBackground({
    name: "ping",
    body: {
      action: action
    }
  })
}
export function PopupContent() {
  const [form] = Form.useForm()
  // const [form2] = Form.useForm()
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  }
  useEffect(() => {
    getBackgroundMessage({ action: "get" }).then((TO) => {
      form.setFieldsValue(TO)
    })
    // getBackgroundMessage({ action: "getNewTab" }).then((homePage) => {
    //   form2.setFieldsValue({ homePage: homePage })
    // })
  }, [])
  const type = Form.useWatch("type", form)
  const storage = new Storage()
  useEffect(() => {
    storage.get("cursorOptions").then((res) => {
      form.setFieldValue("options", res[type] || defaultOptions[type])
    }) // "value"
  }, [type])
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values)
    sendToBackground({
      name: "ping",
      body: {
        action: "set",
        payload: values
      }
    })
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            /* 这里是你的组件 token */
            itemMarginBottom: 16,
            labelColonMarginInlineEnd: 4
          }
        }
      }}>
      <div className="text-[16px]">
        <div>鼠标特效</div>
        <Form
          {...formItemLayout}
          form={form}
          name="setting"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError>
          <Form.Item name="type" label="样式类型">
            <Select
              placeholder="选择一个样式"
              options={[
                { value: "none", label: "关闭" },
                { value: "clockCursor", label: "钟表" },
                { value: "ghostCursor", label: "重影" },
                { value: "bubbleCursor", label: "气泡" },
                { value: "characterCursor", label: "字符" },
                { value: "emojiCursor", label: "emoji" },
                { value: "springyEmojiCursor", label: "一串emoji" },
                { value: "followingDotCursor", label: "跟随的黑点" },
                { value: "fairyDustCursor", label: "彩点" },
                { value: "rainbowCursor", label: "彩虹" },
                { value: "snowflakeCursor", label: "下雪" },
                { value: "trailingCursor", label: "拖动" },
                { value: "textFlag", label: "文字" },
                { value: "mouse-1", label: "光点" },
                { value: "mouse-2", label: "光点落下" },
                { value: "mouse-3", label: "光点升起" },
                { value: "mouse-4", label: "光点聚合" },
                { value: "mouse-5", label: "光点环绕" },
                { value: "mouse-6", label: "折线" },
                { value: "mouse-7", label: "光点收拢" },
                { value: "mouse-8", label: "彩灯" },
                { value: "mouse-9", label: "萤火虫" },
                { value: "mouse-10", label: "味道散发" },
                { value: "mouse-11", label: "光线环绕" }
              ]}></Select>
          </Form.Item>
          <OptionsComponent type={type} />
          <Form.Item noStyle>
            <Space>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
              <Button
                htmlType="button"
                onClick={() => {
                  form.setFieldValue("options", defaultOptions[type])
                }}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
        {/* <div className="mt-[12px]">首页地址</div>
        <Form
          {...formItemLayout}
          name="setting"
          form={form2}
          onFinish={(values) => {
            sendToBackground({
              name: "ping",
              body: {
                action: "setNewTab",
                payload: values?.homePage
              }
            })
          }}
          scrollToFirstError>
          <Form.Item name="homePage" label="首页跳转地址">
            <Input></Input>
          </Form.Item>
          <Form.Item noStyle>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form> */}
      </div>
    </ConfigProvider>
  )
}
