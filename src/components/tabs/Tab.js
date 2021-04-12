import { NavLink } from "react-router-dom";
import styles from "./Tab.module.css";

export const Tab = ({ tab, currTab }) => {
  const getIcon = () => {
    if (tab === currTab) {
      return `/img/${tab.id}S.png`;
    }
    return `/img/${tab.id}${tab.id < currTab.id ? "D" : ""}.png`;
  };
  console.log(tab, currTab);
  const isDone = tab.id <= currTab.id ? true : false;
  console.log(process.env);
  return (
    <div>
      <NavLink
        style={isDone ? null : { backgroundColor: "#001322" }}
        className={styles.menuLink}
        activeClassName={styles.active}
        to={tab.path}
        exact
      >
        <img src={process.env.PUBLIC_URL + getIcon()} alt="" />
      </NavLink>
    </div>
  );
};
