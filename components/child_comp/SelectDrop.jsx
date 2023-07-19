import styles from "./selectDrop.module.css";

const SelectDrop = ({ label, name, values, onChange, defaultValue }) => {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <select
        name={name}
        id={name}
        onChange={onChange}
        className={styles.selectField}
        defaultValue={defaultValue}
      >
        <option className={styles.selectPlaceHolder} />

        {values &&
          values.map((v, i) => {
            return <option key={i}>{v}</option>;
          })}
      </select>
    </div>
  );
};
export default SelectDrop;
