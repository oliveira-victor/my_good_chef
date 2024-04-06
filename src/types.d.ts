declare type Menu = {
    id: number
    title: string
    image: string
    type: string
    rating: number
    mealInfo: string
    price: number
    previousPrice?: number
}

declare type Reviews = {
    id: number
    name: string
    photo: string
    stars: number
    comment: string
}

declare type ShopCard = {
    id: number
    title: string
    image: string
    tag: boolean
    meals: string[]
    description: string
    rating: number
}

declare type Shops = {
    id: number
    title: string
    image: string
    tag: boolean
    meals: string[]
    description: string
    rating: number
    totalReviews: number
    menu: Menu[]
    reviews: Reviews[]
}