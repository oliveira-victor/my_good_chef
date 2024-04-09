import * as S from './styles'

import star from '../../assets/images/star.svg'
import ReviewBox from '../../components/ReviewBox'

const InsideShop = ({ title, reviews, image, description }: ShopHeader) => {

    const getRating = (data: Reviews[]) => {
        let totalStars = 0
        data.map((item) => (
            totalStars = totalStars + item.stars
        ))

        return (totalStars / data.length).toFixed(1)
    }

    const getLatestReviews = (data: Reviews[]) => {
        let latestReviews = data.slice(-3)
        let lastThreeReviews = null

        lastThreeReviews = latestReviews.map((user) => (
            <ReviewBox key={user.id}
                    id={user.id}
                    name={user.name}
                    photo={user.photo}
                    comment={user.comment}
                    stars={user.stars}
                />
        ))

        return lastThreeReviews.reverse()
    }

    return (
        <>
            <S.TopContainer>
                <h2 className='shopTitle'>{title}</h2>
                <div>
                    <span>{getRating(reviews)}</span>
                    <img src={star} alt="Star icon" />
                </div>
            </S.TopContainer>
            <S.BottomContainer>
                <div className='imgContainer'>
                    <img src={image} alt="Shop image" />
                </div>
                <S.Description>
                    <p>
                        {description}
                    </p>
                    <S.Reviews>
                        Recent reviews (Total: {reviews.length})
                        <ul className='reviewList'>
                            {getLatestReviews(reviews)}
                        </ul>
                        <span className='moreReviews'>Read more</span>
                    </S.Reviews>
                </S.Description>
            </S.BottomContainer>
        </>
    )
}

export default InsideShop