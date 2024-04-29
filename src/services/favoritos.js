import axios from "axios";

const FavoritosApi = axios.create({baseURL: "http://localhost:8000/favoritos"});

async function getFavoritos(){
    const response = await FavoritosApi.get('/')

    return response.data
}

async function postFavoritos(id){
    await FavoritosApi.post(`/${id}`)
}

async function deleteFavoritos(id){
    await FavoritosApi.delete(`/${id}`)
}

export{
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}