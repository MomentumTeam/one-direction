import styles from "./FingerPrint.module.css";

export const OperationTime = ({
  title,
  firstLine,
  secondLine,
  icon = null,
}) => {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.itemIcon}></div>
        <div className={styles.itemSection}>
          <div className={styles.itemFirstLine}>
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemIcon}>
          {icon ? <img src={process.env.PUBLIC_URL + icon} /> : null}
        </div>
        <div className={styles.itemSection}>
          <div className={styles.itemFirstLine}>{firstLine}</div>
          <div className={styles.itemSecondLine}>{secondLine}</div>
        </div>
      </div>
    </div>
  );
};
