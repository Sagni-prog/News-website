import axios from 'axios';

const http = axios.create({
    'baseURL' : 'http://localhost:8000/api',
    'X-Requsted-with' : 'XMLHttpRequest',
    'accept': 'application/json'
});

export default http;