import styles from "./formItem.module.css";

export default function FormItem({ label, name, type, onChange, ...props }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label.toLowerCase()} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.inputField}
        type={type}
        placeholder={name}
        name={name.toLowerCase()}
        onChange={onChange}
        id={name.toLowerCase()}
        {...props}
      />
    </div>
  );
}
