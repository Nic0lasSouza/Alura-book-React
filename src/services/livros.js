import axios from "axios";

const livrosApi = axios.create({baseURL: "http://localhost:8000/livros"});

