import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

//  Aqui manejaremos toda la informacion que recibiremos del FETCH API -> 
    //  1.  Recibir del Add Category - el termino de busqueda el cual el fetch API  hara la busqueda 
export const GiffGrid = ( { termino } ) => {

    //  Aqui Mandos a llamar el Hook que tiene el manejo del FetchApi -> use Fetch Gifs 
    const { loading, data : images  } =  useFetchGifs( termino )
    
    return (

        <> 

            <h2> { termino } </h2>

            { loading && <p> Loading ... </p> }

                <div className='container'>

                


                    { 
                        images.map( ( imagen  ) => (

                            <GifGridItem key={ imagen.id } {...imagen} />

                        ))
                        
                    }




                </div>
                        
        </>

    )

}

