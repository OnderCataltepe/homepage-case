import styles from "./buttons.module.scss";

const OutlinedButton = ({ text, onClick, color, order }) => {
  return (
    <button
      style={{ color, order }}
      onClick={onClick}
      className={styles.outlined}
    >
      {text}
    </button>
  );
};
export default OutlinedButton;
