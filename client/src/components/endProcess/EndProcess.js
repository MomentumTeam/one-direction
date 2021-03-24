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
    </Content>
  );
};
