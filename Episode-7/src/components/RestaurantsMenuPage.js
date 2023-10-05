import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { CARDS_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(CARDS_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  if (resinfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resinfo.data.cards[0].card.card.info;

  const { itemCards } =
    resinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log("value for itemcards" + itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
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
