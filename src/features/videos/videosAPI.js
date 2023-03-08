import axios from '../../utils/axios'
export const getVideos=async ()=>{
    const respons=await axios.get("/videos")

    return respons.data;
}