import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import { PageWrapper } from '../../styles'
import * as S from './styles'

const Cart = () => {

    const cartItems = useSelector((state: RootReducer) => state.cart.cartItems)

    return (
        <PageWrapper>
            <S.CartTitle className='shopTitle'>
                Cart
            </S.CartTitle>
            {cartItems.length > 0 ? (
                <S.CartList>
                    <S.CartItem>
                        <div className="itemImg" style={{backgroundImage: `url(https://api-fake-vfo.vercel.app/mygoodchef/images/food/shrimps.webp)`}}>
                            <span className='amount'>x2</span>
                        </div>
                        <div className="itemContent">
                            <h3 className='itemTitle shopTitle'>Title</h3>
                            <div className="priceContainer">
                                <span>Price: 10</span>
                                <span>Total: 10</span>
                            </div>
                            <S.BtnsContainer>
                                <button>-</button>
                                <span>2</span>
                                <button>+</button>
                            </S.BtnsContainer>
                        </div>
                    </S.CartItem>
                </S.CartList>
            ) : (
                <S.EmptyCart>
                    Your shopping cart is empty.
                </S.EmptyCart>
            )}
        </PageWrapper>
    )
}

export default Cart