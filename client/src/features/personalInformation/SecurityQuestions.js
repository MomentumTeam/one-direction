import { Row, Col, Input, Form } from "antd";
import styles from "./PersonalInformation.module.css";

export const SecurityQuestions = () => {
  return (
    <div style={{marginTop:"4%"}}>
      2 שאלות לאיפוס סיסמה
      <div className={styles.questions}>
        <Row gutter={[24]}>
          <Col span={12}>
            <div className={styles.question}>
              <p>שאלה 1 : שם של חיית מחמד אהובה</p>
              <img
                className={styles.questionIcon}
                src={process.env.PUBLIC_URL + "/img/ani.png"}
                alt=""
              ></img>
            </div>
          </Col>
          <Col span={12}>
            <Form.Item
              name="question1"
              rules={[{ required: true, message: "אנא מלא שדה זה!" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <div className={styles.question}>
              <p>שאלה 1 : שם של חיית מחמד אהובה</p>
              <img
                className={styles.questionIcon}
                src={process.env.PUBLIC_URL + "/img/fruit.png"}
                alt="1"
              ></img>
            </div>
          </Col>
          <Col span={12}>
            <Form.Item
              name="question2"
              rules={[{ required: true, message: "אנא מלא שדה זה!" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
      </div>
    </div>
  );
};
