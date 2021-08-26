import React from 'react';
import swal from 'sweetalert';

export const Filters = ({ fechaInicio, setFechaInicio, fechaFin, setFechaFin, pais, setPais, precio, setPrecio, tamaño, setTamaño, limpiarFiltros, formatDate }) => {
    const seleccionarFechaInicio = (evento) => {
        const fechaInicioSeleccionado = evento.target.value;
        let desde = Math.floor(new Date(fechaInicioSeleccionado + "T00:00:00").getTime() / 1000);
        let hoy = formatDate(new Date());
        let h = Math.floor(new Date(hoy + "T00:00:00").getTime() / 1000);
        if (desde < h) {
            swal({
                title: `La fecha ${fechaInicioSeleccionado} no puede ser menor a la fecha del día de ${hoy}`,
                icon: "error"
            })
        } else {
            setFechaInicio(fechaInicioSeleccionado)
        }
    }
    const seleccionarFechaFin = (evento) => {
        const fechaFinSeleccionado = evento.target.value;
        let hasta = Math.floor(new Date(fechaFinSeleccionado + "T00:00:00").getTime() / 1000);
        let hoy = formatDate(new Date());
        let h = Math.floor(new Date(hoy + "T00:00:00").getTime() / 1000);
        if (hasta < h) {
            swal({
                title: `La fecha ${fechaFinSeleccionado} no puede ser menor ${hoy}`,
                icon: "error"
            })
        } else {
            setFechaFin(fechaFinSeleccionado)
        }
    }
    const seleccionarPais = (evento) => {
        const paisSeleccionado = evento.target.value;
        // console.log(evento.target.value)
        setPais(paisSeleccionado)
    }
    const seleccionarPrecio = (evento) => {
        const precioSeleccionado = evento.target.value;
        setPrecio(precioSeleccionado);
    }
    const seleccionarTamaño = (evento) => {
        const tamañoSeleccionado = evento.target.value;
        setTamaño(tamañoSeleccionado)
    }
    return (
        <div className="contenedor__filtros">
            <div className="contenido__filtros">
                <div className="date">
                    <input onChange={seleccionarFechaInicio} value={fechaInicio} type="date" />
                </div>
                <div className="date">
                    <input onChange={seleccionarFechaFin} value={fechaFin} type="date" />
                </div>
                <div className="select">
                    <select onChange={seleccionarPais} value={pais} name="" id="">
                        <option value="todos">Todos</option>
                        <option value="argentina">Argentina</option>
                        <option value="brasil">Brasil</option>
                        <option value="chile">Chile</option>
                        <option value="uruguay">Uruguay</option>
                    </select>
                </div>
                <div className="select">
                    <select onChange={seleccionarPrecio} value={precio} name="" id="">
                        <option value="todos">Todos</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                </div>
                <div className="select">
                    <select onChange={seleccionarTamaño} value={tamaño} name="" id="">
                        <option value="todos">Todos</option>
                        <option value="pequeño">Pequeño</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>
                <div onClick={limpiarFiltros} className="boton__limpiar">
                    <button>Limpiar</button>
                </div>
            </div>
        </div>
    )
}