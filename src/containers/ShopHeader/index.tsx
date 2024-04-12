import { useState } from 'react'

import ReviewBox from '../../components/ReviewBox'

import * as S from './styles'

import star from '../../assets/images/star.svg'
import close from '../../assets/images/close.svg'
import user from '../../assets/images/user.svg'

const InsideShop = ({ title, reviews, image, description }: ShopHeader) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

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

        lastThreeReviews = latestReviews.map((user, index) => (
            <ReviewBox key={index}
                id={index}
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
            {modalIsOpen &&
                <div className="fullscreen fadeIn">
                    <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
                    <S.ReviewModal className='modal'>
                        <img onClick={() => setModalIsOpen(false)} className='close' src={close} alt="Close icon" />
                        <ul>
                            {
                                reviews.map((review, index) => (
                                    <li key={index}>
                                        <img src={review.photo ? review.photo : user} alt="User picture" />
                                        <S.ReviewContent>
                                            <div className="reviewTItle">
                                                <h4>{review.name}</h4>
                                                <div className="stars">
                                                    {review.stars}
                                                </div>
                                            </div>
                                            <p>
                                                {review.comment}
                                            </p>
                                        </S.ReviewContent>
                                    </li>
                                )).reverse()
                            }
                        </ul>
                    </S.ReviewModal>
                </div>
            }

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
                        Latest reviews (Total: {reviews.length})
                        <ul className='reviewList'>
                            {getLatestReviews(reviews)}
                        </ul>
                        <span className='moreReviews' onClick={() => setModalIsOpen(true)}>Read more</span>
                    </S.Reviews>
                </S.Description>
            </S.BottomContainer>
        </>
    )
}

export default InsideShop