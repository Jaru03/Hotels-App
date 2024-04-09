import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const hotelsslices = createSlice({
    name: 'hotels',
    initialState: null,
    reducers: {
        setHotels: (state, action) => action.payload 
    }
})

export const { setHotels } = hotelsslices.actions;

export default hotelsslices.reducer;

export const getHotelsThunk = url => (dispatch) => {
    axios.get(url)
    .then(res => dispatch(setHotels(res.data)))
    .catch(err => console.log(err))
}