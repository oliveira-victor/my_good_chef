import { useDispatch, useSelector } from 'react-redux'

import { openFav } from '../../store/reducers/favoritesModal'
import { RootReducer } from '../../store'

import * as S from './styles'

import home from '../../assets/images/home-icon.svg'
import cart from '../../assets/images/cart-icon.svg'
import heart from '../../assets/images/heart-empty.svg'

const PhoneMenu = () => {

    const favIsOpen = useSelector((state: RootReducer) => state.favModal.favIsOpen)
    const cartItems = useSelector((state: RootReducer) => state.cart.cartItems)

    const dispatch = useDispatch()

    return (
        <S.PhoneMenu>
            <S.MenuList>
                <ul>
                    <li>
                        <S.MenuLink to={'/'} className='listItem'>
                            <img className='menuIcon' src={home} alt="Home icon" />
                            <span>Stores</span>
                        </S.MenuLink>
                    </li>
                    <li className='listItem' onClick={() => dispatch(openFav(!favIsOpen))}>
                        <img className='menuIcon heart' src={heart} alt="Favorites icon" />
                        <span>Favorites</span>
                    </li>
                    <li>
                        <S.MenuLink to={'/cart'} className='listItem'>
                            <img className='menuIcon' src={cart} alt="Cart icon" />
                            <span>Cart</span>
                            {cartItems.length > 0 && (
                                <div className="smallBubble"></div>
                            )}
                        </S.MenuLink>
                    </li>
                </ul>
            </S.MenuList>
        </S.PhoneMenu>
    )
}

export default PhoneMenu