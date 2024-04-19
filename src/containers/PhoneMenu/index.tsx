import { useDispatch, useSelector } from 'react-redux'

import { openFav } from '../../store/reducers/favoritesModal'
import { RootReducer } from '../../store'

import * as S from './styles'

import home from '../../assets/images/home-icon.svg'
import cart from '../../assets/images/cart-icon.svg'
import heart from '../../assets/images/heart-empty.svg'

const PhoneMenu = () => {

    const favIsOpen = useSelector((state: RootReducer) => state.favModal.favIsOpen)

    const dispatch = useDispatch()

    return (
        <S.PhoneMenu>
            <S.MenuList>
                <ul>
                    <li>
                        <S.MenuLink to={'/'} className='listItem'>
                            <img className='menuIcon' src={home} alt="" />
                            <span>Stores</span>
                        </S.MenuLink>
                    </li>
                    <li className='listItem' onClick={() => dispatch(openFav(!favIsOpen))}>
                        <img className='menuIcon heart' src={heart} alt="" />
                        <span>Favorites</span>
                    </li>
                    <li>
                        <S.MenuLink to={'/'} className='listItem'>
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