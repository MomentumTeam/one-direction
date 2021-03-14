import { Button, Form, Col, Row, message } from "antd";
import { Content } from "../../components/Content";
import { EditUserDetails } from "./EditUserDetails";
import { SecurityQuestions } from "./SecurityQuestions";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Avatar, Image, Upload } from "antd";
import styles from "./PersonalInformation.module.css";
import { EditAvatar } from "./EditAvatar";
import { useState } from "react";

export const PersonalInformationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Content>
        <Form
          style={{ width: "100%" }}
          layout="vertical"
          form={form}
          onFinish={onFinish}
          name="PersonalInformationForm"
        >
          <EditAvatar />
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
