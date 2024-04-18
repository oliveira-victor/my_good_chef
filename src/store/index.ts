import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart'
import favoritesReducer from './reducers/favorites'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>