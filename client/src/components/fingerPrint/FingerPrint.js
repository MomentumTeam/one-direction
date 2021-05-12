import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Content } from "../Content";
import { OperationTime } from "./OperationTime";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "./FingerPrint.module.css";
import { updateStage,setChanges, updateUserServer} from "../../features/user/userSlice";
import { useDispatch } from "react-redux";


export const FingerPrint = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const finish = async(e) => {
    try {
      dispatch(setChanges({ stage: 5 })); //update changes for server updateUser function
      const response = await dispatch(updateUserServer());

      if (response.payload.severity === "success") {
        dispatch(updateStage(5));   //update stage in userSlice
        history.push("/finish");
      }
      else {
        console.log('error', response.message);
      }
    }
    catch (err) {
      console.log('err', err);
    }
  };

  return (
    <Content>
      <div className={styles.fatherDiv}>
        <Row gutter={[24, 16]}>
          <Col span={12}>
            <Title level={3}> הרכשת אצבע</Title>
            <br />
            <p>
              להשלמת התהליך יש לגשת לדגום טביעת אצבע בב"מ.
              <br />
              חשוב להשלים זאת עד ה <strong>31.03.2021</strong>
            </p>
            <br />
          </Col>
          <Col span={12} />
        </Row>
        <br />
        לנוחותך, להלן רשימת המקומות ושעות הפעילות בהם ניתן לדגום אצבע:
        <Row gutter={[24, 16]} className={styles.tailRow}>
          <Col span={6} className={styles.tile} style={{ textAlign: "center" }}>
            <Title level={5}>מועד אחרון להשלמה</Title>
            <Title level={2} className={styles.mark}>
              31.03.2021
            </Title>
            <img src={process.env.PUBLIC_URL + "/img/FP.png"} />
          </Col>
          <Col span={6} className={styles.tile}>
            <OperationTime title={<Title level={5}>ב"מ ירקון</Title>} />
            <OperationTime
              title="שעות פעילות:"
              icon="/img/Time.png"
              firstLine="א-ה 12:35 - 08:00"
              secondLine="יום ו 15:00 - 16:00"
            />
            <br />
            <OperationTime
              title="טלפון:"
              icon="/img/Call.png"
              firstLine="03-5289745"
              secondLine="054-5864771"
            />
          </Col>
          <Col span={6} className={styles.tile}>
            <OperationTime title={<Title level={5}>ב"מ מפקדה</Title>} />
            <OperationTime
              title="שעות פעילות:"
              icon="/img/Time.png"
              firstLine="א-ה 12:35 - 08:00"
              secondLine="יום ו 15:00 - 16:00"
            />
            <br />
            <OperationTime
              title="טלפון:"
              icon="/img/Call.png"
              firstLine="03-5289745"
              secondLine="054-5864771"
            />
          </Col>
        </Row>
        <br />
        <Row justify="end" align="bottom" className={styles.tailRow}>
          <div>
            <Col>
              <Button onClick={finish} shape="round" size="large">
                סיימתי הרכשת אצבע
                <ArrowLeftOutlined />
              </Button>
            </Col>
          </div>
        </Row>
      </div>
    </Content>
  );
};
