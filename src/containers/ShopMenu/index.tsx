import { useState } from 'react'

import MenuItem from '../../components/MenuItem'

import * as S from './styles'

import close from '../../assets/images/close.svg'

const ShopMenu = ({ menu }: MenuInfo) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState<MenuItem>({
        title: "",
        image: "",
        mealInfo: "",
        price: 0,
        previousPrice: 0
    })

    const handleModal = (data: MenuItem) => {
        setModalData({
            title: data.title,
            image: data.image,
            mealInfo: data.mealInfo,
            price: data.price,
            previousPrice: data.previousPrice
        })
        setModalIsOpen(true)
    }

    return (
        <S.MenuContainer>

            {modalIsOpen && (
                <S.FullScreen className='fadeIn'>
                    <S.Overlay onClick={() => setModalIsOpen(false)}></S.Overlay>
                    <S.Modal>
                        <div className="imageContainer" style={{ backgroundImage: `url(${modalData.image})` }}></div>
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
                                    {modalData.previousPrice ? <><span className='oldPrice'>$ {modalData.previousPrice}</span><br /></> : ''}
                                    <span className='price'>$ {modalData.price}</span>
                                </div>
                                <div className="cartControler">
                                    <button>-</button>
                                    <div className="counter">2</div>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </S.Modal>
                </S.FullScreen>
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