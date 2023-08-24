import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/productos";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "../../style/containerCardItems.css";
import { useParams } from "react-router-dom";


const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState([]);

    let {idCategory} = useParams()

    useEffect(() => {
        if(idCategory === undefined){
            fetchSimulation(productos, 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else {
            fetchSimulation(productos.filter(filter => filter.type === idCategory ), 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }
    }, [idCategory])


    return(
        <div className="containerCardItems">
            {
                datos.map(product => (
                    <CardItem
                        key={product.id}
                        id={product.id}
                        imagen={product.imageProduct.firstImage}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price} 
                    />
                ))
            }
        
        </div>
    )
}

export default ContainerCardItems;