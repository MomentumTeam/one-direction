import { useHistory } from 'react-router-dom';
import { Typography } from "antd";
import styles from "./SharingFolders.module.css";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Space } from "antd";
import { selectFolders, AddFolders, RemoveFolder } from "./SharingFoldersSlice";
import { useSelector, useDispatch } from "react-redux";

const { Title, Paragraph, Text } = Typography;

function SharingFolders() {
  let history = useHistory();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const folders = useSelector(selectFolders);

  const onFinish = (values) => {
    console.log('values', values.additionalSharingFolders)
    console.log('onFinish');
    if (values !== null) {
      console.log('null');
      dispatch(AddFolders(values.additionalSharingFolders));
    }
    console.log('history')
    history.push("/systems");

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        name="SharingFolders"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        autoComplete="off"
        layout="vertical"
        className={styles.marginTop}
      >

        {folders.map((folder) => (
          <Space key={folders.indexOf(folder)} align="center ">
            <Form.Item label={["ניתוב תיקייה ", folders.indexOf(folder) + 1]} >
              <Input
                className={styles.input}
                disabled
                value={folder}
              />
            </Form.Item>
            <MinusCircleOutlined style={{}} onClick={() => {
              dispatch(RemoveFolder(folder));
            }} />
          </Space>

        ))}

        <Form.List name="additionalSharingFolders">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="center ">
                  <Form.Item
                    {...field}
                    label={["ניתוב תיקייה ", fields.indexOf(field) + folders.length + 1]}
                    name={[field.name, `folderPath`]}
                    fieldKey={[field.fieldKey, "folderPath"]}
                    rules={[{ required: true, message: "אנא מלא שדה זה!" }]}
                  >
                    <Input className={styles.input} />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => {
                    remove(field.name)
                  }} />
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
