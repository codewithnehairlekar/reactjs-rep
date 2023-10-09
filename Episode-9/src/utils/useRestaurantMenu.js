import { useEffect, useState } from "react";
import { CARDS_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(CARDS_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };
  return resinfo;
};

export default useRestaurantMenu;
