import { LOGO_URL } from "../utilis/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
      const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="flex justify-between bg-orange-100 shadow-amber-200 shadow-lg p-4 b-2">
            <img alt="app-logo" className="w-30" src={LOGO_URL}/>
    <div className="flex flex-wrap justify-between">
        <ul className="flex text-black-bold">
            <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="p-4"><Link to="/">Home</Link></li>
        <li className="p-4"><Link to="/about">About Us</Link></li>
        <li className="p-4"><Link to="/contact">Contact Us</Link></li>
        <li className="p-4">loggedInUser</li>
        <li><button className="p-4" onClick={() => {
btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }
        }>{btnName}</button></li>
                <li className="p-4">{loggedInUser}</li>

        <li className="p-4"><Link to="/cart"><img className="w-8 cursor-pointer" src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg"/>
        ({cartItems.length})</Link>
        </li>
        </ul>
    </div>
            </div>
    )
}
export default Header;