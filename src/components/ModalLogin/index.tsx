import Input from "components/Input";
import styles from "./ModalLogin.module.scss";
import { useState } from "react";
import axios from "axios";
import { validateEmail, validatePassword } from "../utils/regex";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  loginComplete: () => void;
}

const ModalLogin = ({ isOpen, setOpen, loginComplete }: IModal) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErro, setFieldErro] = useState({
    email: false,
    password: false,
  });

  const submitFormLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    axios
      .post("http://localhost:8000/public/login", user)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("token", res.data.access_token);
        setEmail("");
        setPassword("");
        loginComplete();
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          alert(err.response.data.message);
        } else {
          alert(
            "Erro inesperado na comunicação com o servidor. Entre em contato com o suporte!"
          );
        }
        console.log(err);
      });
  };

  if (isOpen) {
    return (
      <div className={styles["modal-login"]}>
        <div className={styles.container__modal}>
          <div className={styles.container__modal__header}>
            <div className={styles.login__label}>Login</div>
            <div
              className={styles.login__close}
              onClick={() => setOpen(!isOpen)}
            >
              X
            </div>
          </div>
          <form className={styles.form__login} onSubmit={submitFormLogin}>
            <div className={styles["form__login-input"]}>
              <label>Email</label>
              <Input
                type="email"
                placeholder="Insira seu e-mail"
                value={email}
                onChange={setEmail}
                onBlur={() => {
                  setFieldErro((prev) => ({ ...prev, email: !validateEmail(email)}));
                }}
              />
            </div>

            <div className={styles["form__login-input"]}>
              <label>Senha</label>
              <Input
                type="password"
                placeholder="Insira sua senha"
                value={password}
                onChange={setPassword}
                onBlur={() => {
                  setFieldErro((prev) => ({ ...prev, password: !validatePassword(password)}));
                }}
              /> 
            </div>
            <button className={styles.button}>
              <div className={styles.left}></div>
              Login
              <div className={styles.right}></div>
            </button>
          </form>
        </div>
      </div>
    );
  }
  return <></>;
};

export default ModalLogin;
