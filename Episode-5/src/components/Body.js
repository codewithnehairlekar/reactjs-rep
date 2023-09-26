import RestaurantCard from "./RestaurantCard";
import data from "./../utils/data";
import { useState } from "react";
import { SAMPLE_DATA } from "../utils/constants";
const Body = () => {
  let [restaurantsList, setRestaurantsList] = useState(SAMPLE_DATA);
  let cardItem = [];
  for (i = 0; i < restaurantsList.length; i++) {
    cardItem[i] = (
      <RestaurantCard
        key={restaurantsList[i].info.id}
        resObj={restaurantsList[i]}
      />
    );
  }
  return (
    <div className="body">
      <button
        onClick={() => {
          let filteredRestaurants = restaurantsList.filter(
            (res) => res.info.avgRating > 4
          );
          setRestaurantsList(filteredRestaurants);
        }}
        className="filter"
      >
        Filter
      </button>
      <div className="restro-container">{cardItem}</div>
    </div>
  );
};

export default Body;
