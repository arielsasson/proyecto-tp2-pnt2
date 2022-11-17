import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api/groups`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

function authorize() {
    // NO USAR LOCAL STORAGE, USAR STORES!!
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${
        JSON.parse(localStorage.getItem('user')).token
      }`
}

// Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJuYW1lIjoiSnVhbiIsImVtYWlsIjoianVhbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjQ1Njc4OSJ9LCJpYXQiOjE2MzUyNzUzMTJ9.9Oa_niAoYlfC6j54NbKWhYU8bsEF-h6WoXrv-1ny8zg`, ??
// console.log(JSON.parse(localStorage.getItem('usuario')))

export default {
  getGroups() {
    authorize()
    return apiClient.get('/')
  },
  getGroupBy(id) {
    authorize()
    return apiClient.get('/' + id)
  }
}
