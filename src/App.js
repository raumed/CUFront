import './App.css';
import React, {useState, useEffect} from "react";
import Unidades from './middleware/Unidades';
import ConfiguracionesUnidades from './middleware/ConfiguracionesUnidades';
import Chart from './middleware/chart';



var unidades = new Unidades();
var usr_unit = new ConfiguracionesUnidades();
var old_unit = new ConfiguracionesUnidades();
usr_unit.loadConfig(1);

var x = [30, 35, 40, 58, 80, 81, 90];
var y = [65, 59, 80, 81, 56, 55, 13];


function App() {  
    
  const [eje_x, setEje_x] = useState(x);
  const [eje_y, setEje_y] = useState(y);
  const [tipo, setTipo] = useState(0);
  const [total, setTotal] = useState(0);
  const [valor, setValor] = useState(0);

  const [tipo2, setTipo2] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [total2, setTotal2] = useState(0);

  const [tipo3, setTipo3] = useState(0);
  const [valor3, setValor3] = useState(0);
  const [total3, setTotal3] = useState(0);

  
  const [valor4, setValor4] = useState(0);

  

  useEffect(() => {
                  setTipo(usr_unit.ds_Longitud);
                  setTipo2(usr_unit.ds_Presion);
                  setTipo3(usr_unit.ds_Temperatura);
                  setEje_x(unidades.transformar_lista_longitud(x, old_unit.ds_Longitud, usr_unit.ds_Longitud));
                  setEje_y(unidades.transformar_lista_presion(y, old_unit.ds_Presion, usr_unit.ds_Presion));
                  },[tipo, tipo2, valor2, tipo3, valor3]);

  

  function handleTotalChange(e){
    if (!isNaN(e.target.value)) {
      if(e.target.id === "input1"){ 
        setValor(e.target.value);
        setTotal(e.target.value);
    }else(setValor4(e.target.value))
    }
  };
  function handleTotalChange2(e){
    if (!isNaN(e.target.value)) {
      setValor2(e.target.value);
      setTotal2(e.target.value);
    }
  };
  function handleTotalChange3(e){
    if (!isNaN(e.target.value)) {
      setValor3(e.target.value);
      setTotal3(e.target.value);
    }
  };
  
  function changeEvent(event){
    setTipo(event.target.value);
    x = unidades.transformar_lista_longitud(x, old_unit.ds_Longitud, usr_unit.ds_Longitud);
    old_unit.ds_Longitud = usr_unit.ds_Longitud;
    usr_unit.ds_Longitud = event.target.value;
    setValor(unidades.transformar_unidad_longitud(total,old_unit.ds_Longitud, usr_unit.ds_Longitud));
    setTotal(unidades.transformar_unidad_longitud(total,old_unit.ds_Longitud, usr_unit.ds_Longitud));
    setValor4(unidades.transformar_unidad_longitud(valor4,old_unit.ds_Longitud, usr_unit.ds_Longitud));
    usr_unit.saveConfig("1");
  }

  function changeEvent2(event){
    setTipo2(event.target.value);
    y = unidades.transformar_lista_longitud(x, old_unit.ds_Longitud, usr_unit.ds_Longitud);
    old_unit.ds_Presion = usr_unit.ds_Presion;
    usr_unit.ds_Presion = event.target.value;
    setTotal2(unidades.transformar_unidad_presion(total2,old_unit.ds_Presion, usr_unit.ds_Presion));
    usr_unit.saveConfig("1");
  }

  function changeEvent3(event){
    setTipo3(event.target.value);
    old_unit.ds_Temperatura = usr_unit.ds_Temperatura;
    usr_unit.ds_Temperatura = event.target.value;
    setTotal3(unidades.transformar_unidad_temperatura(total3,old_unit.ds_Temperatura, usr_unit.ds_Temperatura));
    usr_unit.saveConfig("1");
  }

  const app = (
    <div className="App">
      <h1>Convertidor de unidades</h1>

      <h3>{total+" "+ usr_unit.ds_Longitud}</h3>

      <select  onChange={event => changeEvent(event)} value = {usr_unit.ds_Longitud}>
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
      <input id = "input1" onChange={handleTotalChange} value={valor}/>

      <select  onChange={event => changeEvent(event)} value = {usr_unit.ds_Longitud}>
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
      <input id = "input4" onChange={handleTotalChange} value={valor4}/>

      <h3>{total2 +" "+ usr_unit.ds_Presion}</h3>
      <select onChange={event => changeEvent2(event)} value = {usr_unit.ds_Presion}>
        <option value={unidades.ds_Presion["PSI"]}>PSI</option>
        <option value={unidades.ds_Presion["atm"]}>atm</option>
        <option value={unidades.ds_Presion["Kg/cm2"]}>Kg/cm2</option>
        <option value={unidades.ds_Presion["mca"]}>mca</option>
        <option value={unidades.ds_Presion["bar"]}>bar</option>
        <option value={unidades.ds_Presion["Pa"]}>Pa</option>
      </select>
      <input id = "input2" onChange={handleTotalChange2} value={total2} />

      <h3>{total3 +" °"+ usr_unit.ds_Temperatura}</h3>
      <select  onChange={event => changeEvent3(event)} value = {usr_unit.ds_Temperatura}>
        <option value={unidades.ds_Temperatura["F"]}>F</option>
        <option value={unidades.ds_Temperatura["C"]}>C</option>
        <option value={unidades.ds_Temperatura["K"]}>K</option>
      </select>
      <input id = "input3" onChange={handleTotalChange3} value={total3} />
      <hr/>
      <Chart id = "Chart" labels = {eje_x} data = {eje_y} label ={usr_unit.ds_Longitud +" x "+usr_unit.ds_Presion}/>
      
    </div>
  );
  
  return(app);
}
export default App;
