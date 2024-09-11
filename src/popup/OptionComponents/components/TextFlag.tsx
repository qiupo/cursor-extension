import { ColorPicker, Form, Input } from "antd"

export default function TextFlag() {
  return (
    <>
      <Form.Item
        name={["options", "color"]}
        label="颜色"
        normalize={(value) => value?.toHexString()}>
        <ColorPicker />
      </Form.Item>
      <Form.Item name={["options", "text"]} label="文本">
        <Input />
      </Form.Item>
    </>
  )
}
