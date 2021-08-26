import React from 'react';
import Map from '../../icons/map-marker-alt-solid.svg';
import Bed from '../../icons/bed-solid.svg';
import Dollar from '../../icons/dollar-sign-solid.svg';
import DollarGray from '../../icons/dollar-sign-solid-gray.svg';

export const ListaHoteles = ({ slug, name, photo, description, availabilityFrom, availabilityTo, rooms, city, country, price }) => {
    /*Fecha Desde*/
    const fechaDesde = new Date(availabilityFrom);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const desde = fechaDesde.toLocaleDateString('es-ES', options);
    /*Fecha Hasta */
    const fechaHasta = new Date(availabilityTo);
    const options1 = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const hasta = fechaHasta.toLocaleDateString('es-ES', options1);
    return (
        <div className="border__main">
            <div className="background__main">
                <div className="contenido">
                    <div className="contenido__card">
                        <div className="main__imagen">
                            <img src={photo} alt={slug} />
                        </div>
                        <h3>{name}</h3>
                        <div className="main__fecha">
                            <p>Desde el {desde}</p>
                            <p>Hasta el {hasta}</p>
                        </div>
                        <div className="main__descripcion">
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="card__localizacion">
                        <div className="card__localizacion--img">
                            <img src={Map} alt="" />
                        </div>
                        <p>{city}, {country}</p>
                    </div>
                    <div className="flex__card">
                        <div className="card__bed card__localizacion">
                            <div className="card__localizacion--img">
                                <img src={Bed} alt="" />
                            </div>
                            <p>{rooms} Habitaciones</p>
                        </div>
                        <div className="card__dollar card__localizacion">
                            <span>
                                <img src={price >= 1 ? Dollar : DollarGray} alt="" />
                            </span>
                            <span>
                                <img src={price >= 2 ? Dollar : DollarGray} alt="" />
                            </span>
                            <span>
                                <img src={price >= 3 ? Dollar : DollarGray} alt="" />
                            </span>
                            <span>
                                <img src={price >= 4 ? Dollar : DollarGray} alt="" />
                            </span>
                        </div>
                    </div>
                    <button>Reservar</button>
                </div>
            </div>
        </div>
    )
}

// return (
//     <div className="main__contenido">
//         {
//             filtro.map((hotel) => {
//                 /*Fecha Desde*/
//                 const fechaDesde = new Date(hotel.availabilityFrom);
//                 const options = {
//                     weekday: 'long',
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                 };
//                 const desde = fechaDesde.toLocaleDateString('es-ES', options);
//                 /*Fecha Hasta */
//                 const fechaHasta = new Date(hotel.availabilityTo);
//                 const options1 = {
//                     weekday: 'long',
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                 };
//                 const hasta = fechaHasta.toLocaleDateString('es-ES', options1);
//                 return (
//                     <div className="border__main">
//                         <div className="background__main">
//                             <div className="contenido">
//                                 <div className="contenido__card">
//                                     <div className="main__imagen">
//                                         <img src={hotel.photo} alt={hotel.slug} />
//                                     </div>
//                                     <h3>{hotel.name}</h3>
//                                     <div className="main__fecha">
//                                         <p>Desde el {desde}</p>
//                                         <p>Hasta el {hasta}</p>
//                                     </div>
//                                     <div className="main__descripcion">
//                                         <p>{hotel.description}</p>
//                                     </div>
//                                 </div>
//                                 <div className="card__localizacion">
//                                     <div className="card__localizacion--img">
//                                         <img src={Map} alt="" />
//                                     </div>
//                                     <p>{hotel.city}, {hotel.country}</p>
//                                 </div>
//                                 <div className="flex__card">
//                                     <div className="card__bed card__localizacion">
//                                         <div className="card__localizacion--img">
//                                             <img src={Bed} alt="" />
//                                         </div>
//                                         <p>{hotel.rooms} Habitaciones</p>
//                                     </div>
//                                     <div className="card__dollar card__localizacion">
//                                         <span>
//                                             <img src={hotel.price >= 1 ? Dollar : DollarGray} alt="" />
//                                         </span>
//                                         <span>
//                                             <img src={hotel.price >= 2 ? Dollar : DollarGray} alt="" />
//                                         </span>
//                                         <span>
//                                             <img src={hotel.price >= 3 ? Dollar : DollarGray} alt="" />
//                                         </span>
//                                         <span>
//                                             <img src={hotel.price >= 4 ? Dollar : DollarGray} alt="" />
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <button>Reservar</button>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })
//         }
//     </div>
// )