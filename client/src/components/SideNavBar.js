import { Avatar, Image, Button, Tooltip, Typography } from "antd";
import "../App.css";
import { Content } from "../components/Content";
const { Text } = Typography;

function SideNavBar() {
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
            אלי <br /> קופטר
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
