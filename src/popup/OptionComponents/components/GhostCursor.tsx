import { ColorPicker, Form, Input, InputNumber, Switch } from "antd"
import { useEffect } from "react"

export default function GhostCursor() {
  const form = Form.useFormInstance()
  const randomDelay = Form.useWatch(["options", "randomDelay"], form)
  return (
    <>
      <Form.Item name={["options", "randomDelay"]} label="随机延迟">
        <Switch />
      </Form.Item>
      <Form.Item dependencies={["randomDelay"]} noStyle>
        {({ getFieldValue }) =>
          getFieldValue(["options", "randomDelay"]) ? (
            <>
              <Form.Item name={["options", "minDelay"]} label="最小延迟">
                <InputNumber />
              </Form.Item>
              <Form.Item name={["options", "maxDelay"]} label="最大延迟">
                <InputNumber />
              </Form.Item>
              <Form.Item name={["options", "lifeSpan"]} label="存续时间">
                <InputNumber />
              </Form.Item>
            </>
          ) : null
        }
      </Form.Item>
      <Form.Item name={["options", "image"]} label="自定义图片">
        <Input />
      </Form.Item>
    </>
  )
}
