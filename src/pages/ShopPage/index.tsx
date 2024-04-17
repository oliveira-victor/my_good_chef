import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ShopHeader from "../../containers/ShopHeader"
import ShopMenu from "../../containers/ShopMenu"

import * as S from './styles'

const ShopPage = () => {

    const { id } = useParams()

    const [shop, setShop] = useState<Shops>()

    useEffect(() => {
        fetch(`https://api-fake-vfo.vercel.app/api/mygoodchef/shops/${id}`)
            .then((res) => res.json())
            .then((res) => setShop(res))
    }, [id])

    if (!shop) {
        return <div className="loader container"><h2>Loading...</h2></div>
    }

    return (
        <S.ShopSection>
            <ShopHeader
                title={shop.title}
                reviews={shop.reviews}
                image={shop.image}
                description={shop.description}
            />
            <hr />
            <ShopMenu
                menu={shop.menu}
            />
        </S.ShopSection>
    )
}

export default ShopPage