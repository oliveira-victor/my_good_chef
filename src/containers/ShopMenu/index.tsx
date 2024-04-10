import { useState } from 'react'

import MenuItem from '../../components/MenuItem'

import * as S from './styles'

import close from '../../assets/images/close.svg'

const ShopMenu = ({ menu }: MenuInfo) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <S.MenuContainer>

            {modalIsOpen && (
                <S.FullScreen className='fadeIn'>
                    <S.Overlay onClick={() => setModalIsOpen(false)}></S.Overlay>
                    <S.Modal>
                        <div className="imageContainer" style={{backgroundImage: `url(https://th.bing.com/th/id/OIG4.UrH7CaUXHf23hsyG538x?w=1024&h=1024&rs=1&pid=ImgDetMain)`}}></div>
                        <div className="modalContent">
                            <div className="text">
                                <img onClick={() => setModalIsOpen(false)} className='close' src={close} alt="Close icon" />
                                <h4>
                                    Pasta Carbonara with Shrimps
                                </h4>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptatum nihil itaque impedit, hic quaerat dolorem asperiores at sequi totam quis quod expedita, ad, dolores corrupti a nemo suscipit. Veritatis.
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
                {menu.map((item) => (
                    <li key={item.id} onClick={() => setModalIsOpen(true)}>
                        <MenuItem />
                    </li>
                ))}
            </S.MenuList>
        </S.MenuContainer>
    )
}

export default ShopMenu