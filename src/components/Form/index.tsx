import styles from "./Form.module.scss";
import Input from "components/Input";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form className={styles.form__subscribe}>
      <div>
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
              />
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
              />
            </div>
            <div className={styles["form__subscribe-container--div"]}>
              <div className={styles["form__subscribe-label"]}>
                <label>Senha</label>
              </div>
              <Input
                type="senha"
                placeholder="Insira sua senha"
                value={senha}
                onChange={setSenha}
              />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.left}></div>
        Avançar
        <div className={styles.right}></div>
      </button>
    </form>
  );
};

export default Form;
