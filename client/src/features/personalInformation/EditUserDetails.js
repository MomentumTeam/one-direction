import React, { useState } from 'react';
import { Row, Col, Form, Input, Radio, Select } from "antd";
import { UsersAutoComplete } from "../../components/usersAutocomplete/UsersAutocomplete";
import CONFIG from '../../config.json';

const { Option } = Select;

export const EditUserDetails = ({user}) => {
  const [value, setValue] = useState(); //station-yes or no
  const [typeId, setTypeId] = useState(user.Ui_Properties.communicationType); //communication - type
  const [label, setLabel] = useState(CONFIG.labels[typeId]); //communication -label

  const onChange = e => {   //update station
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  function handleChange(value) {   //update communication: type and label
    console.log(`selected ${value}`);
    setTypeId(value);
    setLabel(CONFIG.labels[value]);
  }
  
  const prefixSelector = (   //prefixSelector for phoneNumber
    <Form.Item name="prefix" noStyle>
      <Select noStyle>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


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
            rules={[{ required: true, message: "אנא מלא שדה זה!" }]}
            >
            <Input size="large" defaultValue={user.First_Name_ENG+" "+user.Last_Name_ENG} />
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
            <Input size="large" disabled value={user.Rank} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="טלפון נייד">
            <Input size="large" disabled value={user.Phone_Number} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item name="communicationType" label="אמצעי תקשורת נוסף">
            <Select size="large" onChange={handleChange} defaultValue={user.Ui_Properties.communicationType}>
              <Option value={0}>-----------</Option>
              <Option value={1}>טלפון</Option>
              <Option value={2}>מייל</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item name="More_Contact_Information" label={label} 
          rules={[
            {
              max: 10,
              min: 9,
              message: "מספר טלפון לא תקין, נסה שוב!",
            }]}>
            {typeId === 1 ?
              <Input size="large" addonBefore={prefixSelector} defaultValue={user.More_Contact_Information} /> :
              <Input size="large" defaultValue={user.More_Contact_Information} />
            }
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="פרופיל תפקידן">
            <Input size="large" disabled value={user.Profile_Name_HEB} />
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
              <Option value="יונה">יונה</Option>
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
          <Form.Item label="יש לי עמדה קבועה?" name="Computer_Name">
            <Radio.Group size="large" value={value} onChange={onChange}>
              <Radio value={1}>לא</Radio>
              <Radio value={2}>כן</Radio>
            </Radio.Group>
            {value === 2 ? <Input style={{  marginTop:"5%"}} defaultValue={user.Computer_Name} /> : null}
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="שם מחשב">
            <Input size="large" disabled value="קובי" />
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
