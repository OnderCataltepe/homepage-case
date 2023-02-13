import CardContainer from "../../../containers/card/CardContainer";
import RecipeCard from "./RecipeCard";

const RecipeCardList = ({ items }) => {
  return (
    <CardContainer>
      {items.map((item) => (
        <RecipeCard key={item.id} item={item} />
      ))}
    </CardContainer>
  );
};

export default RecipeCardList;
