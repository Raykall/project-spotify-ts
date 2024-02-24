import styles from "./Input.module.scss";

interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({type, placeholder, value, onChange }: InputProps) => {
  return (
    <div className={styles["input-container"]}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Input;
