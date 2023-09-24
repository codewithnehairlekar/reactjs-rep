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

//new card each time =>  <RestaurantCard i/p = "" />,<RestaurantCard i/p="" />
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.cloudinaryImageId
        }
      ></img>
      <h3>{props.restaurantName}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.avgRating}</h4>
      <h4>{props.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  let cardItem = [];
  for (i = 0; i < data.restaurants.length; i++) {
    cardItem[i] = (
      <RestaurantCard
        restaurantName={data.restaurants[i].info.name}
        cuisines={data.restaurants[i].info.cuisines.join(", ")}
        avgRating={data.restaurants[i].info.avgRating}
        deliveryTime={data.restaurants[i].info.sla.deliveryTime}
        cloudinaryImageId={data.restaurants[i].info.cloudinaryImageId}
      />
    );
  }
  console.log(cardItem);
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restro-container">{cardItem}</div>
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
