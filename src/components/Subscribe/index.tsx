import axios from "axios";
import styles from "./Subscribe.module.scss";
import Input from "components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/regex";


const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErro, setFieldErro] = useState({
    name: false,
    email: false,
    password: false,
  });

  const errors = {
    userName: "Digitar um nome!",
    userEmail: "Preencher o campo e-mail corretamente",
    userPassord: "A senha deve contar  no mínimo 6 caracteres!",
  };

  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    axios
      .post("http://localhost:8000/public/registrar", user)
      .then((res) => {
        console.log(res);
        alert("O usuario foi cadastrado com sucesso!");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((erro) => {
        console.log(erro);
        alert("Erro no cadastro do usuário.");
      });
  };

  return (
    <form className={styles.form__subscribe} onSubmit={submitForm}>
      <div className={styles["form__subscribe-inputs"]}>
        <div className={styles["form__subscribe-container"]}>
          <div className={styles["form__subscribe-container--div"]}>
            <div className={styles["form__subscribe-label"]}>
              <label>Nome</label>
            </div>
            <Input
              type="name"
              placeholder="Insira seu nome"
              value={name}
              onChange={setName}
              onBlur={() => {
                setFieldErro((prev) => ({ ...prev, name: name.length <= 7 }));
              }}
            />
            <div className={styles.verification}>
              {fieldErro?.name && <span>{errors.userName}</span>}
            </div>
          </div>
          <div className={styles["form__subscribe-label"]}>
            <div className={styles["form__subscribe-label"]}>
              <label>Endereço de e-mail</label>
            </div>
            <Input
              type="e-mail"
              placeholder="dominio@exemplo.com"
              value={email}
              onChange={setEmail}
              onBlur={() => {
                setFieldErro((prev) => ({ ...prev, email: !validateEmail(email)}));
              }}
            />
            <div className={styles.verification}>
              {fieldErro?.email && <span>{errors.userEmail}</span> }
            </div>
          </div>
          
          <div className={styles["form__subscribe-container--div"]}>
            <div className={styles["form__subscribe-label"]}>
              <label>Senha</label>
            </div>
            <Input
              type="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={setPassword}
              onBlur={() => {
                setFieldErro((prev) => ({ ...prev, password: !validatePassword(password)}));
              }}
            /> 
            <div className={styles.verification}>
              {fieldErro?.password && <span>{errors.userPassord}</span>}
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.left}></div>
          Cadastrar
          <div className={styles.right}></div>
        </button>
      </div>
    </form>
  );
};

export default Subscribe;