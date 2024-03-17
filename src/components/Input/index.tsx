import styles from "./Input.module.scss";

interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onBlur: () =>  void;
}

const Input = ({type, placeholder, value, onChange, onBlur }: InputProps) => {

  return (
    <div className={styles["input-container"]}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
