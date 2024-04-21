import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoritesState = {
    favoritesList: MenuItem[]
}

const initialState: FavoritesState = {
    favoritesList: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<MenuItem>) => {
            const favorite = action.payload

            if(state.favoritesList.find((item) => item.id === favorite.id)) {
                const filteredFav = state.favoritesList.filter(
                    favItem => favItem.id !== action.payload.id
                )
                state.favoritesList = filteredFav
            } else {
                state.favoritesList.push(favorite)
            }
        }
    }
})

export const { addFav } = favoritesSlice.actions
export default favoritesSlice.reducer