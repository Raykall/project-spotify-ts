import styles from "./Form.module.scss";
import Input from "components/Input";
import { useState } from "react";

const Form = () => {
  const [nome, setNome] = useState("");
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
                value={nome}
                label="Digite seu Nome"
                type="text"
                onChange={setNome}
              />
            </div>
            <div className={styles["form__subscribe-label"]}>
              <div className={styles["form__subscribe-label"]}>
                <label>Endereço de e-mail</label>
              </div>
              <Input
                value={email}
                label="nome@dominio.com"
                type="text"
                onChange={setEmail}
              />
            </div>
            <div className={styles["form__subscribe-container--div"]}>
              <div className={styles["form__subscribe-label"]}>
                <label>Senha</label>
              </div>
              <Input
                value={senha}
                label="Digite sua senha"
                type="text"
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