// Recipe Images
import nutHorizontal from "../public/icon/nutHorizontal.png";
import recipe1 from "../public/recipes/recipe1.png";
import recipe2 from "../public/recipes/recipe2.png";
import recipe3 from "../public/recipes/recipe3.png";

// Circle Icons
import dumbbellIcon from "../public/icon/dumbbellIcon.png";
import bIcon from "../public/icon/bIcon.png";
import fruitIcon from "../public/icon/fruitIcon.png";
import leafColorIcon from "../public/icon/leafColorIcon.png";
import heartIcon from "../public/icon/heartIcon.png";

import acidCircle from "../public/circles/acid.png";
import fiberCircle from "../public/circles/fiber.png";
import proteinCircle from "../public/circles/protein.png";
import vitamineCircle from "../public/circles/vitamine.png";
import healthCircle from "../public/circles/health.png";

// Banner Image
import bannerImg from "../public/banner/banner1.png";

// Product Images
import nutVertical from "../public/icon/nutVertical.png";
import almond from "../public/products/almondSpread.png";
import birthdayCake from "../public/products/birthdayCakeSpread.png";
import cardamon from "../public/products/cardamonSpread.png";
import hazelnut from "../public/products/hazelnutSpread.png";

// Recipe Video Images
import recipeVideo1 from "../public/recipeVideos/recipeVideo1.png";
import recipeVideo2 from "../public/recipeVideos/recipeVideo2.png";

// Categories
import spreads from "../public/category/spreads.jpg";
import snacks from "../public/category/snacks.jpg";
import anatolianNuts from "../public/category/anatolianNuts.jpg";

// Slider Images
import cashewSpread from "../public/slider/cashewSpread.jpg";

/*      DATA         */

// Menu
export const MENU_DATA = [
  { title: "Anasayfa", path: "/" },
  { title: "Ürünler", path: "/" },
  { title: "Hakkımızda", path: "/" },
  { title: "Tarifler", path: "/" },
  { title: "İletişim", path: "/" },
];

//Products
export const PRODUCTS = {
  subTitle: "Ürünler",
  text: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula.",
  icon: nutVertical,
  items: [
    { id: 1, name: "Almond Spread", points: 2.4, image: almond, path: "/" },
    { id: 2, name: "Cardamon Spread", points: 4.3, image: cardamon, path: "/" },
    {
      id: 3,
      name: "Birthdaycake Spread",
      points: 3.6,
      image: birthdayCake,
      path: "/",
    },
    { id: 4, name: "Hazelnut Spread", points: 4.5, image: hazelnut, path: "/" },
  ],
};

// Recipes
export const RECIPES = {
  subTitle: "Tarifler",
  text: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula.",
  icon: nutHorizontal,
  items: [
    {
      id: 1,
      title: "Frapella ile kek",
      text: "Alienum phaedrum torquatos nec eu, vis detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei estos ei...",
      image: recipe1,
      date: { month: "Sep", day: "23", year: "2020" },
      path: "/",
    },
    {
      id: 2,
      title: "Frapella ile kek",
      text: "Alienum phaedrum torquatos nec eu, vis detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei estos ei...",
      image: recipe2,
      date: { month: "Sep", day: "23", year: "2020" },
      path: "/",
    },
    {
      id: 3,
      title: "Frapella ile kek",
      text: "Alienum phaedrum torquatos nec eu, vis detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei estos ei...",
      image: recipe3,
      date: { month: "Sep", day: "23", year: "2020" },
      path: "/",
    },
  ],
};

// Circle Icons
export const CIRCLE_ICONS = {
  subTitle: "Her gün bir kaşık",
  title: "Sağlıklı Frapella",
  text: "Alienum phaedrum torquatos nec eu, vis detr periculis ex, nihil expetendis in mei. Mei an pericula.",
  items: [
    { icon: dumbbellIcon, bgIcon: proteinCircle },
    { icon: fruitIcon, bgIcon: acidCircle },
    { icon: leafColorIcon, bgIcon: fiberCircle },
    { icon: bIcon, bgIcon: vitamineCircle },
    { icon: heartIcon, bgIcon: healthCircle },
  ],
  path: "/",
};

// Recipe Videos

export const RECIPE_VIDEOS = [
  {
    id: 1,
    name: "Tarif Video İsmi",
    text: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula.",
    image: recipeVideo1,
    path: "/",
  },
  {
    id: 2,
    name: "Tarif Video İsmi",
    text: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula.",
    image: recipeVideo2,
    path: "/",
  },
];

// Banner
export const BANNER = {
  title: "Sed sed mi dictum, facilisis lacus mattis",
  text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut hendrerit ultricies consequat.",
  image: bannerImg,
};

// Categories
export const CATEGORIES = [
  { id: 1, bgImage: snacks, title: "Snacks", path: "/" },
  { id: 2, bgImage: spreads, title: "Spreads", path: "/" },
  { id: 3, bgImage: anatolianNuts, title: "Anatolian Nuts Spreads", path: "/" },
];

export const SLIDER_ITEMS = [
  {
    id: 1,
    bgImage: cashewSpread,
    title: "Cashew Spread",
    titleColor: "#ae611c",
    text: "Mauris metus ligula, viverra fermentum euismod a, gravida at ipsum.",
    textColor: "#fff",
    path: "/",
  },
  {
    id: 2,
    bgImage: cashewSpread,
    title: "Cashew Spread",
    titleColor: "#ae611c",
    text: "Mauris metus ligula, viverra fermentum euismod a, gravida at ipsum.",
    textColor: "#fff",
    path: "/",
  },
  {
    id: 3,
    bgImage: cashewSpread,
    title: "Cashew Spread",
    titleColor: "#ae611c",
    text: "Mauris metus ligula, viverra fermentum euismod a, gravida at ipsum.",
    textColor: "#fff",
    path: "/",
  },
];
