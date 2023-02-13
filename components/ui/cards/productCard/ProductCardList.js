import CardContainer from "../../../containers/card/CardContainer";
import PrductCard from "./ProductCard";
const ProductCardList = ({ items }) => {
  return (
    <CardContainer>
      {items.map((item) => (
        <PrductCard key={item.id} item={item} />
      ))}
    </CardContainer>
  );
};

export default ProductCardList;
