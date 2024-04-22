import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currencyFormat } from '../../utils/currency'
import { addCart, removeCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { PageWrapper } from '../../styles'
import * as S from './styles'

import tick from '../../assets/images/tick.svg'

const Cart = () => {

    const dispatch = useDispatch()

    const cartItems = useSelector((state: RootReducer) => state.cart.cartItems)

    const [cartPage, setCartPage] = useState(1)

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

    const getPercentage = () => {
        if (cartPage === 1) {
            return '25%'
        } else if (cartPage === 2) {
            return '50%'
        } else if (cartPage === 3) {
            return '75%'
        } else if (cartPage === 4) {
            return '100%'
        }
    }

    return (
        <PageWrapper>
            <S.CartTitle className='shopTitle'>
                Cart
            </S.CartTitle>
            {cartItems.length > 0 ? (
                <>
                    {cartPage === 1 && (
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
                                <button className='checkoutBtn' onClick={() => setCartPage(2)}>Go to checkout</button>
                            </S.TotalContainer>
                        </>
                    )}

                    {cartPage === 2 && (
                        <>
                            <S.FormContainer>
                                <h3>Delivery Address</h3>
                                <label htmlFor="name">Full name</label>
                                <input type="text" id='name' name='name' />
                                <label htmlFor="street">Street</label>
                                <input type="text" id='street' name='street' />
                                <div className='formDivision'>
                                    <div>
                                        <label htmlFor="number">Number</label>
                                        <input type="text" id='number' name='number' />
                                    </div>
                                    <div>
                                        <label htmlFor="zip">Zip code</label>
                                        <input type="number" id='zip' name='zip' />
                                    </div>
                                </div>
                                <label htmlFor="phone">Contact number</label>
                                <input type="phone" id='phone' name='phone' />
                                <label htmlFor="complement">Complement (optional)</label>
                                <input type="text" id='complement' name='complement' />
                            </S.FormContainer>

                            <S.TotalContainer>
                                <span>{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'} - Total: {getFinalPrice()}</span>
                                <button className='checkoutBtn' onClick={() => setCartPage(1)}>Back to products list</button>
                                <button className='checkoutBtn' onClick={() => setCartPage(3)}>Go to payment</button>
                            </S.TotalContainer>
                        </>
                    )}

                    {cartPage === 3 && (
                        <>
                            <S.FormContainer>
                                <h3>Payment</h3>
                                <label htmlFor="nameOnCard">Name on card</label>
                                <input type="text" id='nameOnCard' name='nameOnCard' />
                                <label htmlFor="cardNumber">Card number</label>
                                <input type="number" id='cardNumber' name='cardNumber' />
                                <div className='formDivisionTrio'>
                                    <div>
                                        <label htmlFor="expMonth">Exp. month</label>
                                        <input type="number" id='expMonth' name='expMonth' />
                                    </div>
                                    <div>
                                        <label htmlFor="expYear">Exp. year</label>
                                        <input type="number" id='expYear' name='expYear' />
                                    </div>
                                    <div>
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="number" id='cvv' name='cvv' />
                                    </div>
                                </div>
                            </S.FormContainer>

                            <S.TotalContainer>
                                <span>{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'} - Total: {getFinalPrice()}</span>
                                <button className='checkoutBtn' onClick={() => setCartPage(2)}>Back to address</button>
                                <button className='checkoutBtn' onClick={() => setCartPage(4)}>Pay {getFinalPrice()}</button>
                            </S.TotalContainer>
                        </>
                    )}

                    {cartPage === 4 && (
                        <S.FinalScreen>
                            <img src={tick} alt="Tick icon" />
                            <h3>Your order has been placed!</h3>
                            <span>Order ID: 348723647832</span>
                            <p>
                                Thank you for ordering with us! You'll be receiving your food in no time, and you won't be charged any extra fees. Remember to wash your hands before touching your food and enjoy!
                            </p>
                        </S.FinalScreen>
                    )}

                    <S.ProgressBar>
                        <div className="fill" style={{ width: getPercentage() }}></div>
                    </S.ProgressBar>
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