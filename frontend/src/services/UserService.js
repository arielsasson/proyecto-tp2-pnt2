import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api/users`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

function login(form) {
  return apiClient.post('/login', form)
}

function logout() {
  //deslogear
  // ?? return apiClient.post('/logout', data)
}

function register(form) {
  return apiClient.post("/",  form)
}
// Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJuYW1lIjoiSnVhbiIsImVtYWlsIjoianVhbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjQ1Njc4OSJ9LCJpYXQiOjE2MzUyNzUzMTJ9.9Oa_niAoYlfC6j54NbKWhYU8bsEF-h6WoXrv-1ny8zg`,
// console.log(JSON.parse(localStorage.getItem('usuario')))

export default {
  login,
  logout,
  register
}
