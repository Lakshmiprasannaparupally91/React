import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utilis/constants";
import RestaurentCategory from "./RestaurentCategory";
const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resid} = useParams();
    const [showIndex, setShowIndex] = useState(null);

    useEffect(() =>{
        fetchData();
    }, []);
    const fetchData = async () =>{
        const data = await fetch(MENU_API+resid);
        const json = await data.json();
        setResInfo(json.data);
  }
if (resInfo === null)
        return <Shimmer/>
  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
 const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
return(
        <div className="text-center">
            <div className="p-4">
                <span className="font-bold text-2xl">{name}</span>
                <p className="p-2 m-2 font-semibold">{cuisines.join(" ")} - {costForTwoMessage}</p>
            </div>
            <div >
            {categories.map((category, index) => 
                 <RestaurentCategory  key = {category?.card?.card?.title} 
                 data={category?.card?.card} 
                 showItem = {index === showIndex ? true : false}
                 setShowIndex = {() => setShowIndex(index)}/>
             )}
            </div>
        </div>
    )
}
export default RestaurentMenu;