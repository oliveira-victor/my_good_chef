import { useDispatch } from 'react-redux'

import { openFav } from '../../store/reducers/favoritesModal'

import * as S from './styles'

import logo from '../../assets/images/logo.webp'
import cart from '../../assets/images/cart-icon.svg'
import { StyledLink } from '../../styles'

const Header = () => {

    const dispatch = useDispatch()

    return (
        <S.Header>
            <div className="headerContainer container">
                <h1>
                    <img className='logo' src={logo} alt="My Good Chef" />
                </h1>
                <S.Menu>
                    <ul>
                        <StyledLink to={'/'}>
                            Stores
                        </StyledLink>
                        <li onClick={() => dispatch(openFav(true))}>
                            Favorites
                        </li>
                        <li>
                            <img className='cart' src={cart} alt="Cart icon" />
                            <div className="bubble">
                                3
                            </div>
                        </li>
                    </ul>
                </S.Menu>
            </div>
        </S.Header>
    )
}

export default Header
