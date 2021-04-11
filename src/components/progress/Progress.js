// import { Progress } from "antd";
import styles from "./Progress.module.css";

export const Progress = () => {
  return (
    // <div>
    <div className={styles.progress}>
      <div className={styles.progressValue}></div>
    </div>
    // <Progress percent={30} />
  );
};
