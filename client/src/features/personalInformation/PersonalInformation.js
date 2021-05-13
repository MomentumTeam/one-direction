import { useHistory } from 'react-router-dom';
import { Button, Form, Col, Row, message } from "antd";
import { Content } from "../../components/Content";
import { EditUserDetails } from "./EditUserDetails";
import { SecurityQuestions } from "./SecurityQuestions";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Avatar, Image, Upload } from "antd";
import styles from "./PersonalInformation.module.css";
import { EditAvatar } from "./EditAvatar";
import Title from "antd/lib/typography/Title";
import { updateUserServer, setChanges, updateUserObj, updateStage ,selectUserObj } from "../user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import openAlert from "../../components/Alert";


export const PersonalInformationForm = ({user}) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      Object.keys(values).forEach(key => values[key] === undefined && delete values[key]);  //remove unchanges values

      if (values.username !== undefined) {
        values.First_Name_ENG = values.username.substr(0, values.username.indexOf(' '));  //extract first name
        values.Last_Name_ENG = values.username.substr(values.username.indexOf(' ') + 1);  //extract last name
      }

      delete values.username;
      delete values.question1;
      delete values.question2;


      values["stage"] = 2; //update the stage to the next one


      dispatch(setChanges(values)); //update changes for server updateUser function
      const response = await dispatch(updateUserServer());

      if (response.payload.severity === "success") {
        dispatch(updateUserObj(values));   //update userObj in userSlice
        dispatch(updateStage(2));   //update stage in userSlice
        openAlert("success", "הפרטים האישיים עודכנו בהצלחה!");
        history.push("/folders");  //continue to the next stage
      }
      else {
        openAlert("error", response.payload.message);  //REPLACE
        console.log('error', response.message);
      }
    }
    catch (err) {
      openAlert("error",  err);    //REPLACE
      console.log('err', err);
    }
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
          <Row justify="space-between">
            <Col>
              <Title level={2}>הפרטים האישיים שלי</Title>
            </Col>
            {/* <EditAvatar /> */}
          </Row>
          <EditUserDetails user={user} />
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
