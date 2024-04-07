import MenuItem from '../../components/MenuItem'
import * as S from './styles'

const ShopMenu = () => {
    return (
        <S.MenuContainer>
            <h3 className="shopTitle">Menu</h3>
            <S.MenuList>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </S.MenuList>
        </S.MenuContainer>
    )
}

export default ShopMenu