import { useEffect, useState } from "react"

import ShopCard from "../../components/ShopCard"

import * as S from './styles'

const Shops = () => {

    const [shopsData, setShopsData] = useState<ShopCard[]>()

    useEffect(() => {
        fetch('https://api-fake-vfo.vercel.app/api/mygoodchef/shops')
            .then((res) => res.json())
            .then((res) => setShopsData(res))
    }, [])

    if (!shopsData) {
        return <div className="loader container"><h2>Loading...</h2></div>
    }

    return (
        <S.Shops className="container">
            <S.ShopsList>
                {shopsData.map((shop) => (
                    <li key={shop.id}>
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
                    </li>
                ))}
            </S.ShopsList>
        </S.Shops>
    )
}

export default Shops
