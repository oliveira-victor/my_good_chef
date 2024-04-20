import { useEffect, useState } from "react"

import ShopCard from "../../components/ShopCard"

import * as S from './styles'
import { StyledLink } from "../../styles"

const Shops = () => {

    const [shopsData, setShopsData] = useState<ShopCard[]>([])

    const [filteredShops, setFilteredShops] = useState<ShopCard[]>([])

    useEffect(() => {
        setFilteredShops(shopsData)
    }, [shopsData])

    useEffect(() => {
        fetch('https://api-fake-vfo.vercel.app/api/mygoodchef/shops')
            .then((res) => res.json())
            .then((res) => setShopsData(res))
    }, [])

    const filterShops = (food: string) => {
        const filter = shopsData.filter(shop => shop.meals.includes(food))
        setFilteredShops(filter)
    }

    if (!filteredShops) {
        return <div className="loader container"><h2>Loading...</h2></div>
    }

    return (
        <>
            <S.Nav>
                <S.NavContainer className="container">
                    <button onClick={() => setFilteredShops(shopsData)}>All</button>
                    <button onClick={() => filterShops("Breakfast")}>Breakfast</button>
                    <button onClick={() => filterShops("Lunch")}>Lunch</button>
                    <button onClick={() => filterShops("Dinner")}>Dinner</button>
                    <button onClick={() => filterShops("Desserts")}>Desserts</button>
                    <button onClick={() => filterShops("Snacks")}>Snacks</button>
                </S.NavContainer>
            </S.Nav>
            <S.Shops className="container">
                <S.ShopsList>
                    {filteredShops.map((shop) => (
                    <li key={shop.id} className="fadeIn">
                        <StyledLink to={`/shop/${shop.id}`}>
                            <ShopCard
                                id={shop.id}
                                title={shop.title}
                                image={shop.image}
                                tag={shop.tag}
                                vegan={shop.vegan}
                                meals={shop.meals}
                                description={shop.description}
                                reviews={shop.reviews}
                            />
                        </StyledLink>
                    </li>
                ))}
                </S.ShopsList>
            </S.Shops>
        </>
    )
}

export default Shops
