import { ColorPicker, Form, Input, InputNumber } from "antd"

export default function TrailingCursor() {
  return (
    <>
      <Form.Item name={["options", "particles"]} label="粒子">
        <InputNumber />
      </Form.Item>
      <Form.Item name={["options", "rate"]} label="速度">
        <InputNumber min={0} precision={2} />
      </Form.Item>
      <Form.Item name={["options", "baseImageSrc"]} label="图片地址">
        <Input></Input>
      </Form.Item>
    </>
  )
}
