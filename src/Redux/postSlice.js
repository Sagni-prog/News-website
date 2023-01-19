import { creareSlice,createAsyncThunk } from '@reduxjs/toolkit' 

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const postSlice = creareSlice({
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
          
    }
})