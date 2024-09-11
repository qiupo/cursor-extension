import { Form, Input } from "antd"

export default function FairyDustCursor() {
  return (
    <>
      <Form.Item
        name={["options","emoji"]}
        label="emoji"
        normalize={(value) => value?.split(",")}>
        <Input placeholder="输入多个，用,逗号隔开" />
      </Form.Item>
    </>
  )
}
