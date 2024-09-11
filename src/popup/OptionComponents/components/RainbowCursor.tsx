import { ColorPicker, Form, InputNumber } from "antd"
import MultipleColor from "src/components/MultipleColor"

export default function RainbowCursor() {
  return (
    <>
      <MultipleColor fatherName="options" label="外层颜色" />
      <Form.Item name={["options", "length"]} label="长度">
        <InputNumber />
      </Form.Item>
      <Form.Item name={["options", "size"]} label="大小">
        <InputNumber />
      </Form.Item>
    </>
  )
}
