import { useDispatch, useSelector } from 'react-redux'

import { currencyFormat } from '../../utils/currency'
import { addCart, removeCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { PageWrapper } from '../../styles'
import * as S from './styles'

const Cart = () => {

    const dispatch = useDispatch()

    const cartItems = useSelector((state: RootReducer) => state.cart.cartItems)

    const productsMap = cartItems.reduce((acc, curr) => {
        if (!acc[curr.id]) {
            acc[curr.id] = curr
        }
        return acc
    }, {} as { [key: number]: typeof cartItems[0] })

    const reducedProducts = Object.values(productsMap)

    const handleTotal = (dish: number, price: number) => {
        const getAmount = cartItems.filter(item => item.id === dish).length

        return price * getAmount
    }

    const getFinalPrice = () => {
        let priceSum = 0
        cartItems.map((item) => (
            priceSum += item.price
        ))

        return currencyFormat.format(priceSum)
    }

    return (
        <PageWrapper>
            <S.CartTitle className='shopTitle'>
                Cart
            </S.CartTitle>
            {cartItems.length > 0 ? (
                <>
                    <S.CartList>

                        {reducedProducts.map((product, index) => (
                            <S.CartItem key={index}>
                                <div className="itemImg" style={{ backgroundImage: `url(${product.image})` }}>
                                    <span className='amount'>x{cartItems.filter(item => item.id === product.id).length}</span>
                                </div>
                                <div className="itemContent">
                                    <h3 className='itemTitle shopTitle'>{product.title}</h3>
                                    <div className="priceContainer">
                                        <span>Price: {currencyFormat.format(product.price)}</span>
                                        <span>Total: {currencyFormat.format(handleTotal(product.id, product.price))}</span>
                                    </div>
                                    <S.BtnsContainer>
                                        <button onClick={() => dispatch(removeCart(product.id))}>-</button>
                                        <button onClick={() => dispatch(addCart(product))}>+</button>
                                    </S.BtnsContainer>
                                </div>
                            </S.CartItem>
                        ))}

                    </S.CartList>
                    <S.TotalContainer>
                        <span>{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'} - Total: {getFinalPrice()}</span>
                        <button className='checkoutBtn'>Proceed to checkout</button>
                    </S.TotalContainer>
                </>
            ) : (
                <S.EmptyCart>
                    Your shopping cart is empty.
                </S.EmptyCart>
            )}
        </PageWrapper>
    )
}

export default Cart