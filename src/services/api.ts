import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
    id: number
    price: number
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            street: string
            houseNumber: string
            zipcode: number
            complement: string
            phone: number
        }
    }
    payment: {
        card: {
            nameOnCard: string
            cardNumber: string
            cvv: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-fake-vfo.vercel.app/api/mygoodchef'
    }),
    endpoints: builder => ({
        purchase: builder.mutation<any, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { usePurchaseMutation } = api

export default api