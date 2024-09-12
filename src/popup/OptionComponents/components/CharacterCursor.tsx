import { ColorPicker, Form, Input, InputNumber, Switch } from "antd"
import MultipleColor from "src/components/MultipleColor"

export default function CharacterCursor() {
  return (
    <>
      <Form.Item
        name={["options", "characters"]}
        label="文字"
        normalize={(value) => value?.split(",")}>
        <Input placeholder="输入多个，用,逗号隔开" />
      </Form.Item>
      <MultipleColor fatherName="options" label="颜色" />
      {/* <Form.Item
        name={["options", "cursorOffset"]}
        label="偏移量"
        normalize={(value) => ({
          x: value?.split(",")[0],
          y: value?.split(",")[1]
        })}>
        <Input placeholder="输入数字使用,分割，如12,12" />
      </Form.Item> */}
      <Form.Item name={["options", "font"]} label="字体">
        <Input />
      </Form.Item>
    </>
  )
}
