import { useState } from 'react'

import MenuItem from '../../components/MenuItem'
import MenuModal from '../../components/MenuModal'

import * as S from './styles'

const ShopMenu = ({ menu }: MenuInfo) => {

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

    return (
        <S.MenuContainer>

            {modalIsOpen && (
                <MenuModal
                    data={modalData}
                    setModalIsOpen={setModalIsOpen}
                />
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