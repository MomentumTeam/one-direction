import React from 'react'
import styles from "../features/systems/Systems.module.css";
import {
    List,
    Divider,
    Image,
    Typography
} from "antd";


function SystemsList({systems}) {

    return (
        <div className="systemsList">
            <List
                itemLayout="horizontal"
                // bordered
                style={{ color: "#E3E3E3", backgroundColor: "" }}
                dataSource={systems}
                renderItem={(item) => (
                    <div>
                        <List.Item>
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
