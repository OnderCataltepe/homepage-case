import styles from "./productCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const PrductCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt={item.name} src={item.image} />
      </div>
      <div>
        <div
          className={styles.stars}
          style={{ "--rating": `${item.points}` }}
        ></div>
        <div className={styles.starsDeneme}>
          <div className={styles.star}></div>
        </div>
        <Link href={item.path}>{item.name}</Link>
      </div>
    </div>
  );
};

export default PrductCard;
