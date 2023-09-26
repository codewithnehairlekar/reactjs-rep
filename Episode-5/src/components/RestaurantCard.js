import { BASE_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={BASE_IMAGE_URL + props.resObj.info.cloudinaryImageId}
      ></img>
      <h3>{props.resObj.info.name}</h3>
      <h4>{props.resObj.info.cuisines.join(", ")}</h4>
      <h4>{props.resObj.info.avgRating}</h4>
      <h4>{props.resObj.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
