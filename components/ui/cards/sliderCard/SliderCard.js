import styles from "./sliderCard.module.scss";
import Image from "next/image";
import OutlinedButton from "../../buttons/OutlinedButton";
import { useRouter } from "next/router";

const SliderCard = ({ item }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Image alt={item.title} src={item.bgImage} priority={true} />
      <div className={styles.info}>
        <h6 style={{ color: item.titleColor }}>{item.title}</h6>
        <p style={{ color: item.textColor }}>{item.text}</p>
        <OutlinedButton
          text="Detaylar"
          color="white"
          onClick={() => router.push(item.path)}
        />
      </div>
    </div>
  );
};

export default SliderCard;
