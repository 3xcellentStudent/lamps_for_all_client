import {PostProduct, ProductID} from './types'

// export async function postProduct(options: PostProduct){
//   const {collection, data} = options
//   const url = `http://localhost:5000/${collection}`
//   const response = await fetch(url, {
//     method: 'POST',
//     mode: 'cors',
//     body: JSON.stringify(data),
//   })
//   .then(data => data.json())
// }

export async function getProductID(options: ProductID){
  const {collection, productID} = options
  const url = `http://localhost:5000/${collection}s?id=${productID}`
  const response = await fetch(url)
  .then(data => data.json())
  return response
}

// export async function getAllProducts(){
//   const url = 'http://localhost:5000/products'
//   const response = await fetch(url)
//   .then(data => data.json())
//   console.log(response)
// }