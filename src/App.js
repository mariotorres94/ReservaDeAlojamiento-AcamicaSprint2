import { Header } from "./components/Header/Header";
import { Filters } from "./components/Filtros/Filters";
import { Hotel } from "./components/Hotel/Hotel";
import { useState } from "react";
import { hotelsData } from "./data";
import { Mensaje } from "./components/Mensaje/Mensaje";

function App() {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [pais, setPais] = useState('todos');
  const [precio, setPrecio] = useState('todos');
  const [tamaño, setTamaño] = useState('todos');

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  }

  let isEmpty;
  const filtrarLista = () => {
    let listaFiltrada = hotelsData;
    if (pais !== 'todos') {
      listaFiltrada = listaFiltrada.filter((p) => {
        return p.country.toUpperCase() === pais.toUpperCase();
      })
      isEmpty = listaFiltrada.length;
    }
    if (precio !== 'todos') {
      listaFiltrada = listaFiltrada.filter((pre) => {
        return pre.price.toString() === precio.toString();
      })
      isEmpty = listaFiltrada.length;
    }
    if (tamaño !== 'todos') {
      listaFiltrada = listaFiltrada.filter((t) => {
        if (tamaño === 'pequeño') {
          return t.rooms <= 10;
        } else if (tamaño === 'mediano') {
          return t.rooms > 10 && t.rooms <= 20
        } else {
          return t.rooms > 20
        }
      })
      isEmpty = listaFiltrada.length;
    }
    if (fechaInicio && fechaFin) {
      let fechaDesde = Math.floor(new Date(fechaInicio + "T00:00:00").getTime() / 1000);
      let fechaHasta = Math.floor(new Date(fechaFin + "T00:00:00").getTime() / 1000);

      listaFiltrada = listaFiltrada.filter((f) => {
        let listaFechaFrom = formatDate(new Date(f.availabilityFrom));
        let fechaInicioHotel = Math.floor(new Date(listaFechaFrom + "T00:00:00").getTime() / 1000);
        let listaFechaTo = formatDate(new Date(f.availabilityTo));
        let fechaFinHotel = Math.floor(new Date(listaFechaTo + "T00:00:00").getTime() / 1000);
        return fechaInicioHotel >= fechaDesde && fechaFinHotel <= fechaHasta;
      })
      isEmpty = listaFiltrada.length;
    }
    return listaFiltrada;
  }

  let lista = filtrarLista();

  const limpiarFiltros = () => {
    setFechaInicio("");
    setFechaFin("");
    setPais("todos");
    setPrecio("todos");
    setTamaño("todos");
  }
  return (
    <div className="App">
      <Header
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
        pais={pais}
        precio={precio}
        tamaño={tamaño}
      />
      <Filters
        fechaInicio={fechaInicio}
        setFechaInicio={setFechaInicio}
        fechaFin={fechaFin}
        setFechaFin={setFechaFin}
        pais={pais}
        setPais={setPais}
        precio={precio}
        setPrecio={setPrecio}
        tamaño={tamaño}
        setTamaño={setTamaño}
        limpiarFiltros={limpiarFiltros}
        formatDate={formatDate}
      />
      <main className="main main__contenedor">
        {
          isEmpty === 0 ? <Mensaje /> : <Hotel filtro={lista} />
        }
      </main>
    </div>
  );
}

export default App;
