import React, { useState, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Rate,
    Row,
    Col,
    Select,
} from "antd";
import styles from "./Systems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddToExistingList, selectSystemsOptions } from "./SystemsSlice";


function AddSystemForm({ systems }) {
    const [form] = Form.useForm();
    const systemsOptions = useSelector(selectSystemsOptions);
    const dispatch = useDispatch();
    const [systemName, setSystemName] = useState("");
    const [usage, setUsage] = useState("");
    const [rate, setRate] = useState(1);

    const addSystem = (e) => {

        const imgName = systemName.split(" ").join("");
        console.log("imgName: ", imgName);

        const toAdd = {
            systemName: systemName,
            usage: usage,
            rate: rate,
        };

        console.log("toAdd: ", toAdd);

        dispatch(AddToExistingList(toAdd));

        form.resetFields(); //reset inputs in form
        resetForm(); //reset State

    };

    const resetForm = () => {
        setRate(1);
        setSystemName("");
        setUsage("");
    };

    const add = (e) => {
        console.log('systemName', systemName)
        console.log('usage', usage)

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

    const onChangeSystemName = (value) => {
        // setSystemName(e.target.value);
        setSystemName(value);

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


                <div className="Input">
                    <Row gutter={(16, 48)}>
                        <Col className="gutter-row" span={6}>
                            <Form.Item
                                label="שם המערכת"
                                rules={[{ required: true, message: "אנא מלא שדה זה!" }]}
                                required
                                name="systemName"

                            >
                                <Select onChange={onChangeSystemName} size="large" allowClear options={systemsOptions}
                                />
                            </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <Form.Item
                                label="למה משמש?"
                                rules={[{ required: true, message: "אנא מלא שדה זה!" }]}
                                required
                                name="usage"

                            >
                                <Input
                                    size="large"
                                    onChange={onChangeUsage}
                                    value={usage}
                                />
                            </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <Form.Item
                                label="דירוג חשיבות"
                            >
                                <Rate
                                    className={styles.verticallyCentered}
                                    allowClear={false}
                                    onChange={onChangeRate}
                                    value={rate}
                                    className={styles.rateContainer}
                                    style={{
                                        fontSize: "250%"
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
