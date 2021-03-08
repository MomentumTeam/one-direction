import { Button, Form } from "antd";
import { Content } from "../../components/Content";
import { EditUserDetails } from "./EditUserDetails";
import { SecurityQuestions } from "./SecurityQuestions";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import styles from "./PersonalInformation.module.css";
export const PersonalInformationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
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
          <EditUserDetails />
          <SecurityQuestions />
          <Form.Item className={styles.submit}>
            <Button htmlType="submit" type="primary" shape="round" size="large">
              אישור פרטים אשיים
              <ArrowLeftOutlined />
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </div>
  );
};
