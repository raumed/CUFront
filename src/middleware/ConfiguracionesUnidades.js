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

    saveConfig(){

    }
}

export default Configuraciones_Unidades;