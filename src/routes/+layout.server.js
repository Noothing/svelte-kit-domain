/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    fetch('https://api.noothing.xyz/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Include any necessary headers here, such as authorization if needed
        },
        credentials: 'include' // Include cookies with the request
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}