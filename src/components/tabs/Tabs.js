import { Tab } from "./Tab";
import { useLocation } from "react-router-dom";

const tabs = [
  {
    id: 6,
    path: "/faq",
  },
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
  let currTab = tabs.find((tab) => tab.path === location.pathname);
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
