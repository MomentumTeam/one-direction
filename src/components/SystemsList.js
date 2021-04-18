import React from 'react'
import { useDispatch } from "react-redux";
import styles from "../features/systems/Systems.module.css";
import { RemoveFromExistingList } from "../features/systems/SystemsSlice";
import {
    List,
    Divider,
    Image,
    Typography
} from "antd";

function SystemsList({ systems }) {
    const dispatch = useDispatch();

    return (
        <div  style={{
            height: "500px",
            padding: "5px 24px",
            marginLeft:"5%",
            overflow: "auto",
            border: "1px solid #e8e8e8",
            borderRadius: "4px",
        }}
        >

            <List
                itemLayout="horizontal"
                // bordered
                style={{ color: "#E3E3E3", backgroundColor: "" }}
                dataSource={systems}
                renderItem={(item) => (
                    <div>
                        <List.Item
                            actions={[<button onClick={() => dispatch(RemoveFromExistingList(item))}
                            // key="list-loadmore-edit"
                            >הסר</button>]}

                        >
                            <List.Item.Meta
                                avatar={
                                    <Image
                                        src={process.env.PUBLIC_URL + "/img/systems/" + item.systemName.split(" ").join("") + ".png"}
                                        preview={false}
                                        fallback={
                                            process.env.PUBLIC_URL +
                                            "/img/systems/plainSystemLogo.png"
                                        }
                                        shape="circle"
                                    />
                                }
                                title={
                                    <Typography.Title level={5} style={{ margin: "1%" }}>
                                        {item.systemName}
                                    </Typography.Title>
                                }
                            />
                        </List.Item>

                        <Divider />
                    </div>
                )}
            />
        </div>
    )
}

export default SystemsList
