import React from 'react';
import Frown from '../../icons/frown-solid.svg';

export const Mensaje = () => {
    return (
        <div className="background__mensaje">
            <img src={Frown} alt="Frown" />
            <p>Lo sentimos, no hay ningun hotel con los filtros seleccionados</p>
        </div>
    )
}