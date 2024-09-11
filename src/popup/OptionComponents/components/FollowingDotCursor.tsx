import { ColorPicker, Form } from "antd"

export default function FairyDustCursor() {
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
