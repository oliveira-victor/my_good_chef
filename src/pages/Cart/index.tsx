import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { currencyFormat } from '../../utils/currency'
import { addCart, clear, removeCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'

import { PageWrapper } from '../../styles'
import * as S from './styles'

import tick from '../../assets/images/tick.svg'
import PaymentBtn from '../../components/PaymentBtn'

const Cart = () => {

    const dispatch = useDispatch()

    const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()

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

    const resetCart = () => {
        if (cartPage > 1) {
            setCartPage(1)
        }
        return 'Your shopping cart is empty.'
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

    const goToPayment = () => {
        if (!form.isValid || !form.dirty) {
            alert('Please, fill in the required fields.')
        } else {
            setCartPage(3)
        }
    }

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    const form = useFormik({
        initialValues: {
            fullName: '',
            street: '',
            number: '',
            zip: '',
            phone: '',
            complement: '',
            nameOnCard: '',
            cardNumber: '',
            expMonth: '',
            expYear: '',
            cvv: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.string().required(),
            zip: Yup.string().required(),
            phone: Yup.string().required(),
            complement: Yup.string(),

            nameOnCard: Yup.string().when((_values, schema) => cartPage === 3 ? schema.required() : schema),
            cardNumber: Yup.string().when((_values, schema) => cartPage === 3 ? schema.min(16, '').max(16, '').required() : schema),
            expMonth: Yup.string().when((_values, schema) => cartPage === 3 ? schema.min(2, '').max(2, '').required() : schema),
            expYear: Yup.string().when((_values, schema) => cartPage === 3 ? schema.min(2, '').max(2, '').required() : schema),
            cvv: Yup.string().when((_values, schema) => cartPage === 3 ? schema.min(3, '').max(3, '').required() : schema)
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.fullName,
                    address: {
                        street: values.street,
                        houseNumber: values.number,
                        zipcode: Number(values.zip),
                        complement: values.complement,
                        phone: Number(values.phone)
                    }
                },
                payment: {
                    card: {
                        nameOnCard: values.nameOnCard,
                        cardNumber: values.cardNumber,
                        cvv: Number(values.cvv),
                        expires: {
                            month: Number(values.expMonth),
                            year: Number(values.expYear)
                        }
                    }
                },
                products: cartItems.map((item) => ({
                    id: item.id,
                    price: item.price
                }))
            })
        }
    })

    useEffect(() => {
        if (isSuccess) {
            setCartPage(4)
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    return (
        <PageWrapper>
            <S.CartTitle className='shopTitle'>
                Cart
            </S.CartTitle>

            <>
                {cartPage === 1 && cartItems.length > 0 && (
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
                                            <button type='button' onClick={() => dispatch(removeCart(product.id))}>-</button>
                                            <button type='button' onClick={() => dispatch(addCart(product))}>+</button>
                                        </S.BtnsContainer>
                                    </div>
                                </S.CartItem>
                            ))}

                        </S.CartList>
                        <S.TotalContainer>
                            <span>{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'} - Total: {getFinalPrice()}</span>
                            <button type='button' className='checkoutBtn' onClick={() => setCartPage(2)}>Go to checkout</button>
                        </S.TotalContainer>
                    </>
                )}

                <form onSubmit={form.handleSubmit}>
                    {cartPage === 2 && cartItems.length > 0 && (
                        <>
                            <S.FormContainer>
                                <h3>Delivery Address</h3>
                                <label htmlFor="fullName">Full name*</label>
                                <input
                                    type="text"
                                    id='fullName'
                                    name='fullName'
                                    value={form.values.fullName}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('fullName') ? 'error' : ''}
                                />
                                <label htmlFor="street">Street*</label>
                                <input
                                    type="text"
                                    id='street'
                                    name='street'
                                    value={form.values.street}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('street') ? 'error' : ''}
                                />
                                <div className='formDivision'>
                                    <div>
                                        <label htmlFor="number">Number*</label>
                                        <input
                                            type="text"
                                            id='number'
                                            name='number'
                                            value={form.values.number}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('number') ? 'error' : ''}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="zip">Zip code*</label>
                                        <input
                                            type="number"
                                            id='zip'
                                            name='zip'
                                            value={form.values.zip}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('zip') ? 'error' : ''}
                                        />
                                    </div>
                                </div>
                                <label htmlFor="phone">Contact number*</label>
                                <input
                                    type="phone"
                                    id='phone'
                                    name='phone'
                                    value={form.values.phone}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('phone') ? 'error' : ''}
                                />
                                <label htmlFor="complement">Complement (optional)</label>
                                <input
                                    type="text"
                                    id='complement'
                                    name='complement'
                                    value={form.values.complement}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('complement') ? 'error' : ''}
                                />
                            </S.FormContainer>

                            <S.TotalContainer>
                                <span>{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'} - Total: {getFinalPrice()}</span>
                                <div className='cartBtnsContainer'>
                                    <button type='button' className='returnBtn' onClick={() => setCartPage(1)}>Back to products list</button>
                                    <button type='button' className='checkoutBtn' onClick={goToPayment}>Go to payment</button>
                                </div>
                            </S.TotalContainer>
                        </>
                    )}

                    {cartPage === 3 && cartItems.length > 0 && (
                        <>
                            <S.FormContainer>
                                <h3>Payment</h3>
                                <label htmlFor="nameOnCard">Name on card*</label>
                                <input
                                    type="text"
                                    id='nameOnCard'
                                    name='nameOnCard'
                                    value={form.values.nameOnCard}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('nameOnCard') ? 'error' : ''}
                                />
                                <label htmlFor="cardNumber">Card number*</label>
                                <input
                                    type="number"
                                    id='cardNumber'
                                    name='cardNumber'
                                    value={form.values.cardNumber}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                                />
                                <div className='formDivisionTrio'>
                                    <div>
                                        <label htmlFor="expMonth">Exp. month*</label>
                                        <input
                                            type="number"
                                            id='expMonth'
                                            name='expMonth'
                                            value={form.values.expMonth}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('expMonth') ? 'error' : ''}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="expYear">Exp. year*</label>
                                        <input
                                            type="number"
                                            id='expYear'
                                            name='expYear'
                                            value={form.values.expYear}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('expYear') ? 'error' : ''}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvv">CVV*</label>
                                        <input
                                            type="number"
                                            id='cvv'
                                            name='cvv'
                                            value={form.values.cvv}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('cvv') ? 'error' : ''}
                                        />
                                    </div>
                                </div>
                            </S.FormContainer>

                            <S.TotalContainer>
                                <span>{cartItems.length} {cartItems.length > 1 ? 'items' : 'item'} - Total: {getFinalPrice()}</span>
                                <div className="cartBtnsContainer">
                                    <button type='button' className='returnBtn' onClick={() => setCartPage(2)}>Back to address</button>
                                    <PaymentBtn
                                        type='submit'
                                        onClick={form.handleSubmit}
                                        disabled={isLoading}
                                        content={isLoading ? 'Processing...' : `Pay ${getFinalPrice()}`}
                                    />
                                </div>
                            </S.TotalContainer>
                        </>
                    )}
                </form>

                {cartPage === 4 && (
                    <S.FinalScreen>
                        <img src={tick} alt="Tick icon" />
                        <h3>Your order has been placed!</h3>
                        <span>Order ID: {data?.orderId}</span>
                        <p>
                            Thank you for ordering with us! You'll be receiving your food in no time, and you won't be charged any extra fees. Remember to wash your hands before touching your food and bon appétit!
                        </p>
                    </S.FinalScreen>
                )}

                {cartItems.length > 0 || cartPage === 4 ? (
                    <S.ProgressBar>
                        <div className="fill" style={{ width: getPercentage() }}></div>
                    </S.ProgressBar>
                ) : ('')}
            </>

            {cartItems.length === 0 && cartPage != 4 && (
                <S.EmptyCart>
                    {resetCart()}
                </S.EmptyCart>
            )}
        </PageWrapper>
    )
}

export default Cart