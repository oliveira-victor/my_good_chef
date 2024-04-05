import ShopCard from "../../components/ShopCard"
import { data } from "../../data"

import * as S from './styles'

const Shops = () => {
    return (
        <S.Shops className="container">
            <S.ShopsList>
                {data.map((shop) => (
                    <li key={shop.id}>
                        <ShopCard
                            title={shop.title}
                            image={shop.image}
                            tag={shop.tag}
                            meals={shop.meals}
                            description={shop.description}
                            rating={shop.rating}
                        />
                    </li>
                ))}
            </S.ShopsList>
        </S.Shops>
    )
}

export default Shops
