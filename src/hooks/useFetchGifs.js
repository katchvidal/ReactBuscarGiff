import { useState, useEffect } from "react"
import { getGrid } from "../helpers/GetGrid"


//  Hook que nos ayuda  con el Fetch de busqueda de Gifts 
//  Recibiremos el Termino de Busqueda de Add Category pero dentro del componente del get Grid 
export const useFetchGifs = ( termino ) => {

    //  Estado Inicial
    const [state, setstate] = useState({
        data : [],
        loading : true
    })


    //  Efecto para evitar que se recargue el formulario si no se actualiza el termino 
    useEffect(() => {
        //  Usamos el fetch de busqueda de Gifts
        getGrid( termino )
            //  Resolvemos la Promesa retornando la actualizacion de termino de busqueda
            .then( imagen => {
                    //  En este Punto ya se resolvio la Promesa y el argumento( imagen ) -> Contiene toda la data
                    //console.log( imagen )
                setstate({
                    data : imagen,
                    loading : false
                })
            })
    }, [ termino ])


    return state

}



//  Este Hook Va ligado al Fetch API Busqueda de GIFS -> getGrid()
