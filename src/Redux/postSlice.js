import { createSlice,createAsyncThunk } from '@reduxjs/toolkit' 
import http from '../Url';

const initialState = {
    posts: [
        {
            title: "this is title1",
            description : "this is desctiption1"
          },
              {
            title: "this is title2",
            description : "this is desctiption2"
          },
],
    status: 'idle',
    error: null
}


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
   
    console.log("from fetch")
    
    //   const data = await http.get('/catagories')

    //   console.log('from thunk',data)
    //   return data.data
});
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state,action){
                state.posts.push(action.payload)
            },
        }
    },
    extraReducer: (builder) => {
          builder 
                .addCase(fetchPosts.pending,(state) => {
                    state.status = 'loading'
                })
                .addCase(fetchPosts.fulfilled,(state,action) => {
                    state.status = 'succeded'
                    const data = action.payload
                    state.posts = state.posts.concat(data)
                })
                .addCase(fetchPosts.rejected,(state,action) => {
                    state.status = 'failed'
                    state.error = action.error.message
                    
                })
     }
})

export const getAllPosts = (state) => state.posts
export const getError = (state) => state.error
export const postStatus = (state) => state.status
export default postSlice.reducer