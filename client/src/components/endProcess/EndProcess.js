import { Radio, Row, Col, Button, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Content } from "../Content";
import styles from "./EndProcess.module.css";

const { Title } = Typography;

export const EndProcess = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const finish = (e) => {
    window.alert("סיום תהליך");
  }

  return (
    <Content>
      <div className={styles.fatherDiv}>
        <Title level={3}> אישור מעבר</Title>

        <Radio.Group size="100" onChange={onChange} value={value}>
          <Radio value={1} className={styles.radioStyle}>
            אישור מעבר לרשת האחת ב-<strong>19.03.2021</strong>
          </Radio>
          <Radio value={2} className={styles.radioStyle}>
            יש לי בעיה עם תאריך המעבר. אצור קשר עם גורם מתפעל
          </Radio>
        </Radio.Group>
      </div>
      <div className={styles.popUpDiv}>
        <Title level={5} style={{ color: "#CFEA11" }}>
          פרטי יוזר וסיסמה ישלחו אליך לפני המעבר
        </Title>
        <Title level={3} style={{ color: "white" }}>
          !בהצלחה
        </Title>
        <img src={process.env.PUBLIC_URL + "/img/amongs.png"} alt=""></img>
      </div>

      <Row justify="end" align="bottom" className={styles.tailRow}>
        <div>
          <Col>
            <Button onClick={finish} shape="round" size="large">
              סיום תהליך
                            <ArrowLeftOutlined />
            </Button>
          </Col>
        </div>
      </Row>
    </Content>
  );
};
