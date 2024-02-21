import { ReactComponent as Logo } from "assets/Spotify-Logo.svg";
import  styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Logo />
    </div>
  );
};

export default Menu;