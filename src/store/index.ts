import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart'
import favoritesReducer from './reducers/favorites'
import favModalReducer from './reducers/favoritesModal'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
        favModal: favModalReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>