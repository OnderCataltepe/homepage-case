import styles from "./categoryCard.module.scss";
import Image from "next/image";
import Link from "next/link";
const CategoryCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt={item.title} src={item.bgImage} />
      </div>
      <p>{item.title}</p>
      <Link href={item.path}>Tümünü Gör</Link>
    </div>
  );
};

export default CategoryCard;
