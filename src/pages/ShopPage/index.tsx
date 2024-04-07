import ShopHeader from "../../containers/ShopHeader"
import ShopMenu from "../../containers/ShopMenu"

import * as S from './styles'

const ShopPage = () => {
    return (
        <S.ShopSection className="container">
            <ShopHeader />
            <hr />
            <ShopMenu />
        </S.ShopSection>
    )
}

export default ShopPage