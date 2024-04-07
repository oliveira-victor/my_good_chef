import * as S from './styles'

import star from '../../assets/images/star.svg'
import ReviewBox from '../../components/ReviewBox'

const InsideShop = () => {
    return (
        <>
            <S.TopContainer>
                <h2 className='shopTitle'>Vegan Garden</h2>
                <div>
                    <span>4.7</span>
                    <img src={star} alt="Star icon" />
                </div>
            </S.TopContainer>
            <S.BottomContainer>
                <div className='imgContainer'>
                    <img src="https://api-fake-vfo.vercel.app/mygoodchef/images/place-vegangarden.webp" alt="" />
                </div>
                <S.Description>
                    <p>
                        Indulge your sweet tooth at our dessert haven, where every bite is a heavenly delight! From decadent cakes to creamy gelato, our shop is a paradise for dessert lovers. Satisfy your cravings with our irresistible treats crafted with love and passion. Whether you're celebrating a special occasion or simply craving a sweet escape, our diverse menu promises to tantalize your taste buds. Come taste the magic at our dessert shop and experience a symphony of flavors that will leave you craving for more!
                    </p>
                    <S.Reviews>
                        Recent reviews (Total: 23)
                        <ul className='reviewList'>
                            <ReviewBox />
                            <ReviewBox />
                            <ReviewBox />
                        </ul>
                        <span className='moreReviews'>Read more</span>
                    </S.Reviews>
                </S.Description>
            </S.BottomContainer>
        </>
    )
}

export default InsideShop