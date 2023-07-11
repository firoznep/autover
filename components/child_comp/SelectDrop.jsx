import styles from "./selectDrop.module.css";

const SelectDrop = ({ label, name, values, onChange }) => {
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
      >
        <option className={styles.selectPlaceHolder}>
          {`Select ${name}`.toUpperCase()}
        </option>
        {values &&
          values.map((v, i) => {
            return (
              <option value={v} key={i}>
                {v}
              </option>
            );
          })}
      </select>
    </div>
  );
};
export default SelectDrop;
