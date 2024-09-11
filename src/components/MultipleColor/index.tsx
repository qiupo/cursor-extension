import { CloseOutlined } from "@ant-design/icons"
import { Button, ColorPicker, Form, Space } from "antd"

export default function MultipleColor({
  fatherName,
  label
}: {
  fatherName: string
  label: string
}) {
  return (
    <Form.Item label={label}>
      <Form.List name={[fatherName, "colors"]}>
        {(subFields, subOpt) => (
          <div style={{ display: "flex", flexDirection: "column", rowGap: 16 }}>
            {subFields.map((subField) => (
              <Space key={subField.key}>
                <Form.Item
                  noStyle
                  name={[subField.name]}
                  normalize={(value) => value?.toHexString()}>
                  <ColorPicker showText />
                </Form.Item>
                <CloseOutlined
                  onClick={() => {
                    subOpt.remove(subField.name)
                  }}
                />
              </Space>
            ))}
            <Button type="dashed" onClick={() => subOpt.add()} block>
              + 增加颜色
            </Button>
          </div>
        )}
      </Form.List>
    </Form.Item>
  )
}
