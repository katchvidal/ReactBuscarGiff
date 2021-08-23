import React from 'react'

//  Recibimos toda la data del GiffGrid -> En este Componente ya tenemos toda la data para utilizarla 
export const GifGridItem = ( { title, imagen } ) => {

    return (

        <>



                <div className="card">
                    <img src={ imagen } className="card-img-top" alt={ title } ></img>
                    <div className="card-body">
                    <h5 className="card-title"> { title } </h5>

                    </div> 
                </div>


        </>

    )


}
