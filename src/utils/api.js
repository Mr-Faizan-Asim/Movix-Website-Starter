import axios from "axios";

const BASE_URL = "https://www.themoviedb.org/";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN


const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params) =>{
    try{
        const {data} = await axios.get(BASE_URL+url,{
            headers,
            params // Paramas mean parameters pss to api
        })
        return data;
    }
    catch(err){
console.log(err);
return err;
    }

}

