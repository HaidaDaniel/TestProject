
const PRODUCTS_URL = process.env.REACT_APP_PRODUCTS_URL
const PRODUCTS_URL_BY_ID = process.env.REACT_APP_PRODUCT_BY_ID_URL


export const fetchProducts = async () => {
    try {
        const response = await fetch(PRODUCTS_URL);
        if (!response.ok) {
            throw new Error('Response is not OK');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in fetchProducts:', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        console.log(PRODUCTS_URL_BY_ID + id)
        const response = await fetch(PRODUCTS_URL_BY_ID + id);
        if (!response.ok) {
            throw new Error('Response is not OK');
        }
        const data = await response.text();
        const jsonData = JSON.parse(data);
        return jsonData.data;
    } catch (error) {
        console.error('Error in fetchProductById:', error);
        throw error;
    }
};