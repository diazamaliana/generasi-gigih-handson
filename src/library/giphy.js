const GIPHY_API = process.env.REACT_APP_GIPHY_KEY;
const API_BASE = 'https://api.giphy.com/v1/gifs';
const limit = 12;

const getSearchImage = async (query) => {
    const url = `${API_BASE}/search?api_key=${GIPHY_API}&q=${query}&limit=${limit}`
    const response = await fetch(url).then((data) => data.json());
    return response;
};

const getTrendingImage = async () => {
    const url = `${API_BASE}/trending?api_key=${GIPHY_API}&limit=${limit}`
    const response = await fetch(url).then((data) => data.json());
    return response;
}

export { getSearchImage, getTrendingImage }
