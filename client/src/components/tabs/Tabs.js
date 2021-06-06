import { Tab } from "./Tab";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectUserObj, getUser } from "../../features/user/userSlice";
import CONFIG from "../../config.json";


export const Tabs = () => {
  let location = useLocation();
  const user = useSelector(selectUserObj);
  const stage = user && Object.keys(user).length !== 0 ? user.Ui_Properties.stage : 1; 

  // console.log('user', user);
  // console.log('user.Ui_Properties', user.Ui_Properties);
  // console.log('user.Ui_Properties.stage', user.Ui_Properties.stage);

  let currTab;
  if (location.pathname === '/faq') {
    currTab = CONFIG.tabs.find((tab) => tab.id === stage);
  }
  else {
    currTab = CONFIG.tabs.find((tab) => tab.path === location.pathname);

  }

  if (currTab) {
    return (
      <div style={{ display: "flex" ,direction:"rtl"}}>
        {CONFIG.tabs.map((tab) => (
          <Tab key={tab.id} tab={tab} currTab={currTab} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};
