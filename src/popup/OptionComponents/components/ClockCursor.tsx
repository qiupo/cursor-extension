import { ColorPicker, Form } from "antd"

export default function ClockCursor() {
  return (
    <>
      <Form.Item
        name={["options", "dateColor"]}
        label="日期颜色"
        normalize={(value) => value?.toHexString()}
        labelCol={{ xs: { span: 8 } }}
        wrapperCol={{ xs: { span: 8 } }}>
        <ColorPicker placement="bottom" />
      </Form.Item>
      <Form.Item
        name={["options", "faceColor"]}
        label="外层颜色"
        normalize={(value) => value?.toHexString()}
        labelCol={{ xs: { span: 8 } }}
        wrapperCol={{ xs: { span: 8 } }}>
        <ColorPicker placement="bottom" />
      </Form.Item>
      <Form.Item
        name={["options", "secondsColor"]}
        label="秒针颜色"
        normalize={(value) => value?.toHexString()}
        labelCol={{ xs: { span: 8 } }}
        wrapperCol={{ xs: { span: 8 } }}>
        <ColorPicker placement="bottom" />
      </Form.Item>
      <Form.Item
        name={["options", "minutesColor"]}
        label="分针颜色"
        normalize={(value) => value?.toHexString()}
        labelCol={{ xs: { span: 8 } }}
        wrapperCol={{ xs: { span: 8 } }}>
        <ColorPicker placement="top" />
      </Form.Item>
      <Form.Item
        name={["options", "hoursColor"]}
        label="时针颜色"
        normalize={(value) => value?.toHexString()}
        labelCol={{ xs: { span: 8 } }}
        wrapperCol={{ xs: { span: 8 } }}>
        <ColorPicker placement="top" />
      </Form.Item>
    </>
  )
}
