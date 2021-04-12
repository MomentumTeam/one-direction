import { Radio } from "antd";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import { Content } from "../Content";

const radioStyle = {
  display: "block",
  height: "50px",
  lineHeight: "50px",
};
export const EndProcess = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Content>
      <div
        style={{
          width: "100%",
          padding: "2%",
          direction: "rtl",
        }}
      >
        <Title level={3}> אישור מעבר</Title>

        <Radio.Group size="100" onChange={onChange} value={value}>
          <Radio value={1} style={radioStyle}>
            אישור מעבר לרשת האחת ב-<strong>19.03.2021</strong>
          </Radio>
          <Radio value={2} style={radioStyle}>
            יש לי בעיה עם תאריך המעבר. אצור קשר עם גורם מתפעל
          </Radio>
        </Radio.Group>
      </div>
      <div
        style={{
          marginTop: "10%",
          width: "30%",
          margin: "auto",
          //   height: "50%",
          padding: "3%",
          borderRadius: "25px",
          //   backgroundImage: `url(${process.env.PUBLIC_URL}/img/among_us_hd.png)`,
          backgroundColor: "#001322",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
