import styles from "./banner.module.scss";
import Image from "next/image";

const Commerce = ({ bgColor, image, title, text, titleColor, textColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className={styles.container}>
      <div>
        <Image alt={`${title} image`} src={image} />
      </div>
      <div>
        <h6 style={{ color: titleColor }}>{title} </h6>
        <p style={{ color: textColor }}>{text}</p>
      </div>
    </div>
  );
};

export default Commerce;
