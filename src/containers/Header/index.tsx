import { useDispatch } from 'react-redux'

import { openFav } from '../../store/reducers/favoritesModal'
import { StyledLink } from '../../styles'

import * as S from './styles'

import logo from '../../assets/images/logo.webp'
import cart from '../../assets/images/cart-icon.svg'

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
