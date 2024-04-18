import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currencyFormat } from '../../utils/currency'
import { RootReducer } from '../../store'
import { add } from '../../store/reducers/favorites'
import MenuItem from '../../components/MenuItem'

import * as S from './styles'

import close from '../../assets/images/close.svg'
import heartEmpty from '../../assets/images/heart-empty.svg'
import heartFull from '../../assets/images/heart-full.svg'

const ShopMenu = ({ menu }: MenuInfo) => {

    const favoritesList = useSelector((state: RootReducer) => state.favorites.favoritesList)

    const dispatch = useDispatch()

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState<MenuItem>({
        id: 0,
        title: "",
        image: "",
        mealInfo: "",
        price: 0,
        previousPrice: 0
    })

    const handleModal = (data: MenuItem) => {
        setModalData({
            id: data.id,
            title: data.title,
            image: data.image,
            mealInfo: data.mealInfo,
            price: data.price,
            previousPrice: data.previousPrice
        })
        setModalIsOpen(true)
    }

    const addToFavorites = (data: MenuItem) => {
        dispatch(add(data))
    }

    const checkFavorites = (fav: number) => {
        return favoritesList.some((item) => item.id === fav)
    }

    return (
        <S.MenuContainer>

            {modalIsOpen && (
                <div className='fullscreen fadeIn'>
                    <div className='overlay' onClick={() => setModalIsOpen(false)}></div>
                    <S.Modal className='modal'>
                        <div className="imageContainer" style={{ backgroundImage: `url(${modalData.image})` }}>
                            <img className='favorite' onClick={() => addToFavorites(modalData)} src={checkFavorites(modalData.id) ? heartFull : heartEmpty} alt="Favorite icon" />
                        </div>
                        <div className="modalContent">
                            <div className="text">
                                <img onClick={() => setModalIsOpen(false)} className='close' src={close} alt="Close icon" />
                                <h4>
                                    {modalData.title}
                                </h4>
                                <p>
                                    {modalData.mealInfo}
                                </p>
                            </div>
                            <div className="purchaseContainer">
                                <div>
                                    {modalData.previousPrice ? <><span className='oldPrice'>{currencyFormat.format(modalData.previousPrice)}</span><br /></> : ''}
                                    <span className='price'>{currencyFormat.format(modalData.price)}</span>
                                </div>
                                <div className="cartControler">
                                    <button>-</button>
                                    <div className="counter">2</div>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </S.Modal>
                </div>
            )}

            <h3 className="shopTitle">Menu</h3>

            {menu.map((item, index) => (
                <S.MenuSection key={index}>
                    <h4>{item.type}</h4>
                    <S.MenuList>
                        {item.list.map((dish, index) => (
                            <li key={index} onClick={() => handleModal(dish)}>
                                <MenuItem
                                    title={dish.title}
                                    image={dish.image}
                                    price={dish.price}
                                    previousPrice={dish.previousPrice}
                                />
                            </li>
                        ))}
                    </S.MenuList>
                </S.MenuSection>
            ))}
        </S.MenuContainer>
    )
}

export default ShopMenu