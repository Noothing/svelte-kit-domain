/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    fetch('https://api.noothing.xyz/me', {
        method: 'GET', // or 'POST' if the route requires a POST request
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Add this line if the request requires authorization
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}