import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3001`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

// Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJuYW1lIjoiSnVhbiIsImVtYWlsIjoianVhbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjQ1Njc4OSJ9LCJpYXQiOjE2MzUyNzUzMTJ9.9Oa_niAoYlfC6j54NbKWhYU8bsEF-h6WoXrv-1ny8zg`,
// console.log(JSON.parse(localStorage.getItem('usuario')))

export default {
  getProductos() {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${
      JSON.parse(localStorage.getItem('usuario')).token
    }`

    return apiClient.get('/api/productos')
  },
  getProductosPor(id) {
    return apiClient.get('/productos/' + id)
  },
  postProductos(producto) {
    return apiClient.post('/productos/', producto)
  },
  deleteProducto(id) {
    return apiClient.delete('/productos/' + id)
  },
  putProducto(producto) {
      console.log(producto)
      return ('/productos/' + producto.id , producto)
  },
}
