import styles from "./sectionDefault.module.scss";

const SectionDefault = ({ children, bgColor }) => {
  return <section style={{backgroundColor: bgColor}} className={styles.container}>{children}</section>;
};

export default SectionDefault;
