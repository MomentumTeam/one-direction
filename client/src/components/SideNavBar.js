import { Avatar, Image, Button, Tooltip, Typography } from "antd";
import "../App.css";
import { Content } from "../components/Content";
import { useSelector, } from "react-redux";
import { selectUserObj } from "../features/user/userSlice";

const { Text } = Typography;

function SideNavBar() {
  const user=useSelector(selectUserObj);
  
  return (
    <div style={{ marginTop: "30%" }}>
      <Content>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Avatar
            style={{ border: "2px solid #F2F2F2" }}
            size={64}
            src={<Image src={process.env.PUBLIC_URL + "/img/kermit.jpg"} />}
          />
          <Text style={{ marginRight: "20%" }} strong={true}>
            {user.First_Name_HEB} <br /> {user.Last_Name_HEB}
          </Text>
        </div>

        <div className="sideNavBarButtonsDiv">
          <Tooltip
            title={
              <p>
                יש לי <br /> שאלה
              </p>
            }
          >
            <Button shape="circle"  href="/faq" >
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
      </Content>
    </div>
  );
}

export default SideNavBar;
