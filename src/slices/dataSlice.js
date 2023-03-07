import { createSlice } from '@reduxjs/toolkit';

let previous = [];

const initialState = {
  user : {},
  videoCategories: [],
  videos : [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {

    setUserData: (state , action) => {
        state.user = action.payload;
    },

    removeUser: (state) => {
        state.user = {};
    },

    setVideoCategories: ( state, action ) => {
        state.videoCategories = action.payload;
        previous = action.payload;
    },

    setVideos: ( state , action ) => {
        state.videos = action.payload;
    },

    removeVideos : (state) => {
        state.videos = [];
        // console.log(state.videos);
    },

    searchItems :( state , action ) => {
       
       if(action.payload.search === ""){
        state.videoCategories = previous;
       }
       else {
        state.videoCategories = state.videoCategories.filter(item => item.title.toLowerCase().includes(action.payload.search.trim().toLowerCase()));
       }
    }

  },
})

// Action creators are generated for each case reducer function
export const { setUserData , removeUser, setVideoCategories, setVideos, removeVideos , searchItems } = dataSlice.actions;

export const selectUser = (state) =>  state.data.user;
export const selectVideoCategories = (state) =>  state.data.videoCategories;
export const selectVideos = (state) => state.data.videos;

export default dataSlice.reducer;