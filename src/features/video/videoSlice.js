import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getVideo } from "./videoApi";


const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const videos=await getVideo(id);
    return videos;
    
});

const videoSlice=createSlice({
    name: "video",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideo.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchVideo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.video=action.payload;
        })
        .addCase(fetchVideo.rejected,(state,action)=>{
            state.isLoading=false;
            state.video={};
            state.isError=action.payload;
            state.error=action.error?.message;
        })

    }
});

export default videoSlice.reducer;