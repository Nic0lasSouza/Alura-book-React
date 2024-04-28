import axios from "axios";

const FavoritosApi = axios.create({baseURL: "http://localhost:8000/livros/favoritos"});

async function getFavoritos(){
    const response = await FavoritosApi.get('/')

    return response.data
}

export{
    getFavoritos
}