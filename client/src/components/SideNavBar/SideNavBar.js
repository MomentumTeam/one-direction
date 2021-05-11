import { Avatar, Image, Button, Tooltip, Typography } from "antd";
import styles from "./SideNavBar.module.css";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectUserObj } from "../../features/user/userSlice";

const { Text } = Typography;


function SideNavBar() {
  let history = useHistory();
  const user=useSelector(selectUserObj);
  console.log('qqqqqqqqqqqqqqq', user);

  return (
    <div className={styles.fatherDiv}>
      <Avatar
        className={styles.avatar}
        size={64}
        src={<Image src={process.env.PUBLIC_URL + "/img/kermit.jpg"} />}
      />
      <Text className={styles.name} strong={true}>
      {user.First_Name_HEB} <br /> {user.Last_Name_HEB}
          </Text>

      <div className={styles.sideNavBarButtonsDiv}>
        <Tooltip
          title={
            <p>
              יש לי <br /> שאלה
              </p>
          }
        >
          <Button shape="circle" onClick={() => history.push("/faq")} >
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
