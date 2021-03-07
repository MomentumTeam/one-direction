import { Form, Input, Button, Radio } from "antd";
import { Row, Col, Slider } from "antd";
import { Select } from "antd";
import { Content } from "../../components/Content";
const { Option } = Select;

const style = { background: "#0092ff", padding: "8px 0" };
export const AppForm = () => {
  return (
    <div>
      <Content>
        <Form style={{ width: "100%" }} layout="vertical">
          <Row gutter={(16, 48)}>
            <Col className="gutter-row" span={6}>
              <Form.Item label="שם מלא בעברית">
                <Input size="large" disabled value="אלי קופטר" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item
                label="שם מלא באנגלית"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="מס זהות">
                <Input size="large" disabled value="658306084" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="מס אישי">
                <Input size="large" disabled value="4902611" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="דרגה">
                <Input size="large" disabled value="טוראי" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="טלפון נייד">
                <Input size="large" disabled value="054-6428356" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="אמצעי תקשורת נוסף">
                <Select size="large" defaultValue="יונה" allowClear>
                  <Option value="lucy">יונה</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="מס טלפון">
                <Input size="large" value="054-6428356" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="פרופיל תפקידן">
                <Input size="large" disabled value="435456455" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="מזהה יחודי">
                <Select size="large" defaultValue="מזהה" allowClear>
                  <Option value="lucy">יונה</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="שם תצוגה (היררכיה)">
                <Input size="large" disabled value="אלי קופטר" />
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
              <Form.Item label="פיזי ראשי">
                <Select size="large" defaultValue="כאן" allowClear>
                  <Option value="lucy">יונה</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="פיזי משני">
                <Select size="large" defaultValue="כאן" allowClear>
                  <Option value="lucy">יונה</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item label="יש לי עמדה קבועה?">
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
              <Form.Item label="פרטי מפקד ישיר">
                <Input size="large" disabled value="" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Content>
    </div>
  );
};
