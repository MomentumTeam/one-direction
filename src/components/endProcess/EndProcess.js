import { Radio } from "antd";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import { Content } from "../Content";
import styles from "./EndProcess.module.css";


export const EndProcess = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
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
    </Content>
  );
};
