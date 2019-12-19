import React from 'react';
import image from "../../assets/images/404.svg"

const NaoEncontrado = () => {
    return(
        <div class="container mt-5">
            <img className="img-fluid" src={image} alt="imagem 404"/>
        </div>
    )
}
export default NaoEncontrado