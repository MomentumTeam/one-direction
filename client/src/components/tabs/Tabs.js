import { Tab } from "./Tab";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectUserObj, getUser } from "../../features/user/userSlice";
const tabs = [
  // {
  //   id: -1,
  //   path: "/faq",
  // },
  {
    id: 5,
    path: "/finish",
  },
  {
    id: 4,
    path: "/fingerPrint",
  },
  {
    id: 3,
    path: "/systems",
  },
  {
    id: 2,
    path: "/folders",
  },
  {
    id: 1,
    path: "/personalInformation",
  },
];


export const Tabs = () => {
  let location = useLocation();
  const user = useSelector(selectUserObj);

  // console.log('user', user);
  // console.log('user.Ui_Properties', user.Ui_Properties);
  // console.log('user.Ui_Properties.stage', user.Ui_Properties.stage);

  let currTab;
  if (location.pathname === '/faq') {
    currTab = tabs.find((tab) => tab.id === user.Ui_Properties.stage);
  }
  else {
    currTab = tabs.find((tab) => tab.path === location.pathname);

  }

  if (currTab) {
    return (
      <div style={{ display: "flex" }}>
        {tabs.map((tab) => (
          <Tab key={tab.id} tab={tab} currTab={currTab} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};
