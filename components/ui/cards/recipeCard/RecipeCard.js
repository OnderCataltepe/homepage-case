import Image from "next/image";
import Link from "next/link";
import styles from "./recipeCard.module.scss";

const RecipeCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt={`${item.title} image`} src={item.image} />
        <div className={styles.date}>
          <span>{item.date.month} </span>
          <span>{item.date.day} </span>
          <span>{item.date.year} </span>
        </div>
      </div>
      <h6>{item.title}</h6>
      <p>{item.text.slice(0, 133)}</p>
      <Link href={item.path}>Devamını oku</Link>
    </div>
  );
};

export default RecipeCard;
