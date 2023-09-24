import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";

const resData = {
  info: {
    id: "337335",
    name: "Kannur food kitchen",
    cloudinaryImageId: "a27weqanhnszqiuzsoik",
    locality: "1st  Stage",
    areaName: "BTM Layout",
    costForTwo: "₹200 for two",
    cuisines: ["Kerala", "Biryani", "Beverages"],
    avgRating: 3.8,
    feeDetails: {
      restaurantId: "337335",
      fees: [
        { name: "BASE_TIME" },
        { name: "BASE_DISTANCE", fee: 8800 },
        { name: "ANCILLARY_SURGE_FEE" },
      ],
      totalFee: 8800,
    },
    parentId: "114756",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 7.6,
      serviceability: "SERVICEABLE",
      slaString: "32 mins",
      lastMileTravelString: "7.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-24 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {
    context: "seo-data-6f94d024-958d-46f7-b1d5-3e2ff04e31a7",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/kannur-food-kitchen-1st-stage-btm-layout-bangalore-337335",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.cardData.info.cloudinaryImageId
        }
      ></img>
      <h3>{props.cardData.info.name}</h3>
      <h4>{props.cardData.info.cuisines.join(", ")}</h4>
      <h4>{props.cardData.info.avgRating}</h4>
      <h4>{props.cardData.info.sla.slaString}</h4>
    </div>
  );
};

const Body = () => {
  let cardElement = [];
  for (let i = 0; i < data.restaurants.length; i++) {
    cardElement.push(<RestaurantCard cardData={data.restaurants[i]} />);
  }
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restro-container">{cardElement}</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
