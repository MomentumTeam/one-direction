import { Typography } from "antd";
import styles from "./SharingFolders.module.css";
import { Content } from "../../components/Content";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Space } from "antd";

const { Title, Paragraph, Text } = Typography;

function SharingFolders() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className={styles.fatherDiv}>
      <Title level={2}>תיקיות שיתוף</Title>
      <Paragraph className={styles.marginTop} strong={true}>
        מנועי האוטומציה שלנו זיהו את תיקיות השיתוף הרלוונטיות עבורך
        <br />
        ניתן להוסיף תיקיות נוספות (העתק-הדבק לנתיב)
      </Paragraph>

      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        className={styles.marginTop}
      >
        <Form.Item label="ניתוב תיקייה 1">
          <Input
            className={styles.input}
            disabled
            value="C:\Users\Liora Yacob"
          />
        </Form.Item>
        <Form.Item label="ניתוב תיקייה 2">
          <Input
            className={styles.input}
            disabled
            value="C:\Users\Liora Yacob\my-one"
          />
        </Form.Item>

        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    label={["ניתוב תיקייה ", fields.indexOf(field) + 3]}
                    name={[field.name, "first"]}
                    fieldKey={[field.fieldKey, "first"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input className={styles.input} />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  className={styles.addButton}
                  shape="circle"
                  icon={<PlusOutlined />}
                  onClick={() => add()}
                  size="large"
                />
                <Text style={{ marginRight: "1%" }}>תיקייה נוספת</Text>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item className={styles.submit}>
          <Button htmlType="submit" shape="round" size="large">
            אישור תיקיות שיתוף
            <ArrowLeftOutlined />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SharingFolders;
