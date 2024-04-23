import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    cartItems: MenuItem[]
}

const initialState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<MenuItem>) => {
            const order = action.payload

            state.cartItems.push(order)
        },
        removeCart: (state, action: PayloadAction<number>) => {
            const indexToRemove = state.cartItems.findIndex(item => item.id === action.payload)
            if (indexToRemove !== -1) {
                const updatedItems = [...state.cartItems.slice(0, indexToRemove), ...state.cartItems.slice(indexToRemove + 1)]
                state.cartItems = updatedItems
            }
        },
        clear: (state) => {
            state.cartItems = []
        }
    }
})

export const { addCart, removeCart, clear } = cartSlice.actions
export default cartSlice.reducer