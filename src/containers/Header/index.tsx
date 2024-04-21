import { useDispatch, useSelector } from 'react-redux'

import { openFav } from '../../store/reducers/favoritesModal'
import { StyledLink } from '../../styles'

import * as S from './styles'

import logo from '../../assets/images/logo.webp'
import cart from '../../assets/images/cart-icon.svg'
import { RootReducer } from '../../store'

const Header = () => {

    const dispatch = useDispatch()

    const cartItems = useSelector((state: RootReducer) => state.cart.cartItems)

    return (
        <S.Header>
            <div className="headerContainer container">
                <h1>
                    <img className='logo' src={logo} alt="My Good Chef" />
                </h1>
                <S.Menu>
                    <ul>
                        <li>
                            <StyledLink to={'/'}>
                                Stores
                            </StyledLink>
                        </li>
                        <li onClick={() => dispatch(openFav(true))}>
                            Favorites
                        </li>
                        <li>
                            <img className='cart' src={cart} alt="Cart icon" />
                            {cartItems.length > 0 && (
                                <div className="bubble">
                                    {cartItems.length > 99 ? '!' : cartItems.length}
                                </div>
                            )}
                        </li>
                    </ul>
                </S.Menu>
            </div>
        </S.Header>
    )
}

export default Header
