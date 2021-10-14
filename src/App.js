import './App.css';
import React, { useState, useEffect } from "react";
import Unidades from './middleware/Unidades';
import ConfiguracionesUnidades from './middleware/ConfiguracionesUnidades';
import Chart from './middleware/chart';



var unidades = new Unidades();
var usr_unit = new ConfiguracionesUnidades();
var old_unit = new ConfiguracionesUnidades();


var eje_x = [30, 35, 40, 58, 80, 81, 90];
var eje_y = [65, 59, 80, 81, 56, 55, 40];


function App() {
  usr_unit.loadConfig();
  console.log(usr_unit);

  const [kilometro, setKilometro] = useState(0);
  const [metro, setMetro] = useState(0);
  const [centimetro, setCentimetro] = useState(0);
  const [milimetro, setMilimetro] = useState(0);
  const [micrometro, setMicrometro] = useState(0);
  const [nanometro, setNanometro] = useState(0);
  const [milla, setMilla] = useState(0);
  const [yarda, setYarda] = useState(0);
  const [pie, setPie] = useState(0);
  const [pulgada, setPulgada] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);
  const [valor, setValor] = useState(0);

  const [tipo2, setTipo2] = useState(1);
  const [valor2, setValor2] = useState(0);
  const [total2, setTotal2] = useState(0);

  const [tipo3, setTipo3] = useState(1);
  const [valor3, setValor3] = useState(0);
  const [total3, setTotal3] = useState(0);


  useEffect(() => {
    setKilometro(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "Km"));
    setMetro(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "m"));
    setCentimetro(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "cm"));
    setMilimetro(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "mm"));
    setMicrometro(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "um"));
    setNanometro(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "nm"));
    setMilla(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "mil"));
    setYarda(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "yrd"));
    setPie(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "ft"));
    setPulgada(unidades.transformar_unidad_longitud(valor, usr_unit.ds_Longitud, "in"));
  }, [valor, total, tipo], [valor2,total2, tipo2], [valor3, total3, tipo3]);

  function handleTotalChange(e){
    if (!isNaN(e.target.value)) {
      setValor(e.target.value);
      console.log(valor);
      console.log(usr_unit.ds_Longitud);
      console.log(old_unit.ds_Longitud);
      setTotal(e.target.value);
    }
  };
  function handleTotalChange2(e){
    if (!isNaN(e.target.value)) {
      setValor2(e.target.value);
      console.log(valor2);
      console.log(usr_unit.ds_Presion);
      console.log(old_unit.ds_Presion);
      setTotal2(e.target.value);
    }
  };
  function handleTotalChange3(e){
    if (!isNaN(e.target.value)) {
      setValor3(e.target.value);
      console.log(valor3);
      console.log(usr_unit.ds_Temperatura);
      console.log(old_unit.ds_Temperatura);
      setTotal3(e.target.value);
    }
  };
  
  function changeEvent(event){
    setTipo(event.target.value);
    old_unit.ds_Longitud = usr_unit.ds_Longitud;
    usr_unit.ds_Longitud = event.target.value;
    console.log(total);
    setValor(unidades.transformar_unidad_longitud(total,old_unit.ds_Longitud, usr_unit.ds_Longitud));
    setTotal(unidades.transformar_unidad_longitud(total,old_unit.ds_Longitud, usr_unit.ds_Longitud));
    console.log(old_unit.ds_Longitud +" -> " + usr_unit.ds_Longitud);
    console.log(unidades.transformar_lista_longitud(eje_x, old_unit.ds_Longitud, usr_unit.ds_Longitud))
    handleTotalChange(event);
  }

  function changeEvent2(event){
    setTipo2(event.target.value);
    console.log(event.target.value)
    old_unit.ds_Presion = usr_unit.ds_Presion;
    usr_unit.ds_Presion = event.target.value;
    console.log(total2);
    setTotal2(unidades.transformar_unidad_presion(total2,old_unit.ds_Presion, usr_unit.ds_Presion));
    console.log(old_unit.ds_Presion +" -> "+usr_unit.ds_Presion);
    console.log(unidades.transformar_lista_presion(eje_y, old_unit.ds_Presion, usr_unit.ds_Presion))
    handleTotalChange2(event);
  }

  function changeEvent3(event){
    setTipo3(event.target.value);
    console.log(event.target.value)
    old_unit.ds_Temperatura = usr_unit.ds_Temperatura;
    usr_unit.ds_Temperatura = event.target.value;
    console.log(total3);
    setTotal3(unidades.transformar_unidad_temperatura(total3,old_unit.ds_Temperatura, usr_unit.ds_Temperatura));
    console.log(old_unit.ds_Temperatura +" -> "+ usr_unit.ds_Temperatura);
  }

  return (
    <div className="App">
      <h1>Convertidor de unidades</h1>

      <p>Kilometro: {kilometro}</p>
      <p>Metro: {metro}</p>
      <p>Centimetro: {centimetro}</p>
      <p>Milimetro: {milimetro}</p>
      <p>Mictometro: {micrometro}</p>
      <p>Nanometro: {nanometro}</p>
      <p>Milla: {milla}</p>
      <p>Yarda: {yarda}</p>
      <p>Pie: {pie}</p>
      <p>Pulgada: {pulgada}</p>

      <hr/>

      <h3>{total+" "+ usr_unit.ds_Longitud}</h3>

      <select selectedindex = {usr_unit.ds_Longitud} onChange={event => changeEvent(event)} value = {usr_unit.ds_Longitud}>
        <option value={"Km"}>km</option>
        <option value={"m"}>m</option>
        <option value={"cm"}>cm</option>
        <option value={"mm"}>mm</option>
        <option value={"um"}>um</option>
        <option value={"nm"}>nm</option>
        <option value={"mil"}>mil</option>
        <option value={"yrd"}>yrd</option>
        <option value={"ft"}>ft</option>
        <option value={"in"}>in</option>
      </select>
      <input onChange={handleTotalChange} value={valor} />

      <h3>{total2 +" "+ usr_unit.ds_Presion}</h3>
      <select onChange={event => changeEvent2(event)} value = {usr_unit.ds_Presion}>
        <option value={unidades.ds_Presion["PSI"]}>PSI</option>
        <option value={unidades.ds_Presion["atm"]}>atm</option>
        <option value={unidades.ds_Presion["Kg/cm2"]}>Kg/cm2</option>
        <option value={unidades.ds_Presion["mca"]}>mca</option>
        <option value={unidades.ds_Presion["bar"]}>bar</option>
        <option value={unidades.ds_Presion["Pa"]}>Pa</option>
      </select>
      <input onChange={handleTotalChange2} value={total2} />

      <h3>{total3 +" °"+ usr_unit.ds_Temperatura}</h3>
      <select  onChange={event => changeEvent3(event)} value = {usr_unit.ds_Temperatura}>
        <option value={unidades.ds_Temperatura["F"]}>F</option>
        <option value={unidades.ds_Temperatura["C"]}>C</option>
        <option value={unidades.ds_Temperatura["K"]}>K</option>
      </select>
      <input onChange={handleTotalChange3} value={total3} />
      <hr/>

      <Chart/>
    </div>
  );
}


export default App;
