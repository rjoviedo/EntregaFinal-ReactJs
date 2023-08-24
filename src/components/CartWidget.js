import { useContext } from "react";
import cart from "../components/img/cart.svg"
import { listCartContext } from "../components/components item/ProviderContextCart";
import { controllerShowCart } from "./header/ContextCart";

const CartWidget = () => {

    const { cartShow, setCartShow } = useContext(controllerShowCart)
    const { listCart } = useContext(listCartContext)

    const showCart = () => {
        setCartShow ( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="containerLength" onClick={showCart}>
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                {listCart.length}
            </span>
        </div>
    )
}

export default CartWidget;
    
