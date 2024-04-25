import { useEffect, useState } from "react"
import { PulseLoader } from "react-spinners"

import ShopCard from "../../components/ShopCard"

import * as S from './styles'
import { StyledLink } from "../../styles"
import { colors } from "../../styles/colors"

const Shops = () => {

    const [shopsData, setShopsData] = useState<ShopCard[]>([])

    const [filteredShops, setFilteredShops] = useState<ShopCard[]>([])

    const [activeBtn, setActiveBtn] = useState<string>("All")

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
        food === "All" ? setFilteredShops(shopsData) : setFilteredShops(filter)
        setActiveBtn(food)
    }

    if (shopsData.length === 0) {
        return <div className="loader container"><PulseLoader color={colors.secondary} /></div>
    }

    return (
        <>
            {filteredShops.length > 0 && (
                <S.Nav>
                    <S.NavContainer className="container">
                        <button className={activeBtn === "All" ? "activeBtn" : ""} onClick={() => filterShops("All")}>All</button>
                        <button className={activeBtn === "Breakfast" ? "activeBtn" : ""} onClick={() => filterShops("Breakfast")}>Breakfast</button>
                        <button className={activeBtn === "Lunch" ? "activeBtn" : ""} onClick={() => filterShops("Lunch")}>Lunch</button>
                        <button className={activeBtn === "Dinner" ? "activeBtn" : ""} onClick={() => filterShops("Dinner")}>Dinner</button>
                        <button className={activeBtn === "Desserts" ? "activeBtn" : ""} onClick={() => filterShops("Desserts")}>Desserts</button>
                        <button className={activeBtn === "Snacks" ? "activeBtn" : ""} onClick={() => filterShops("Snacks")}>Snacks</button>
                    </S.NavContainer>
                </S.Nav>
            )}
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
