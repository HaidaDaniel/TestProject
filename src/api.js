export const fetchProducts = async () => {
    try {
        const response = await fetch('http://demo5127360.mockable.io/products');
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
        const response = await fetch(`http://demo5127360.mockable.io/product/${id}`);
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