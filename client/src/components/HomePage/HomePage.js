import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppProgress } from "../progress/Progress";
import { Avatar, Image, Button, Tooltip, Typography, } from "antd";
import {
    ArrowLeftOutlined,
} from "@ant-design/icons";
import styles from "./HomePage.module.css";
import { useSelector, } from "react-redux";
import { selectUserObj } from "../../features/user/userSlice";
import CONFIG from "../../config.json";

const { Title, Paragraph, Text } = Typography;



function HomePage() {
    let status = 1;        //default
    let history = useHistory();
    const user = useSelector(selectUserObj);

    if (user.Ui_Properties !== undefined) {
        status = CONFIG.stage[user.Ui_Properties.stage - 1];
        console.log('user.Ui_Properties.stage-1', user.Ui_Properties.stage - 1)
        console.log('status', status)
    }

    const getIcon = (tab) => {

        if (tab.path === status) {

            return <img src={process.env.PUBLIC_URL + `/img/${tab.id}S.png`} alt="" />

        }
        return <img src={process.env.PUBLIC_URL + `img/${tab.id}.png`} alt="" />

    };


    return (
        <div styles={{ color: "white" }}>
            <div className={styles.topDiv}>
                <div className={styles.appProgress}>
                    <AppProgress />
                </div>

                <img className={styles.logo} src={process.env.PUBLIC_URL + "/img/logoTop.png"} />

                <div className={styles.one}>
                    <p>
                        <strong>one</strong>Team
                    </p>
                    <p>
                        <strong>one</strong>Dream
                    </p>
                    <p>
                        <strong>one</strong>Direction
                    </p>
                </div>
            </div>

            <div className={styles.bottomDiv}>

                <div className={styles.tealDiv}>
                    <Avatar
                        className={styles.avatar}
                        size={80}
                        src={<Image src={process.env.PUBLIC_URL + "/img/kermit.jpg"} />}
                    />

                    <Paragraph className={styles.paragraph}>
                        <strong>היי             {user.First_Name_HEB} {user.Last_Name_HEB}
                        </strong>
                        <br />
שמחים שנבחרת להצטרף אלינו ל-                             <strong>one</strong>aman

<br />
                        <Text className={styles.text}
                        >הרשת החדשה של אמ"ן המאפשרת שיתוף פעולה והפקת מודיעין בצורה הטובה ביותר
</Text>
                    </Paragraph>


                </div>

                <div className={styles.blackDiv}>
                    <Title level={3} className={styles.statusTitle} style={{ color: "white", }}>הסטטוס שלי בתהליך </Title>

                    {/* <div> */}
                    {CONFIG.tabs.map((tab) => (
                        tab.path === status ?
                            <div className={styles.tab} style={{ backgroundColor: "white" }}>
                                {getIcon(tab)}
                            </div>
                            :
                            <div className={styles.tab}>
                                {getIcon(tab)}
                            </div>
                    ))}
                    {/* </div> */}
                </div>

                <div>

                    <Button htmlType="submit" shape="round" size="large"
                        onClick={() => {
                            history.push(status);
                        }}
                        className={styles.button}>
                        אפשר להתקדם
            <ArrowLeftOutlined />
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default HomePage