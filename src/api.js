
const PRODUCTS_URL = process.env.REACT_APP_PRODUCTS_URL
const PRODUCTS_URL_BY_ID = process.env.REACT_APP_PRODUCT_BY_ID_URL
const PRODUCTS_POST_URL_BY_ID = process.env.REACT_APP_PRODUCT_POST_BY_ID_URL


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
}
    ;

export const fetchProductById = async (id) => {
    try {
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
}
    ;

export async function postReview(data) {
    try {
        const response = await fetch(
            PRODUCTS_POST_URL_BY_ID + data.productId,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );

        if (response.ok) {
            return 'Review sent successfully';
        } else {
            return 'Error sending review';
        }
    } catch (error) {
        console.error('Error sending review:', error);
        return 'Error sending review';
    }
}
;
