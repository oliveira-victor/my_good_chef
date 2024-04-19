import * as S from './styles'

import home from '../../assets/images/home-icon.svg'
import cart from '../../assets/images/cart-icon.svg'
import heart from '../../assets/images/heart-empty.svg'

const PhoneMenu = () => {
    return (
        <S.PhoneMenu>
            <S.MenuList>
                <ul>
                    <li>
                        <S.MenuLink to={'/'}>
                            <img className='menuIcon' src={home} alt="" />
                            <span>Stores</span>
                        </S.MenuLink>
                    </li>
                    <li>
                        <S.MenuLink to={'/'}>
                            <img className='menuIcon heart' src={heart} alt="" />
                            <span>Favorites</span>
                        </S.MenuLink>
                    </li>
                    <li>
                        <S.MenuLink to={'/'}>
                            <img className='menuIcon' src={cart} alt="" />
                            <span>Cart</span>
                            <div className="smallBubble"></div>
                        </S.MenuLink>
                    </li>
                </ul>
            </S.MenuList>
        </S.PhoneMenu>
    )
}

export default PhoneMenu