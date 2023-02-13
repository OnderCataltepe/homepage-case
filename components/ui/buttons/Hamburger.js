import styles from "./buttons.module.scss";

const HamburgerButton = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={styles.hamburgerContainer}>
      <div>
        <input
          id="dropdown"
          className={styles.inputBox}
          onChange={(e) => setOpenMenu(e.target.checked)}
          checked={openMenu}
          type="checkbox"
          style={{ display: "none" }}
        />

        <label htmlFor="dropdown" className={styles.dropdown}>
          <span className={styles.hamburger}>
            <span className={`${styles.iconBar} ${styles.topBar}`}></span>
            <span className={`${styles.iconBar} ${styles.middleBar}`}></span>
            <span className={`${styles.iconBar} ${styles.bottomBar}`}></span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default HamburgerButton;
