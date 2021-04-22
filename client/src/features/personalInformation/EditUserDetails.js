import { Row, Col, Form, Input, Radio, Select } from "antd";
import { UsersAutoComplete } from "../../components/usersAutocomplete/UsersAutocomplete"; 
import { useSelector, useDispatch } from "react-redux";
import { selectUserObj } from "../user/userSlice";

const { Option } = Select;

export const EditUserDetails = () => {
  const user = useSelector(selectUserObj);
  
  return (
    <>
      <Row gutter={(16, 48)}>
        <Col className="gutter-row" span={6}>
          <Form.Item label="שם מלא בעברית">
            <Input size="large" disabled value={user.First_Name_HEB+" "+user.Last_Name_HEB} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item
            label="שם מלא באנגלית"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="מס זהות">
            <Input size="large" disabled value={user.ID_Number} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="מס אישי">
            <Input size="large" disabled value={user.Private_Number} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="דרגה">
            <Input size="large" disabled value={user.Rank_ID} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="טלפון נייד">
            <Input size="large" disabled value={user.Phone_Number} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item name="communication" label="אמצעי תקשורת נוסף">
            <Select size="large" defaultValue="יונה" allowClear>
              <Option value="lucy">יונה</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item name="phoneNumber" label="מס טלפון">
            <Input size="large" value={user.Phone_Number} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="פרופיל תפקידן">
            <Input size="large" disabled value={user.User_Profile_ID} />
          </Form.Item>
        </Col>
        {/* <Col className="gutter-row" span={6}>
          <Form.Item name="uniqueIdentifier" label="מזהה יחודי">
            <Select size="large" defaultValue="מזהה" allowClear>
              <Option value="lucy">יונה</Option>
            </Select>
          </Form.Item>
        </Col> */}
        <Col className="gutter-row" span={6}>
          <Form.Item label="שם תצוגה (היררכיה)">
            <Input size="large" disabled value={user.Hierarchy} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="קיים יוזר גאבר?">
            <Radio.Group size="large">
              <Radio value={1}>קיים</Radio>
              <Radio value={2}>לא קיים</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item name="MainPhysical" label="פיזי ראשי">
            <Select size="large" defaultValue="כאן" allowClear>
              <Option value="lucy">יונה</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item name="SecondaryPhysical" label="פיזי משני">
            <Select size="large" defaultValue="כאן" allowClear>
              <Option value="lucy">יונה</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item name="PositionStatus" label="יש לי עמדה קבועה?">
            <Select size="large" defaultValue="כן" allowClear>
              <Option value="lucy">לא</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="שם מחשב">
            <Input size="large" disabled value="חיים" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Form.Item label="פרטי מפקד ישיר" name="commmmm"> */}
          {/* <Input size="large" disabled value="" /> */}
          <UsersAutoComplete />
          {/* </Form.Item> */}
        </Col>
      </Row>
    </>
  );
};
