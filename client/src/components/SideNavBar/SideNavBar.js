import { Avatar, Image, Button, Tooltip, Typography } from "antd";
import styles from "./SideNavBar.module.css";

const { Text } = Typography;


function SideNavBar() {
  return (
    <div className={styles.fatherDiv}>
      <Avatar
        className={styles.avatar}
        size={64}
        src={<Image src={process.env.PUBLIC_URL + "/img/kermit.jpg"} />}
      />
      <Text className={styles.name} strong={true}>
        אלי <br /> קופטר
          </Text>

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
        <Button shape="circle" onClick={() => window.alert("settingsButton")}>
          <img
            src={process.env.PUBLIC_URL + "/img/settings.png"}
            alt="Settings"
          />
        </Button>
      </div>
    </div>
  );
}

export default SideNavBar;
