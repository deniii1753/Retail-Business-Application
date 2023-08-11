
const BASE_URL = 'https://vastly-growing-chipmunk.ngrok-free.app/api';

exports.getProducts = () => {
    return fetch(`${BASE_URL}/products`)
        .then(res => res.json())
        .then(data => data);
}