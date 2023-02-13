import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import FooterNav from "./FooterNav/FooterNav";
// icons
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import leaf from "../../public/icon/leaf.png";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <FooterNav />

      <div className={styles.bottom}>
        <div className={styles.copyRight}>
          <div>
            <Image alt="leaf Icon" width={12} height={23} src={leaf} />
          </div>
          <p>Copyright © 2021 Qode Interactive, All Rights Reserved.</p>
        </div>
        <div className={styles.icons}>
          <p>Follow us:</p>
          <Link href="https://www.facebook.com">
            {" "}
            <ImFacebook />{" "}
          </Link>
          <Link href="https://www.twitter.com">
            <ImTwitter />{" "}
          </Link>
          <Link href="https://www.facebook.com">
            <ImInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
