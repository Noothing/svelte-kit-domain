/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    const res = await fetch('http://localhost:3001/me')
    const json = await res.json()
    console.log(json)
}