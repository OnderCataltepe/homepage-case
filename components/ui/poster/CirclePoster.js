import Image from "next/image";
import styles from "./circlePoster.module.scss";

const CirclePoster = ({ icon, bgIcon }) => {
  return (
    <div className={styles.container}>
      <Image alt="bg" src={bgIcon} />
      <div className={styles.centerIcon}>
        <Image alt="icon" src={icon} />
      </div>
    </div>
  );
};

export default CirclePoster;
