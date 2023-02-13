import styles from "./navbar.module.scss";
import Link from "next/link";
import HamburgerButton from "../ui/buttons/Hamburger";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/index.js";
import { MENU_DATA } from "../../constants/data";
import { BREAKPOINTS } from "../../constants/media";

const Navbar = () => {
  const isBreakpoint = useMediaQuery(BREAKPOINTS.medium);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (!isBreakpoint) {
      setOpenMenu(false);
    }
  }, [isBreakpoint]);

  return (
    <div className={styles.container}>
      {isBreakpoint && (
        <HamburgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}

      {!isBreakpoint && (
        <ul className={styles.large}>
          {MENU_DATA.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {isBreakpoint && openMenu && (
        <ul className={styles.mobile}>
          {MENU_DATA.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Navbar;
