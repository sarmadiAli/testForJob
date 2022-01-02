import axios from 'axios'

const instanceAxios = axios.create({
    baseURL: `https://reqres.in/api/`,
    method: 'GET'
})

export default instanceAxios;