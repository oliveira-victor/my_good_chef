import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    items: MenuItem[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<MenuItem>) => {
            const order = action.payload

            state.items.push(order)
        }
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer