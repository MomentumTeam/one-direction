import { Button, Form } from "antd";
import { Content } from "../../components/Content";
import { EditUserDetails } from "./EditUserDetails";
import { SecurityQuestions } from "./SecurityQuestions";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Avatar, Image, Upload } from "antd";
import styles from "./PersonalInformation.module.css";
import { EditAvatar } from "./EditAvatar";
export const PersonalInformationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <div>
      <Content>
        {/* <Avatar
          size={64}
          src={
            <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
        /> */}

        <Form
          style={{ width: "100%" }}
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          {/* <Form.Item
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item> */}
          <EditUserDetails />
          <SecurityQuestions />
          <Form.Item className={styles.submit}>
            <Button htmlType="submit" type="primary" shape="round" size="large">
              אישור פרטים אישיים
              <ArrowLeftOutlined />
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </div>
  );
};
