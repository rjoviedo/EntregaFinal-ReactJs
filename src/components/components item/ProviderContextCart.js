import { useState } from "react";
import { createContext } from "react";
import productos from "../../utils/productos";

export const listCartContext = createContext(null)

const ProviderContextCart = ( {children} ) => {

   const [ listCart, setListCart] = useState([])

   const addProduct = (id) => {

       const productAdd = productos.find(product => product.id === id);
       
       const productToMaintain = listCart.filter(product => product.id !== id);

       let add = true;
       for(let product of listCart) {
            if(product.id === id){
                let quantity = product.quantity;

                console.log()
                if(quantity < productAdd.stock){
                    const newQuantity = {...product, quantity: quantity + 1}
                    setListCart( [...productToMaintain, newQuantity] )

                }

                add = false;
                break;
            }
       }

       add && setListCart( [...productToMaintain, {...productAdd, quantity: 1 } ] )
    }
    

    const clearCart = () => {
        setListCart([])
    }

    const removeFromCart = (id) => {
        const updateList = listCart.filter(product => product.id !== id);
        setListCart(updateList);
    }

    return (
        <listCartContext.Provider value={ {removeFromCart, listCart, addProduct, clearCart}
}>
            {children}
        </listCartContext.Provider>
    );

}

export default ProviderContextCart