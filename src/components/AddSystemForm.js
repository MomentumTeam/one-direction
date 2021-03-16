import React, { useState, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Rate,
    Row,
    Col,
    Typography
} from "antd";
import styles from "../features/systems/Systems.module.css";
import { useDispatch } from "react-redux";
import { Add } from "../features/systems/SystemsSlice";


function AddSystemForm() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [systemName, setSystemName] = useState("");
    const [usage, setUsage] = useState("");
    const [rate, setRate] = useState(1);


    function capital_letter(str) {
        str = str.split(" ");


        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }

        console.log('str: ', str);
        return str.join(" ");
    }

    const addSystem = (e) => {


        console.log(form);
        console.log("addSystem Function");
        const imgName = systemName.toLowerCase().split(" ").join("");
        console.log("imgName: ", imgName);

        const systemDisplayName = capital_letter(systemName)
        console.log('systemDisplyName: ', systemDisplayName);

        const toAdd = {
            systemName: systemDisplayName,
            usage: usage,
            rate: rate,
        };

        const toList = {
            systemName: systemDisplayName,
            logo: `/img/systems/${imgName}.png`,
        };

        console.log("toList: ", toList);
        console.log("toAdd: ", toAdd);

        dispatch(Add(toList));
        form.resetFields();
        const x = form.getFieldValue()
        console.log('form: ', x);
        setRate(1);

        resetForm();

    };

    const resetForm = () => {
        setRate(1);
        setSystemName("");
        setUsage("");
    };

    const add = (e) => {

        if (usage !== "" && systemName !== "") {
            addSystem(e);
        }
    }

    useEffect(() => {
        form.validateFields(['usage']);
        form.validateFields(['systemName']);

    }, [usage, systemName]);

    const onChangeRate = (rateNumber) => {
        console.log("rateNumber:", rateNumber);
        setRate(rateNumber);
    };
    const onChangeSystemName = (e) => {
        setSystemName(e.target.value);
    };

    const onChangeUsage = (e) => {
        setUsage(e.target.value);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                style={{ width: "100%" }}
                layout="vertical"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                name="Systems"
            >


                <div className="Input" style={{ backgroundColor: "", marginTop: "" }}>
                    <Row gutter={(16, 48)}>
                        <Col className="gutter-row" span={6}>
                            <Form.Item
                                label="שם המערכת"
                                style={{ backgroundColor: "" }}
                                rules={[{ required: true, message: "אנא הכנ" }]}
                                required
                                name="systemName"

                            >
                                <Input
                                    style={{}}
                                    size="large"
                                    onChange={onChangeSystemName}
                                    value={systemName}
                                />
                            </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <Form.Item
                                label="למה משמש?"
                                style={{ backgroundColor: "" }}
                                rules={[{ required: true, message: "Please input your username!" }]}
                                required
                                name="usage"

                            >
                                <Input
                                    style={{}}
                                    size="large"
                                    onChange={onChangeUsage}
                                    value={usage}
                                />
                            </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <Form.Item
                                label="דירוג חשיבות"
                                style={{ backgroundColor: "" }}
                            >
                                <Rate
                                    className={styles.verticallyCentered}
                                    allowClear={false}
                                    onChange={onChangeRate}
                                    value={rate}
                                    style={{
                                        backgroundColor: "",
                                        fontSize: "250%",
                                        stroke: "#001322",
                                        strokeWidth: "50",
                                        strokeLinecap: "butt",
                                        strokeDasharray: "0",
                                    }}
                                />
                            </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <Form.Item className={styles.verticallyCentered}>
                                <Button
                                    className={styles.addButton}
                                    shape="circle"
                                    onClick={add}
                                    size="large"
                                >
                                    OK
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    )
}

export default AddSystemForm
