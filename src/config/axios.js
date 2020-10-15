import axios from 'axios'

const API_REQUEST = process.env.REACT_APP_BACKEN_URL
const axiosClient = axios.create({
    baseURL: API_REQUEST
})

export default axiosClient;