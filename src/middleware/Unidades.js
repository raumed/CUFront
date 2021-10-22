
class Unidades {
    ds_Longitud;
    ds_Presion ;
    ds_Temperatura;

    constructor(){
        this.ds_Longitud = new Map([
            ["Km", 0.0003048],
            ["m", 0.3048],
            ["cm", 30.48],
            ["mm", 304.8],
            ["um", 304800],
            ["nm", 304800000],
            ["mil", 0.000189394],
            ["yrd", 0.333333],
            ["ft", 1],
            ["in", 12]]);
        
        this.ds_Presion = new Map([
            ["PSI", 1],
            ["atm", 0.068046],
            ["Kg/cm2", 0.070307],
            ["mca", 0.704],
            ["bar", 0.0689476],
            ["Pa",6894.76]]);
        
        this.ds_Temperatura = new Map([
            ["K", 255.928],
            ["C", -17.2222],
            ["F", 1]]);
    }

    transformar_unidad_longitud(valor,  unidad_inicio, unidad_fin){
        if ( unidad_inicio === unidad_fin){
            return valor
        }
        if(unidad_inicio === "ft"){
            return (valor * this.ds_Longitud.get(unidad_fin));
        }else{
            if(unidad_fin === "ft"){
                return (valor / this.ds_Longitud.get(unidad_inicio));
            }else{
                return((valor/this.ds_Longitud.get(unidad_inicio))* this.ds_Longitud.get(unidad_fin));
            }
        }
    }

    transformar_unidad_presion(valor,  unidad_inicio,  unidad_fin){
        if ( unidad_inicio === unidad_fin){
            return valor
        }
        if(unidad_inicio === "PSI"){
            return (valor * this.ds_Presion.get(unidad_fin));
        }else{
            if(unidad_fin === "PSI"){
                return (valor / this.ds_Presion.get(unidad_inicio));
            }else{
                return((valor/this.ds_Presion.get(unidad_inicio))* this.ds_Presion.get(unidad_fin));
            }
        }
    }

    transformar_unidad_temperatura(valor, unidad_inicio, unidad_fin){
        if ( unidad_inicio === unidad_fin){
            return valor;
        }
        if(unidad_inicio === "C"){
            if(unidad_fin === "K"){
                return(valor + 273.15);
            }else if(unidad_fin === "F"){
                return((valor*9/5) + 32);
            }
        }
        if(unidad_inicio === "K"){
            if(unidad_fin === "C"){
                return(valor - 273.15);
            }else if(unidad_fin === "F"){
                return(((valor - 273.15) * 9/5) + 32);
            }
        }
        if(unidad_inicio === "F"){
            if(unidad_fin === "C"){
                return((valor - 32)*5/9);
            }else if (unidad_fin === "K"){
                return(((valor - 32) * 5/9) + 273.15);
            }
        }
    }
    get_clave_longitud(valor){
        var key_list = this.ds_Longitud.keys();
        var value_list = this.ds_Longitud.values();
        for (const variable in value_list){
            if(valor === variable){
                return(key_list.next());
            }
            else{
                console.log(key_list.next());
            }
        }
    }
    transformar_lista_longitud(lista, unidad_inicio, unidad_fin){
        if ( unidad_inicio === unidad_fin){
            return lista
        }
        var listaFinal = [];
        lista.forEach(element =>{
            listaFinal.push(this.transformar_unidad_longitud(element, unidad_inicio, unidad_fin));
            });
        return(listaFinal);
    }
    
    transformar_lista_presion(lista, unidad_inicio, unidad_fin){
        if ( unidad_inicio === unidad_fin){
            return lista
        }
        var listaFinal = [];
        lista.forEach(element =>{
            element = this.transformar_unidad_presion(element, unidad_inicio, unidad_fin);
            listaFinal.push(element);
            });
        return(listaFinal);
    }

    transformar_lista_temperatura(lista, unidad_inicio, unidad_fin){
        if ( unidad_inicio === unidad_fin){
            return lista
        }
        var listaFinal = [];
        lista.forEach(element =>{
            element = this.transformar_unidad_temperatura(element, unidad_inicio, unidad_fin);
            listaFinal.push(element);
            });
        return(listaFinal);
    }
}

export default Unidades;