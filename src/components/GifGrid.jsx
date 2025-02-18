import { useFecthGifs } from "../hooks/useFecthGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( {category} ) => {

    const { images, isLoading} = useFecthGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {/* Forma de hacer un if ternario */}
            {/* {
                isLoading
                ? (<h2>Cargando...</h2>)
                : null
            } */}

            {/* Forma de hacer un if normal */}
            { isLoading && <p>Loading...</p> }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}
