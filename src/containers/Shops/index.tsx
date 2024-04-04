import ShopCard from "../../components/ShopCard"

import * as S from './styles'

const Shops = () => {
    return (
        <S.ShopsList className="container">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
        </S.ShopsList>
    )
}

export default Shops
