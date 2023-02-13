import styles from "./cardContainer.module.scss";

const CardContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CardContainer;
