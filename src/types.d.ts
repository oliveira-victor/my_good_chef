declare type MenuInfo = {
    menu: Menu[]
}

declare type Menu = {
    id: number
    title: string
    image: string
    type: string
    mealInfo: string
    price: number
    previousPrice?: number
    rating: number
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
    vegan: boolean
    meals: string[]
    description: string
    reviews: Reviews[]
}

declare type ShopHeader = {
    title: string
    reviews: Reviews[]
    image: string
    description: string
}

declare type Shops = {
    id: number
    title: string
    image: string
    tag: boolean
    vegan: boolean
    meals: string[]
    description: string
    menu: Menu[]
    reviews: Reviews[]
}