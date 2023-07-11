import styles from "./customBtn.module.css";

const CustomBtn = ({ text, onClick, className, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${className}`}
    >
      {text}
    </button>
  );
};
export default CustomBtn;
