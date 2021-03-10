import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Content } from "../Content";
import styles from "./FingerPrint.module.css";
export const FingerPrint = () => {
  return (
    // <Content>
    /* <div className="flex-container">
        <div className="flex-items">
          {" "}
          <Title level={3}> הרכשת אצבע</Title>
        </div>
        <div className="flex-items">
          <div>f</div>
          <div>gt</div>
          <div>g</div>
        </div>
        <div className="flex-items">rf</div>
      </div> */
    <Content>
      <div
        style={{
          width: "100%",
          padding: "2%",
          direction: "rtl",
        }}
      >
        <Row gutter={[24, 16]}>
          <Col span={12}>
            <Title level={3}> הרכשת אצבע</Title>
          </Col>
          <Col span={12} />
        </Row>
        לנוחותך, להלן רשימת המקומות ושעות הפעילות בהם ניתן לדגום אצבע:
        <Row gutter={[24, 16]}>
          <Col span={7} className={styles.tile} style={{ textAlign: "center" }}>
            col-8
          </Col>
          <Col span={7} className={styles.tile}>
            col-8
          </Col>
          <Col span={7} className={styles.tile}>
            col-8
          </Col>
        </Row>
        <Row>fgv</Row>
      </div>
    </Content>
  );
};
