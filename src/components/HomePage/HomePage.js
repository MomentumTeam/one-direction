import React from 'react';
import { AppProgress } from "../progress/Progress";
import { Avatar, Image, Button, Tooltip, Typography,  } from "antd";
import {
    ArrowLeftOutlined,
} from "@ant-design/icons";
import styles from "./HomePage.module.css";

const { Title, Paragraph, Text } = Typography;


const tabs = [
    {
        id: 1,
        path: "/",
    },
    {
        id: 2,
        path: "/folders",
    },
    {
        id: 3,
        path: "/systems",
    },
    {
        id: 4,
        path: "/fingerPrint",
    },
    {
        id: 5,
        path: "/finish",
    },


];


function HomePage() {
    const status = "/folders";

    const getIcon = (tab, str) => {
        console.log('str', str)
        console.log('tab', tab.id);

        if (tab.path === status) {

            return <img src={process.env.PUBLIC_URL + `/img/${tab.id}S.png`} alt="" />

        }
        return <img src={process.env.PUBLIC_URL + `img/${tab.id}.png`} alt="" />

    };


    return (
        <div styles={{ color: "white" }}>
            <div className={styles.topDiv}>
                <div style={{
                    position: "absolute",
                    width: "60%",
                    top: "5%",
                    left: "2%",
                }}> <AppProgress /></div>

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

                    <Paragraph
                        style={{
                            backgroundColor: "",
                            marginRight: "5%",
                            marginTop: "2%",
                            fontSize: "30px",
                            color: "white"
                        }}
                    >
                        <strong>היי אלי קופטר</strong>
                        <br />
שמחים שנבחרת להצטרף אלינו ל-                             <strong>one</strong>aman

<br />
                        <Text style={{
                            fontSize: "18px",
                            color: "white"
                        }}>הרשת החדשה של אמ"ן המאפשרת שיתוף פעולה והפקת מודיעין בצורה הטובה ביותר
</Text>
                    </Paragraph>







                </div>

                <div className={styles.blackDiv}>
                    <Title level={3} style={{
                        color: "white",
                        position: "relative",
                        top: "50%",
                        right: "5%",
                        transform: "translateY(-30%)"
                    }}>הסטטוס שלי בתהליך</Title>

                    {/* <div> */}
                    {tabs.map((tab) => (
                        tab.path === status ?
                            <div className={styles.tab} style={{ backgroundColor: "white" }}>
                                {getIcon(tab, "first")}
                            </div>
                            :
                            <div className={styles.tab}>
                                {getIcon(tab, "second")}
                            </div>
                    ))}
                    {/* </div> */}
                </div>

                <div style={{ backgroundColor: "", }}>

                    <div className={styles.sideNavBarButtonsDiv}>
                        <Tooltip
                            title={
                                <p>
                                    יש לי <br /> שאלה
            </p>
                            }
                        >
                            <Button shape="circle" href="/faq" >
                                <img src={process.env.PUBLIC_URL + "/img/ask.png"} alt="FAQ" />
                            </Button>
                        </Tooltip>
                        <br />
                        <div></div>
                        <Button shape="circle" onClick={() => window.alert("settingsButton")}>
                            <img
                                src={process.env.PUBLIC_URL + "/img/settings.png"}
                                alt="Settings"
                            />
                        </Button>
                    </div>
                    <Button htmlType="submit" shape="round" size="large" href={"http://localhost:3000"+status} 
                    style={{
                        marginTop: "400px",
                        marginLeft: "150px",
                        // float: "left"
                    }}>
                        אפשר להתקדם
            <ArrowLeftOutlined />
                    </Button></div>
            </div>
        </div >
    )
}

export default HomePage