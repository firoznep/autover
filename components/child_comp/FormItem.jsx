import upperCaseFirstL from "@/libs/upperCaseFirstL";
import styles from "./formItem.module.css";

export default function FormItem({
  label,
  name,
  type,
  onChange,
  dvalue,
  preDate,
  onKeyUp,
  ...props
}) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>

      <div>
        {preDate && <span>{`${preDate} `}</span>}

        <input
          className={styles.inputField}
          type={type}
          placeholder={name}
          name={name.toLowerCase()}
          onChange={onChange}
          id={name.toLowerCase()}
          defaultValue={dvalue}
          onKeyUp={onKeyUp}
          {...props}
        />
      </div>
    </div>
  );
}
