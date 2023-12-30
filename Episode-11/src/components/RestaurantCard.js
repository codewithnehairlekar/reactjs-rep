import { BASE_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="m-4 p-4 w-[250px] h-96 rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        className="rounded-lg h-52 w-64"
        src={BASE_IMAGE_URL + props.resObj.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{props.resObj.info.name}</h3>
      <h4>{props.resObj.info.cuisines.join(", ")}</h4>
      <h4>{props.resObj.info.avgRating}</h4>
      <h4>{props.resObj.info.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
