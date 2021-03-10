import { Button, Form, Col, Row, message } from "antd";
import { Content } from "../../components/Content";
import { EditUserDetails } from "./EditUserDetails";
import { SecurityQuestions } from "./SecurityQuestions";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Avatar, Image, Upload } from "antd";
import styles from "./PersonalInformation.module.css";
import { EditAvatar } from "./EditAvatar";
import { useState } from "react";
import Title from "antd/lib/typography/Title";
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
        >
          <Row justify="space-between">
            <Col>
              <Title level={2}>הפרטים האישיים שלי</Title>
            </Col>
            <EditAvatar />
          </Row>
          <EditUserDetails />
          <SecurityQuestions />
          <Form.Item className={styles.submit}>
            <Button htmlType="submit" shape="round" size="large">
              אישור פרטים אישיים
              <ArrowLeftOutlined />
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </div>
  );
};
