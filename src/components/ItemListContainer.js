import { Link } from "react-router-dom"


const ItemListContainer = (props) => {
    return(
        <ul>
            
            <li>
                <Link to="/">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/mesa">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/sillon">
                {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/sommier">
                {props.itemCuatro}
                </Link>
            </li>
            <li>
                <Link to="category/contacto">
                {props.itemCinco}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;