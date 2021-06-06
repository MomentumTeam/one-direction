import { Progress } from "antd";
import styles from "./Progress.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectUserObj, getUser } from "../../features/user/userSlice";

export const AppProgress = () => {
  const user = useSelector(selectUserObj);
  const stage = user && Object.keys(user).length !== 0 ? user.Ui_Properties.stage : 1; 

  return (
    // <div>
    // <div className={styles.progress}>
    //   <div className={styles.progressValue}></div>
    // </div>
    <div className={styles.progress}>
      <Progress
        percent={(stage-1)*25}
        strokeLinecap="square"
        className={styles.bigProgress}
        strokeColor='#CFEA11'
      />
    </div>
    // <Progress percent={30} />
  );
};
