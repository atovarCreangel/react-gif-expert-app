
export const getGifs = async (category) => {
    const api_key = 'HUy76BvzNe28sTSQT2LWuS7blYOohStq';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
    return gifs;
}