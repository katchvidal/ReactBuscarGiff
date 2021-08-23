import React, { useState } from 'react'
import '../index.css'
import PropTypes from 'prop-types';

//  Componente Hijo -> Aqui Manejaremos el Input del formulario -> 
    //  1. Evitar que la Pagina Recargue
    //  2. Atrapar toda la informacion que el usuario digite en la caja del input
export const AddCategory = ( { setTermino } ) => {

    const initialState = '';

    const [inputValue, setinputValue] = useState(initialState)

    //  Recibir los datos que el usuario digite en el input
    const ValordelInput = ( e ) => {

        setinputValue( e.target.value )
    }

    //  Controlar el Enter emitido del teclado
    const ValorEnter = ( e ) =>{

        //  Evita que la pagina recargue cuando se envie un formulario
        e.preventDefault()

        //  Si no se escribe por lo menos dos letras no se realiza el enter 
        if ( inputValue.trim().length > 2 ){

            //  Actualizacion de la categorias -> Categorias + Nuevo Valor Digitado por el Usuario 
            setTermino( TerminosAnteriores  => [ inputValue, ...TerminosAnteriores]);

            //  Resetear Caja del Input 
            setinputValue( '' )

            
        }

    }

    return (

        <>

            <h1> Buscar: { inputValue }  </h1>

            <form onSubmit={ ValorEnter }>

                <input 
                type="text"
                placeholder="Buscar..."
                value = { inputValue }
                onChange={ ValordelInput }
                >
                </input>

            </form>

        </>

    )
}

//  Value -> Valor inicial como un placeHolder
// Onchange -> Recibir el valor que se digite en el input 


// La Funcion de Actualizacion de Categorias es requerida
AddCategory.propTypes = {

    setTermino: PropTypes.func.isRequired

  };