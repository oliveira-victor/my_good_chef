declare type MenuInfo = {
    menu: Menu[]
}

declare type MenuItem = {
    id: number
    title: string
    image: string
    mealInfo: string
    price: number
    previousPrice?: number
}

declare type Menu = {
    type: string
    list: MenuItem[]
}

declare type Reviews = {
    name: string
    photo?: string
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