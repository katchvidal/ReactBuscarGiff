import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiffGrid } from './components/GiffGrid'
import './index.css'

export const GifExpertApp = () => {

    //  Valores Iniciales de la Aplicacion -> [] Arreglo Vacio 
    const initialState = []

    //  Estado -> Actualizacion del Estado -> Valor Inicial
    const [Termino, setTermino] = useState( initialState )

    return (

        <>
            <h1> Aplicacion de REACT  para Busqueda de Gifs con conexion a API</h1>

            <AddCategory setTermino={ setTermino } />

            { /*
                1. Componente del Input -> Agregar Termino de Busqueda
                2. Regresar un nuevo Arreglo [ ] 
              */ }

            <hr />
            <ol>
                {
                    Termino.map( termino  => (

                        <GiffGrid 
                        key={ termino } 
                        termino={ termino } 
                        />
                        
                    ))
                }
            </ol>
            
        </>

    )
}


// Para Comunicarnos de un componente a otro le podemos enviar el useState y poder atrapar informacion de un componente a otro