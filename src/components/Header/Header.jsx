import React from 'react';

export const Header = ({ fechaInicio, fechaFin, pais, precio, tamaño }) => {
    // /*Fecha Actual*/
    const fechaActual = new Date();
    const op = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let actual = fechaActual.toLocaleDateString('es-ES', op);
    /*Fecha Desde*/
    const fechaDesde = new Date(fechaInicio + "T00:00:00");
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let desde = fechaDesde.toLocaleDateString('es-ES', options);
    console.log(desde);
    /*Fecha Hasta */
    const fechaHasta = new Date(fechaFin + "T00:00:00");
    const options1 = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let hasta = fechaHasta.toLocaleDateString('es-ES', options1);
    /*************************************************************************************/
    if (desde === "Invalid Date") {
        desde = `${actual}`;
    }
    /*************************************************************************************/
    let mensajeActual = `Desde el ${desde}`
    let mensaje = ``
    if (fechaInicio !== "" || fechaFin !== "") {
        if (fechaFin) {
            mensaje += mensajeActual + ` Hasta el ${hasta}`
        } else {
            mensaje += mensajeActual
        }
    } if (pais !== 'todos') {
        mensaje += ` en ${pais} `
    } if (precio !== 'todos') {
        mensaje += ` de precios ${precio} `
    } if (tamaño !== 'todos') {
        mensaje += ` y de tamaño ${tamaño} `
    }
    return (
        <div className="contenido__header">
            <h1>Hoteles</h1>
            {
                (fechaInicio || fechaFin) ? <p>{mensaje}</p> : <p>{mensajeActual}</p>
            }
        </div>
    )
}