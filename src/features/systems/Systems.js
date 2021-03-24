import React, { useState, useEffect } from "react";
import { Typography, Input, Form, Button } from "antd";
import styles from "./Systems.module.css";
import AddSystemForm from "../../components/AddSystemForm";
import SystemsList from "../../components/SystemsList";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";
import { selectSystems,selectAddedSystems } from "../systems/SystemsSlice";

const { Title, Paragraph, Text } = Typography;

function Forms() {
    const systems = useSelector(selectSystems);
    const addedSystems = useSelector(selectAddedSystems);

    const finish = (e) => {
        console.log('Final Systems List: ', addedSystems);
    }

    return (
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
                    <Input size="large"   style={{width:"75%"}} disabled value="Liora Yacob" />
                </Form.Item>
                <Paragraph
                    strong={true}
                    style={{
                        backgroundColor: "",
                        marginRight: "5%",
                        marginTop: "2%",
                        fontSize:"15px"
                    }}
                >
                    מנועי האוטומציה שלנו זיהו שהמערכות מטה רלוונטיות עבורך והן זמינות
                    עבורך גם ברשת האחת!
                        <br />
                        במידה ויש מערכות נוספות להן תזדקק/י, ניתן להוסיפן מטה
            </Paragraph>
            </div>
            <SystemsList systems={systems} />
            <AddSystemForm systems={systems}/>

            <Form.Item className={styles.submit}>
                <Button onClick={finish} shape="round" size="large">
                    אישור מערכות
                    <ArrowLeftOutlined />
                </Button>
            </Form.Item>

        </div>
    );
}

export default Forms;
