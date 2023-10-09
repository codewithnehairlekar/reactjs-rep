import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./shimmer";
import { SAMPLE_DATA } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatusPage from "../utils/useOnlineStatusPage";

const Body = () => {
  let [restaurantsList, setRestaurantList] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filterRestraurantList, setFilterRestraurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const jsonData = await data.json();

    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    let resData = await checkJsonData(jsonData);
    if (resData == undefined) {
      resData = SAMPLE_DATA;
    }
    //console.log("check data value :: " + JSON.stringify(resData));
    setRestaurantList(resData);
    setFilterRestraurantList(resData);
  };

  const onlineStatus = useOnlineStatusPage();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!!Please check your internet connection</h1>
    );

  return restaurantsList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              console.log(searchText);
              let searchRestaurant = restaurantsList.filter((resName) => {
                return resName.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(JSON.stringify(searchRestaurant));
              setFilterRestraurantList(searchRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="Top-Restaurants"
          onClick={() => {
            let topRestaurants = restaurantsList.filter(
              (s) => s.info.avgRating > 4
            );
            setRestaurantList(topRestaurants);
          }}
        >
          Top-Restaurants
        </button>
      </div>

      <div className="restro-container">
        {filterRestraurantList.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
