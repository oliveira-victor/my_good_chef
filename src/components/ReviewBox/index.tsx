import * as S from './styles'

import star from '../../assets/images/star.svg'

import user1 from '../../assets/images/user01.webp'

const ReviewBox = () => {
    return (
        <S.ReviewBox>
            <img className='userImg' src={user1} alt="User image" />
            <div>
                <div className='reviewBoxTitle'>
                    <h3>James</h3>
                    <div className="starsContainer">
                        <img src={star} alt="Star icon" />
                        <img src={star} alt="Star icon" />
                        <img src={star} alt="Star icon" />
                        <img src={star} alt="Star icon" />
                        <img src={star} alt="Star icon" />
                    </div>
                </div>
                <p>
                    Excellent place! I recommend it.
                </p>
            </div>
        </S.ReviewBox>
    )
}

export default ReviewBox