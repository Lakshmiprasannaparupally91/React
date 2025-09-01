import { RES_LOGO } from "../utilis/constants";
import UserContext from "../utilis/UserContext";
import { useContext } from "react";
const RestroCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, sla} = resData?.info;
        const {loggedInUser} = useContext(UserContext);

   return(

        <div className="m-4 bg-pink-200 rounded-sm w-[250px] h-[400px]">
       <img alt="res-logo" className="w-[200px] rounded-lg mask-center" src = { RES_LOGO + resData.info.cloudinaryImageId}/>
        <h3 className="font-bold">{name}</h3>
        <h6 className="flex-wrap flex">{cuisines.join(",")}</h6>
        <h6>{resData.info.avgRating} stars</h6>
        <h6>{costForTwo}</h6>
        <h6>{sla?.deliveryTime} min</h6>
        <h6>Name: {loggedInUser}</h6>
        </div>
    )
}
export default RestroCard;