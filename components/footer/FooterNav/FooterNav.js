import styles from "../footer.module.scss";
import Image from "next/image";
import Link from "next/link";
// icons
import phone from "../../../public/icon/phone.png";
import creditCards from "../../../public/icon/creditCards.png";
import { VscMail } from "react-icons/vsc";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { IoPricetagOutline } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { BsPerson } from "react-icons/bs";

const FooterNav = () => {
  return (
    <div className={styles.footerNav}>
      <div>
        <h6>About us</h6>
        <p>
          Your nature-inspired supplier of all-organic and fresh produce for all
          your daily needs. We offer skin treatments, nutrition advisory and
          more.
        </p>
      </div>
      <div>
        <h6>Contact us</h6>
        <ul>
          <li>
            <div className={styles.icon}>
              <TbBuildingSkyscraper />
            </div>
            <span>27 Rue du Aire 60000 Tillê, France</span>
          </li>
          <li>
            <Image alt="phone" width={14} height={14} src={phone} />{" "}
            <span>+589 55668 8569 44</span>
          </li>
          <li>
            <div className={styles.icon}>
              <VscMail width={30} />
            </div>
            <span>sante@qodeinteractive.com</span>
          </li>
        </ul>
      </div>
      <div>
        <h6>Profile</h6>
        <ul>
          <li>
            <div className={styles.icon}>
              <BsPerson />
            </div>
            <Link href="/">My account</Link>
          </li>
          <li>
            <div className={styles.icon}>
              <IoPricetagOutline />
            </div>
            <Link href="/">Checkout</Link>
          </li>
          <li>
            <div className={styles.icon}>
              <ImEye />
            </div>
            <Link href="/">Wishlist</Link>
          </li>
        </ul>
      </div>
      <div className={styles.creditCards}>
        <h6>Payment</h6>
        <p>
          Alienum phaedrum torquateos nec eu, detr periculis ex, nihil expet.
        </p>
        <Image height={18} alt="creditCards" src={creditCards} />
      </div>
    </div>
  );
};

export default FooterNav;
