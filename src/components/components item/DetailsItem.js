import Image from "./Image";
import Description from "./Description";
import "..//..//style/detailsItem.css";
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./Buttondetalles";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => { 

        setDatos([])
        fetchSimulation(productos.filter( flt => flt.id === parseInt(idItem)), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])

    return(
        <div className="detailsItem">
            {
                datos.map( items => (
                    <>
                    <div className="containerLeft">
                        <Image
                            imagen={items.imageProduct.firstImage}
                        />
                    </div>

                    <div className="containerRigth">
                        <Description
                            tile= {items.title}
                            parrafo= {items.description}
                            cantidad= {items.stock}
                            precio={items.price} 
                        />
                        <div className="buttons">
                            <AddCantCart
                                cant={5}
                            />

                            <ButtonDetalles
                                txt="Agregar al carrito"
                            />
                        </div>
                    </div>
                    </>
                ))
            }
        </div>
    )


}

export default DetailsItem;