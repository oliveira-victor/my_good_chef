import { SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { addFav } from '../../store/reducers/favorites'
import { addCart, removeCart } from '../../store/reducers/cart'
import { currencyFormat } from '../../utils/currency'

import * as S from './styles'

import close from '../../assets/images/close.svg'
import heartEmpty from '../../assets/images/heart-empty.svg'
import heartFull from '../../assets/images/heart-full.svg'

const MenuModal: React.FC<{ data: MenuItem, setModalIsOpen: React.Dispatch<SetStateAction<boolean>> }> = ({ data, setModalIsOpen }) => {

    const favoritesList = useSelector((state: RootReducer) => state.favorites.favoritesList)
    const cartItems = useSelector((state: RootReducer) => state.cart.cartItems)

    const dispatch = useDispatch()

    const itemsCounter = (itemID: number) => {
        return cartItems.filter(item => item.id === itemID).length
    }

    const checkFavorites = (fav: number) => {
        return favoritesList.some((item) => item.id === fav)
    }

    return (
        <div className='fullscreen fadeIn'>
            <div className='overlay' onClick={() => setModalIsOpen(false)}></div>
            <S.Modal className='modal'>
                <div className="imageContainer" style={{ backgroundImage: `url(${data.image})` }}>
                    <img className='favorite' onClick={() => dispatch(addFav(data))} src={checkFavorites(data.id) ? heartFull : heartEmpty} alt="Favorite icon" />
                </div>
                <div className="modalContent">
                    <div className="text">
                        <img onClick={() => setModalIsOpen(false)} className='close' src={close} alt="Close icon" />
                        <h4>
                            {data.title}
                        </h4>
                        <p>
                            {data.mealInfo}
                        </p>
                    </div>
                    <div className="purchaseContainer">
                        <div>
                            {data.previousPrice ? <><span className='oldPrice'>{currencyFormat.format(data.previousPrice)}</span><br /></> : ''}
                            <span className='price'>{currencyFormat.format(data.price)}</span>
                        </div>
                        <div className="cartControler">
                            <button onClick={() => dispatch(removeCart(data.id))}>-</button>
                            <div className="counter">{itemsCounter(data.id)}</div>
                            <button onClick={() => dispatch(addCart(data))}>+</button>
                        </div>
                    </div>
                </div>
            </S.Modal>
        </div>
    )
}

export default MenuModal