import axios from "axios";

const token = localStorage.getItem('token');

const http = axios.create({
    "baseURL": "http://localhost:8000/api",
    headers: {
        'accept' :'application/json',
        'X-Requested-Wit': 'XMLHttpRequest',
        'withCredentials': true,
        'Authorization': `Bearer ${token}`,
    }
})

export default http