import { useState, useEffect } from "react";
import axios from "axios";


function useFetchDogs(){
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchDogs() {
            try{
                const response = await axios.get ('https://api.thedogapi.com/v1/breeds');
                setDogs(response.data);
            } catch (error){
                console.error('Error al obtener los datos:', error);
                setError(error);
            } finally{
                setLoading(false);
            }
        }
    fetchDogs();
}, []);
    return{dogs, loading, error};
}

export default useFetchDogs;