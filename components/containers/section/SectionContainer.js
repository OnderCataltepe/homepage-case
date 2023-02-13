import styles from "./sectionContainer.module.scss";
import Image from "next/image";

const SectionContainer = ({
  children,
  title,
  text,
  icon,
  bgColor,
  subTitle,
  orderText,
}) => {
  return (
    <section className={styles.container} style={{ backgroundColor: bgColor }}>
      {icon && <Image alt="icon" src={icon} />}
      <h4>{subTitle}</h4>
      <h3>{title}</h3>
      <p style={{ order: orderText }}>{text}</p>
      <hr />
      {children}
    </section>
  );
};

export default SectionContainer;
