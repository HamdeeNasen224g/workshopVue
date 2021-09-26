import axios from "axios";

const isDevelopment = process.env.NODE_ENV !== 'production'

export default axios.create({
    baseURL: isDevelopment ? "http://localhost:9000/api" : 'https://fyi-student-api.herokuapp.com/api',
    headers: {
        "Content-type": "application/json"
    }
});