import { NavLink } from "react-router-dom";

export const Tab = ({ tab, getIcon }) => {
  return (
    <div style={{ display: "flex" }}>
      <NavLink
        className="menu-link"
        activeClassName="active"
        to={tab.path}
        exact
      >
        <img src={process.env.PUBLIC_URL + getIcon(tab)} alt="" />
      </NavLink>
    </div>
  );
};
