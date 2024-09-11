import { ColorPicker, Form, InputNumber } from "antd"

export default function MouseCursor() {
  return (
    <>
      <Form.Item
        name={["options", "color"]}
        label="颜色"
        normalize={(value) => value?.toHexString()}>
        <ColorPicker />
      </Form.Item>
    </>
  )
}
