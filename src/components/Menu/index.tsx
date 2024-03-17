import { ReactComponent as Logo } from "assets/Spotify-Logo.svg";
import  styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link to={"/"}>{<Logo />}</Link>
    </div>
  );
};

export default Menu;