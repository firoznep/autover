import CustomBtn from "./child_comp/CustomBtn";
import styles from "./success.module.css";

const Success = ({ message, onClick }) => {
  return (
    <div className={`${styles.container} `}>
      <div className={styles.mes}>
        <p>{message}</p>

        <CustomBtn text={"X"} onClick={onClick} className={styles.ok} />
      </div>
    </div>
  );
};
export default Success;
