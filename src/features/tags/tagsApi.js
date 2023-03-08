import axios from '../../utils/axios'
export const getTags=async ()=>{
    const respons=await axios.get("/tags")

    return respons.data;
}