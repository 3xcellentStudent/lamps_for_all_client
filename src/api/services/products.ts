export async function getProducts(id: string | null){
  const url = `http://localhost:5000/products${id ? `?id=${id}` : null}`
  return await fetch(url).then(data => data.json())
}