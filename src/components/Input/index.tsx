import styles from "./Input.module.scss";

interface InputProps {
  type?: string;
  value: string;
  label: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ type, value, label }: InputProps) => {
  return (
    <div className={styles["input-container"]}>
      <input
        type={type}
        value={value}
        onChange={(event) => event.target.value}
        className={styles.input}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
