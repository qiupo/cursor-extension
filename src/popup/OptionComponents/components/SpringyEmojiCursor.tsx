import { Form, Input } from "antd"

export default function SpringyEmojiCursor() {
  return (
    <>
      <Form.Item name={["options","emoji"]} label="emoji">
        <Input />
      </Form.Item>
    </>
  )
}
