export const ssr = false

export const load = async ({url}) => {
    console.log(url)
    fetch('https://api.noothing.xyz/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Include any necessary headers here, such as authorization if needed
        },
        credentials: 'include' // Include cookies with the request
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
