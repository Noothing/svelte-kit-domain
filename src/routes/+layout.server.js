/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    const res = await fetch('https://api.noothing.xyz/me')
    const json = await res.json()
    console.log(json)
}