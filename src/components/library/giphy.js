export const getSearchImage = async (query) => {
    const GIPHY_API = process.env.REACT_APP_GIPHY_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API}&q=${query}&limit=12`
    const response = await fetch(url).then((data) => data.json());
    return response;
};