import axios from '../../utils/axios'
export const getVideo=async (id)=>{
    const respons=await axios.get(`/videos/${id}`)

    return respons.data;
}