import RestroCard from "./RestroCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";

const Body = () => {
    const [listOfRestro, setListOfRestro] = useState([]);
    const [filterRestro, setFilterRestro] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);
    
    
 useEffect(() => {
 fetchData();
}, []);

const fetchData = async () => {
 const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
 const json = await data.json();
setListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

};
if(onlineStatus === false)
    return <h1>Looks like you are Offline, check your internet connection!!!</h1>;
return  (listOfRestro.length === 0) ?     <Shimmer/>
 : (
        <div className="">
            <div className="flex p-4 m-4">
                <div className="px-3 mx-4">
                    <input className="border-2 px-2" type="text" value={searchText}
                     onChange={(e) => setSearchText(e.target.value)
                    }/>
                    <button className="px-2 bg-yellow-200 rounded-lg m-2" onClick = {
                        () => {
                            const searchRestro = listOfRestro.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                      
                         setFilterRestro(searchRestro);
                      
                    }}>Search</button>
                </div>
            <div className="top-rated">
                <button className="top-ratedRestro"
                onClick = {() =>
                { 
                 const  filterData = listOfRestro.filter((res) =>
                (res.info.avgRating) > 4
                )    
                setFilterRestro(filterData);               
                }     
                }
                > Top Rated Restaurant</button>
            </div>
            <div className="mx-6">
                <label>UserName:</label>
                <input className="border mx-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
            </div>
            </div>
            <div className="flex flex-wrap">
             {filterRestro.map((restro) =>    (         
             <Link key={restro.info.id} to = {"/restaurents/" + restro.info.id} >
            <RestroCard resData={restro} />
             </Link>
            ) )} 
            </div>
        </div>
    )
}
export default Body;