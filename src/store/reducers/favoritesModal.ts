import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoritesState = {
    favIsOpen: boolean
}

const initialState: FavoritesState = {
    favIsOpen: false
}

const favoritesSlice = createSlice({
    name: 'favoritesModal',
    initialState,
    reducers: {
        openFav: (state, action: PayloadAction<boolean>) => {
            state.favIsOpen = action.payload
        }
    }
})

export const { openFav } = favoritesSlice.actions
export default favoritesSlice.reducer