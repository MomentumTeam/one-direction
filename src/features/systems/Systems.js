import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Typography } from 'antd';
import { Form, Input, Button, List, Avatar, Divider, Rate, Row, Col, Image } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "./Systems.module.css";
import { Content } from "../../components/Content";
import { selectSystems, Add } from "./SystemsSlice";


const { Title, Paragraph, Text } = Typography;

function Systems() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const systems = useSelector(selectSystems);
    const [systemName, setSystemName] = useState();
    const [usage, setUsage] = useState();
    const [rate, setRate] = useState();

    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChangeRate = (rateNumber) => {
        console.log('rateNumber:', rateNumber);
        setRate(rateNumber)
    };

    const addSystem = () => {
        console.log('addSystem Function');
        const imgName = systemName.toLowerCase().split(" ").join("");
        console.log('imgName: ', imgName);

        const toAdd = {

            systemName: systemName,
            usage: usage,
            rate: rate

        }
        const toList = {
            systemName: systemName,
            logo: `/img/systems/${imgName}.png`

        }
        console.log('toList: ', toList);
        console.log('toAdd: ', toAdd);

        dispatch(Add(toList))


    };

    const onChangeSystemName = (e) => {
        setSystemName(e.target.value)
    };

    const onChangeUsage = (e) => {
        setUsage(e.target.value)
    };

    return (
        <div className={styles.fatherDiv}>
            <Title level={2}>מערכות</Title>
            <Content>
                <Form
                    style={{ width: "100%" }}
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    name="Systems"
                >
                    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "", }}>
                        <Form.Item label="פרופיל משתמש (תפקיד)" style={{ backgroundColor: "" }}  >
                            <Input style={{}} size="large" disabled value="Liora Yacob" />
                        </Form.Item>
                        <Paragraph className={styles.marginTop} strong={true} style={{ backgroundColor: "", marginRight: "10%", marginTop: "2%" }} >
                            מנועי האוטומציה שלנו זיהו שהמערכות מטה רלוונטיות עבורך והן זמינות עבורך גם ברשת האחת!
                            <br />
                            במידה ויש מערכות נוספות להן תזדקק/י, ניתן להוסיפן מטה
                        </Paragraph>
                    </div>


                    <div className="systemsList">
                        <List
                            itemLayout="horizontal"
                            // bordered
                            style={{ color: "#E3E3E3", backgroundColor: "" }}
                            dataSource={systems}
                            renderItem={item => (<div>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Image src={process.env.PUBLIC_URL + item.logo} preview={false} fallback={process.env.PUBLIC_URL + "/img/systems/plainSystemLogo.png"} shape="circle" />}
                                        title={<Typography.Title level={5} style={{ margin: "1%" }}>{item.systemName}</Typography.Title>}
                                    />
                                </List.Item>

                                <Divider />
                            </div>
                            )}
                        />


                    </div>



                    <div className="Input" style={{ backgroundColor: "", marginTop: "" }}>

                        <Row gutter={(16, 48)}>

                            <Col className="gutter-row" span={6}>
                                <Form.Item label="שם המערכת" style={{ backgroundColor: "" }} rules={[{ required: true, }]}  >
                                    <Input style={{}} name="systemName" size="large" onChange={onChangeSystemName} />
                                </Form.Item>

                            </Col>

                            <Col className="gutter-row" span={6}>

                                <Form.Item label="למה משמש?" style={{ backgroundColor: "" }} rules={[{ required: true, }]} >
                                    <Input style={{}} name="usage" size="large" onChange={onChangeUsage} />
                                </Form.Item>
                            </Col>

                            <Col className="gutter-row" span={6}>
                                <Rate className={styles.verticallyCenter} onChange={onChangeRate} style={{ backgroundColor: "", size: "large" }} />

                            </Col>

                            <Col className="gutter-row" span={6}>
                                <Form.Item className={styles.verticallyCenter}>
                                    <Button className={styles.addButton} type="primary" shape="circle" onClick={addSystem} size="large" >
                                        OK
                                    </Button>
                                </Form.Item>
                            </Col>

                        </Row>





                    </div>


                    <Form.Item className={styles.submit}>
                        <Button htmlType="submit" type="primary" shape="round" size="large">
                            אישור מערכות
                        <ArrowLeftOutlined />
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </div>
    );
}

export default Systems;
