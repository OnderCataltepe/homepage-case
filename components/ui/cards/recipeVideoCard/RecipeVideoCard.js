import styles from "./recipeVideoCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ImPlay3 } from "react-icons/im";
import { useRouter } from "next/router";
const RecipeVideoCard = ({ item }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt={`${item.name} image`} src={item.image} />

        <button
          className={styles.playButton}
          onClick={() => router.push(item.path)}
        >
          <ImPlay3 />
        </button>
      </div>
      <Link href={item.path}>{item.name}</Link>

      <p>{item.text.slice(0, 70)}</p>
    </div>
  );
};

export default RecipeVideoCard;
