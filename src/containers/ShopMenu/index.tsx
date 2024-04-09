import { useEffect, useState } from 'react'

import MenuItem from '../../components/MenuItem'

import * as S from './styles'

import close from '../../assets/images/close.svg'

const ShopMenu = ({ menu }: MenuInfo) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    /* const [shopsData, setShopsData] = useState<ShopCard[]>()

    useEffect(() => {
        fetch('https://api-fake-vfo.vercel.app/api/mygoodchef/shops')
            .then((res) => res.json())
            .then((res) => setShopsData(res))
    }, [])

    if (!shopsData) {
        return <div className="loader container"><h2>Loading...</h2></div>
    } */

    return (
        <S.MenuContainer>

            {modalIsOpen && (
                <S.FullScreen className='fadeIn'>
                    <S.Overlay onClick={() => setModalIsOpen(false)}></S.Overlay>
                    <S.Modal>
                        <img className='foodPic' src="https://th.bing.com/th/id/OIG4.UrH7CaUXHf23hsyG538x?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Food picture" />
                        <div className="modalContent">
                            <div className="text">
                                <img onClick={() => setModalIsOpen(false)} className='close' src={close} alt="Close icon" />
                                <h4>
                                    Title
                                </h4>
                                <p>
                                    Description
                                </p>
                            </div>
                            <div className="purchaseContainer">
                                <div>
                                    <span className='oldPrice'>$ 15.0</span><br />
                                    <span className='price'>$ 12.0</span>
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
            <S.MenuList>
                <li onClick={() => setModalIsOpen(true)}>
                    <MenuItem />
                </li>
            </S.MenuList>
        </S.MenuContainer>
    )
}

export default ShopMenu