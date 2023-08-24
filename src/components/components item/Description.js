const Description = (props) => {
    return(
        <div className="cardDescription">
          
            <div className="description">
                <span className="descriptionTitle">Descripcion:</span>
                <p className="parrafo">
                    {props.parrafo}
                </p>
            </div>
        
            <span className="cant">
                Cantidad: {props.cantidad}     
            </span>

            <span className="precio">
                ${props.precio}
            </span>
        </div>         
    )
}

export default Description;