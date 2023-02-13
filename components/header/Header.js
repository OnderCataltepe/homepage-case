import styles from "./header.module.scss";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import logo from "../../public/logo/logo.png";
const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <div className={styles.logo}>
          <Image alt="logo" src={logo} />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
