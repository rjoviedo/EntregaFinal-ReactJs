import ItemListContainer from "../ItemListContainer";
import CartWidget from "../CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";
 


const NavBar = () => {
    return (
        <ContextCart>
            <header>
                <div className="containerBrand">

                </div>

                <nav className="containerItemList">
                    <ItemListContainer
                        itemUno = "Home"
                        itemDos = "Mesas"
                        itemTres = "Sillones"
                        itemCuatro = "Sommiers"
                        itemCinco = "Contacto"
                    />

                </nav>

                <div className="containerCart">
                    <CartWidget />


                </div>

                <ContainerCart />
            </header>
        </ContextCart>
    )
}

export default NavBar;