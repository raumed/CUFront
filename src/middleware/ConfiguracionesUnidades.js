import request from "superagent";

class Configuraciones_Unidades {
    ds_Longitud;
    ds_Presion ;
    ds_Temperatura; 

    constructor(){
        this.ds_Longitud = "ft";
        this.ds_Presion = "PSI";
        this.ds_Temperatura = "F";
    }

    /* constructor(ds_Longitud,ds_Presion, ds_Temperatura){
        this.ds_Longitud = ds_Longitud;
        this.ds_Presion = ds_Presion;
        this.ds_Temperatura = ds_Temperatura;
    } */
    loadConfig(){
        (async () => {
            try {
              const res = await request.get('http://localhost:3000/api/unit_config/1');
              var response = JSON.parse(res.text);
              for(let item of response){
                this.ds_Longitud = item.ds_lenght;
                this.ds_Presion = item.ds_pressure;
                this.ds_Temperatura = item.ds_temperature;
                console.log(this);
              }
            } catch (err) {
              console.error(err);
            }
          })();
    }

    saveConfig(){

    }
}

export default Configuraciones_Unidades;