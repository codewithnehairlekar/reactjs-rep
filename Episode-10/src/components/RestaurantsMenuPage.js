import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);

  if (resinfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resinfo.data.cards[0].card.card.info;

  const { itemCards } =
    resinfo?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log("value for itemcards" + itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li>
            {item.card.info.name}-
            {item.card.info.price || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
