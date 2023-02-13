import CardContainer from "../../../containers/card/CardContainer";
import RecipeVideoCard from "./RecipeVideoCard";

const RecipeVideoList = ({ items }) => {
  return (
    <CardContainer>
      {items.map((item) => (
        <RecipeVideoCard key={item.id} item={item} />
      ))}
    </CardContainer>
  );
};

export default RecipeVideoList;
