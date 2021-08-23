

export const getGrid = async( termino ) => {

    //  URL Para Peticion
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( termino ) }&limit=10&api_key=ToeM5FLqcFLd7vUQpCChh2AAuG5b8Huo`
    
    //  Peticion Fetch -> Require una API URL 
    const resp = await fetch( url )
    
    //  Respuesta -> Contenido 
    const { data } = await resp.json()

    //  Retornar solo lo necesario del objeto JSON
    const gifs = data.map( img => {

        return {
            id : img.id,
            title : img.title,
            imagen : img.images.downsized_medium.url
        }

    })

    return gifs

}