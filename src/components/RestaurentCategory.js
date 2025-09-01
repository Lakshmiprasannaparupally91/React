import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurentCategory = ({data, showItem, setShowIndex}) => {

    const handleClick = () =>{
        setShowIndex();
    }

    return(
        <div className="">
            <div className="  p-4 bg-gray-100 shadow-lg w-6/12 my-4  mx-auto cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between">
                <span className="text-bold">{data.title} ({data.itemCards.length})</span>
                <span className="p-4">🔽</span>
                                </div>

                {showItem && <ItemsList items ={data.itemCards}/>}
                </div>
        </div>
    )
}
export default RestaurentCategory;