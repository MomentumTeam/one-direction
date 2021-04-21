import { Progress } from "antd";
import styles from "./Progress.module.css";

export const AppProgress = () => {
  return (
    // <div>
    // <div className={styles.progress}>
    //   <div className={styles.progressValue}></div>
    // </div>
    <div className={styles.progress}>
      <Progress
        percent={54}
        strokeLinecap="square"
        className={styles.bigProgress}
      />
    </div>
    // <Progress percent={30} />
  );
};
