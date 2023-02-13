import CardContainer from "../../../containers/card/CardContainer";
import CategoryCard from "./CategoryCard";
const CategoryCardList = ({ items }) => {
  return (
    <CardContainer>
      {items.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ))}
    </CardContainer>
  );
};

export default CategoryCardList;
