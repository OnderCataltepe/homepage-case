import Head from "next/head";
import { useRouter } from "next/router";
// containers
import SectionContainer from "../components/containers/section/SectionContainer";
import SectionDefault from "../components/containers/section/SectionDefault";
// data
import {
  RECIPES,
  BANNER,
  PRODUCTS,
  CIRCLE_ICONS,
  RECIPE_VIDEOS,
  CATEGORIES,
  SLIDER_ITEMS,
} from "../constants/data";
// components
import OutlinedButton from "../components/ui/buttons/OutlinedButton";
import Banner from "../components/ui/banner/Banner";
import Carousel from "../components/ui/carousel/Carousel";
// list components
import RecipeCardList from "../components/ui/cards/recipeCard/RecipeCardList";
import CategoryCardList from "../components/ui/cards/categoryCard/CategoryCardList";
import ProductCardList from "../components/ui/cards/productCard/ProductCardList";
import CirclePosterList from "../components/ui/poster/CirclePosterList";
import RecipeVideoList from "../components/ui/cards/recipeVideoCard/RecipeVideoList";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Frapella</title>
        <meta name="description" content="Frapella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nutVertical.png" />
      </Head>
      <div>
        <Carousel items={SLIDER_ITEMS} />
        <SectionDefault bgColor="white">
          <CategoryCardList items={CATEGORIES} />
        </SectionDefault>
        <SectionContainer
          bgColor="white"
          icon={PRODUCTS.icon}
          subTitle={PRODUCTS.subTitle}
          text={PRODUCTS.text}
        >
          <ProductCardList items={PRODUCTS.items} />
        </SectionContainer>

        <SectionDefault bgColor="var( --white-background-color)">
          <RecipeVideoList items={RECIPE_VIDEOS} />
        </SectionDefault>
        <Banner
          title={BANNER.title}
          text={BANNER.text}
          image={BANNER.image}
          bgColor="var(--green-background-color)"
          titleColor="var(--green-text-color)"
          textColor="white"
        />

        <SectionContainer
          bgColor="white"
          icon={RECIPES.icon}
          subTitle={RECIPES.subTitle}
          text={RECIPES.text}
        >
          <RecipeCardList items={RECIPES.items} />
        </SectionContainer>

        <SectionContainer
          bgColor="var(--white-background-color)"
          subTitle={CIRCLE_ICONS.subTitle}
          title={CIRCLE_ICONS.title}
          text={CIRCLE_ICONS.text}
          orderText={1}
        >
          <CirclePosterList items={CIRCLE_ICONS.items} />
          <OutlinedButton
            order={2}
            text="Ürünleri Gör"
            color="var( --red-textSecondary-color)"
            onClick={() => router.push(item.path)}
          />
        </SectionContainer>
      </div>
    </>
  );
}
