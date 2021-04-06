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
import styles from "../features/systems/Systems.module.css";
import { useDispatch } from "react-redux";
import { Add, AddToExistingList } from "../features/systems/SystemsSlice";


const systemsOptions = [{ value: 'Chrome' }, { value: 'OutLook' }, { value: 'Photo Shop' }, { value: 'Office' }];

function AddSystemForm({ systems }) {
    const [form] = Form.useForm();
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

        const toList = {
            systemName: systemName,
            logo: `/img/systems/${imgName}.png`,
        };

        console.log("toList: ", toList);
        console.log("toAdd: ", toAdd);

        dispatch(Add(toList));
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


                <div className="Input" style={{ backgroundColor: "", marginTop: "" }}>
                    <Row gutter={(16, 48)}>
                        <Col className="gutter-row" span={6}>
                            <Form.Item
                                label="שם המערכת"
                                style={{ backgroundColor: "" }}
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
                                style={{ backgroundColor: "" }}
                                rules={[{ required: true, message: "אנא מלא שדה זה!" }]}
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
