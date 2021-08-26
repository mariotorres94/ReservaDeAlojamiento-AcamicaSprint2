import React from 'react';
import { ListaHoteles } from '../ListaHoteles/ListaHoteles';

export const Hotel = ({ filtro }) => {
    return (
        <main className="main main__contenedor">
            <div className="main__contenido">
                {
                    filtro.map((hotel, id) => {
                        return (
                            <ListaHoteles
                                key={id}
                                slug={hotel.slug}
                                name={hotel.name}
                                photo={hotel.photo}
                                description={hotel.description}
                                availabilityFrom={hotel.availabilityFrom}
                                availabilityTo={hotel.availabilityTo}
                                rooms={hotel.rooms}
                                city={hotel.city}
                                country={hotel.country}
                                price={hotel.price}
                                filtro={filtro}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}