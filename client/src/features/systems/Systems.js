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
import { updateUser, setChanges } from "../user/userSlice";

const { Title, Paragraph, Text } = Typography;

function Forms() {
    let history = useHistory();
    let dispatch = useDispatch();
    const systems = useSelector(selectSystems);

    const finish = async(e) => {
        try {
            console.log('Final Systems List: ', systems);
            const namesArray = systems.map(system => system.systemName);
            dispatch(setChanges({ Application: namesArray.toString() }));

            const response = await dispatch(updateUser());
            console.log('response folders', response)

            if (response.payload.severity === "success") {
                console.log('success folders');
                dispatch(updateSystems(systems));
                history.push("/fingerPrint");
            }
            else {
                console.log('error', response.payload.message);
            }
        }
        catch (err) {
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
                        <Input size="large" style={{ width: "75%" }} disabled value="Liora Yacob" />
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
                            <Button onClick={finish} shape="round" size="large">
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

export default Forms;
