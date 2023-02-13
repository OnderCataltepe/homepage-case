import CardContainer from "../../containers/card/CardContainer";
import CirclePoster from "./CirclePoster";

const CirclePosterList = ({ items }) => {
  return (
    <CardContainer>
      {items.map((item, index) => (
        <CirclePoster key={index} icon={item.icon} bgIcon={item.bgIcon} />
      ))}
    </CardContainer>
  );
};

export default CirclePosterList;
