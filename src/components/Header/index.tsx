import styles from "./Header.module.scss";
import Search from "./Search";
import Category from "./Category";
import { Link } from "react-router-dom";
import ModalLogin from "components/ModalLogin";
import { useState } from "react";

const Header = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState<boolean>(false);

  const handleLoginClick = () => {
    setIsOpenModalLogin(!isOpenModalLogin);
  };

  const token = sessionStorage.getItem("token");

  const [userIsLogin, setUserIsLogin] = useState<boolean>(token !== null);

  const effectLogin = () => {
    setIsOpenModalLogin(false);
    setUserIsLogin(true);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    setUserIsLogin(false);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.navigation}>
        <button className={styles["arrow-left"]}>
          <img src="assets/icons/small-left.png" alt="" />
        </button>
        <button className={styles["arrow-right"]}>
          <img src="assets/icons/small-right.png" alt="smallRight" />
        </button>

        <div className={styles.header__main}>
          <Search />
        </div>
        <div className={styles.header__categories}>
          <Category />
        </div>
      </div>

      {!userIsLogin && (
        <>
          <div className={styles.header__login}>
            <button className={styles.subscribe}>
              <Link to={"/subscribe"} className={styles.subscribe__link}>
                Inscreva-se
              </Link>
            </button>
            <button className={styles.login} onClick={handleLoginClick}>
              Entrar
            </button>
            <ModalLogin
              isOpen={isOpenModalLogin}
              setOpen={setIsOpenModalLogin}
              loginComplete={effectLogin}
            />
          </div>
        </>
      )}
      {userIsLogin && (
        <div className={styles.userLogin}>
          <div >
            <Link to={""} className={styles.profile_info}>Minha Conta</Link>
          </div>
          <div>
            <button className={styles.logout} onClick={handleLogOut}>Sair</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
