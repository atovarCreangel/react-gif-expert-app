import { useEffect, useState } from 'react';
import { getGifs } from '../apis/gifsApi';

export const useFecthGifs = ( category ) => {

    const[images, setimages] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    const getImages = async () => { // async function para no utilizar el then
        const gifs = await getGifs(category);
        setimages(gifs);
        setIsLoading(false);
    }

    useEffect(() => {
        /*getGifs(category).then(
            gifs => setimages(gifs)
        );*/
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
