import { useEffect, useState } from "react"

import OptionsComponent from "../OptionComponents"

import "./index.css"

import { Button, ConfigProvider, Form, Select } from "antd"

import { sendToBackground } from "@plasmohq/messaging"

function getBackgroundMessage(): Promise<{ type: string; options: any }> {
  return sendToBackground({
    name: "ping",
    body: {
      action: "get"
    }
  })
}
export function PopupContent() {
  const [init, setInit] = useState({
    type: "none",
    options: {}
  })
  const [form] = Form.useForm()
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
    getBackgroundMessage().then((TO) => {
      console.log("TOOOO", TO)
      setInit(TO)
      form.setFieldsValue(TO)
    })
  }, [])
  const type = Form.useWatch("type", form)
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
  console.log("type", type)
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
          initialValues={init}
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
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  )
}
