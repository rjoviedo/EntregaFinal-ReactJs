import "../../style/containerCart.css";
import close from "../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../img/clear.svg";
import { useContext } from "react";
import { listCartContext } from "..//components item//ProviderContextCart"
import { controllerShowCart } from "./ContextCart";

const ContainerCart = () => {

    const { cartShow, setCartShow } = useContext(controllerShowCart)
    const { listCart, clearCart } = useContext(listCartContext)

    const style ={
        display: cartShow
    }

    const closeCart = () => {
        setCartShow ( (cartShow === "none") ? "flex" : "none" )
    }


    return(
        <div className="cart" style={style}>

            <div className="cerrar">
                <button className="close" onClick={closeCart}>
                    <img src={close} alt="cerrar carrito"></img>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart?.length === 0) ? <span className="emptyCart">Tu carrito esta vacio</span>
                    : listCart?.map( product => (
                        <ItemCart
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.imageProduct.firstImage}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    ))
                }

            </div>

            <div className="TerminarCompra">
                <button className="terminar">Terminar Compra</button>

                <button className="clear" onClick={clearCart}>
                    <img src={clear} alt="vaciar carrito"></img>
                </button>
            </div>
        
        </div>
    )
}

export default ContainerCart;