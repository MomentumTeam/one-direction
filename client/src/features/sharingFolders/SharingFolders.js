import { useHistory } from 'react-router-dom';
import { Typography } from "antd";
import styles from "./SharingFolders.module.css";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Col, Row, Space } from "antd";
import { selectFolders, update, RemoveFolder } from "./SharingFoldersSlice";
import { useSelector, useDispatch } from "react-redux";
import { Content } from "../../components/Content";
import { updateUser, setChanges } from "../user/userSlice";

const { Title, Paragraph, Text } = Typography;

function SharingFolders() {
  let history = useHistory();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const folders = useSelector(selectFolders);

  const onFinish = async(values) => {
    try {
      if (values.additionalSharingFolders !== undefined) {
        let additionalFoldersPath = values.additionalSharingFolders.map(obj => obj.folderPath);
        const joinedFoldersArray = folders.concat(additionalFoldersPath);
        dispatch(setChanges({ Shares: joinedFoldersArray.toString() }));

        const response = await dispatch(updateUser());
        console.log('response folders', response)

        if (response.payload.severity === "success") {
          console.log('success folders');
          dispatch(update(joinedFoldersArray));
          history.push("/systems");
        }
        else {
          console.log('error', response.payload.message);
        }
      }
    }
    catch (err) {
      console.log('err', err);
    }
  };



  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Content>

      <div className={styles.fatherDiv}>

        <Row gutter={[24, 16]}>
          <Col span={12}>
            <Title level={2}>תיקיות שיתוף</Title>
            <Paragraph className={styles.marginTop} strong={true}>
              מנועי האוטומציה שלנו זיהו את תיקיות השיתוף הרלוונטיות עבורך
        <br />
        ניתן להוסיף תיקיות נוספות (העתק-הדבק לנתיב)
      </Paragraph>
          </Col>
          <Col span={12} />
        </Row>

        <Form
          name="SharingFolders"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
          autoComplete="off"
          layout="vertical"
          className={styles.marginTop}
        >
          <Row gutter={[24, 16]} className={styles.tailRow}>
            <Col span={24} className={styles.tile} style={{ textAlign: "center" }}>


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
            </Col>
          </Row>

          <br />
          <Row justify="end" align="bottom" className={styles.tailRow}>
            <div>
              <Form.Item >
                <Button htmlType="submit" shape="round" size="large">
                  אישור תיקיות שיתוף
            <ArrowLeftOutlined />
                </Button>
              </Form.Item>
            </div>
          </Row>
        </Form>
      </div >
    </Content>

  );
}

export default SharingFolders;
