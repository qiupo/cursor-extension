import { ColorPicker, Form, Input, InputNumber, Switch } from "antd"

export default function FairyDustCursor() {
  return (
    <>
      <Form.Item
        name={["options", "icon"]}
        label="图案"
        normalize={(value) => value?.split(",")}>
        <Input placeholder="输入多个，用,逗号隔开" />
      </Form.Item>
    </>
  )
}
