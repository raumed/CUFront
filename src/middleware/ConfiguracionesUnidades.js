import request from "superagent";

class Configuraciones_Unidades {
    ds_Longitud;
    ds_Presion ;
    ds_Temperatura; 

  // Constructor de la clase, por defecto establece las unidades en el sistema de unidades de campo
    constructor(){
      this.ds_Longitud = "ft";
      this.ds_Presion = "PSI";
      this.ds_Temperatura = "F";
    }

    // Funcion encargada de conectarse con la API y leer las configuraciones del usuario
    loadConfig(user_id){
        (async () => {
            try {
              const res = await request.get('http://localhost:3000/api/unit_config/'+ user_id.toString());
              var response = JSON.parse(res.text);
              for(let item of response){
                this.ds_Longitud = item.ds_lenght;
                this.ds_Presion = item.ds_pressure;
                this.ds_Temperatura = item.ds_temperature;
              }
            } catch (err) {
              console.error(err);
            }
          })()
    }

    // Funcion encargada de conectarse con la API y modificar las configuraciones del usuario
    saveConfig(user_id){
      (async () => {
        try {
          const res = await request.put('http://localhost:3000/api/unit_config/'+ user_id.toString())
          .set('Content-Type', 'application/json')
          .send({
            ds_lenght: this.ds_Longitud,
            ds_pressure: this.ds_Presion,
            ds_temperature: this.ds_Temperatura
          });
          console.log(res.status)
        } catch (err) {
          console.error(err);
        }
      })();
    }
}

export default Configuraciones_Unidades;