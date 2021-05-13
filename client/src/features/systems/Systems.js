import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Typography, Input, Form, Button, Row, Col } from "antd";
import styles from "./Systems.module.css";
import AddSystemForm from "./AddSystemForm";
import SystemsList from "./SystemsList";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { selectSystems, updateSystems } from "./SystemsSlice";
import { Content } from "../../components/Content";
import { updateUserServer, setChanges, updateStage ,selectUserObj } from "../user/userSlice";
import openAlert from "../../components/Alert";

const { Title, Paragraph, } = Typography;

function Systems({user}) {
    let history = useHistory();
    let dispatch = useDispatch();
    const systems = useSelector(selectSystems);

    const finish = async (e) => {
        try {
            const namesArray = systems.map(system => system.systemName);
            dispatch(setChanges({ Application: namesArray.toString(), stage: 4 }));

            const response = await dispatch(updateUserServer());

            if (response.payload.severity === "success") {
                dispatch(updateSystems(systems));
                dispatch(updateStage(4));
                openAlert("success", "רשימת המערכות עודכנה בהצלחה!");
                history.push("/fingerPrint");
            }
            else {
                openAlert("error", response.payload.message);  //REPLACE
                console.log('error', response.payload.message);
            }
        }
        catch (err) {
            openAlert("error",  err);    //REPLACE
            console.log('err', err);
        }
    }

    return (
        <Content>
            <div className={styles.fatherDiv}>
                <Title level={2}>מערכות</Title>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        backgroundColor: "",
                    }}
                >
                    <Form.Item
                        labelCol={{ span: 24 }}
                        label="פרופיל משתמש (תפקיד)"
                        style={{ backgroundColor: "" }}
                    >
                        <Input size="large" style={{ width: "75%" }} disabled value={user.Profile_Name_HEB} />
                    </Form.Item>
                    <Paragraph
                        strong={true}
                        style={{
                            backgroundColor: "",
                            marginRight: "5%",
                            marginTop: "2%",
                            fontSize: "15px"
                        }}
                    >
                        מנועי האוטומציה שלנו זיהו שהמערכות מטה רלוונטיות עבורך והן זמינות
                        עבורך גם ברשת האחת!
                        <br />
                        במידה ויש מערכות נוספות להן תזדקק/י, ניתן להוסיפן מטה
            </Paragraph>
                </div>
                <br />
                <SystemsList systems={systems} />
                <br />
                <AddSystemForm systems={systems} />




                <Row justify="end" align="bottom" className={styles.tailRow}>
                    <div>
                        <Col>
                            <Button htmlType="submit" onClick={finish} shape="round" size="large">
                                אישור מערכות
                    <ArrowLeftOutlined />
                            </Button>
                        </Col>
                    </div>
                </Row>

            </div>
        </Content>
    );
}

export default Systems;
