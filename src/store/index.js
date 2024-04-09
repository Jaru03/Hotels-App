import { configureStore } from '@reduxjs/toolkit'
import hotels from './slices/hotels.slices'

export default configureStore({
    reducer: {
        hotels
    }
})
