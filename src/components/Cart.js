import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utilis/cartSlice";


const Cart = () => {

      const cartItems = useSelector((store) => store.cart.items);
      const dispatch = useDispatch();
      const handleClearCart =() =>{
        dispatch(clearCart());
      }

    return (
        <div className="w-6/12 text-center">
        <h1 className="text-2xl p-4 m-4 text-bold">Cart</h1>
        <button className="cursor-pointer border m-1 p-1 bg-amber-300 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        <div>
        <ItemsList items = {cartItems}/>
        </div>
    </div>
    )

};
export default Cart;