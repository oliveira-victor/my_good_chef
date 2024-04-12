import * as S from './styles'

import star from '../../assets/images/star.svg'
import user from '../../assets/images/user.svg'

type Props = {
    id: number
    name: string
    photo?: string
    stars: number
    comment: string
}

const ReviewBox = ({ id, name, photo, comment, stars }: Props) => {

    const starsGiven = []

    for (let i = 0; i < stars; i++) {
        starsGiven.push(<img src={star} alt="Star icon" />)
    }

    return (
        <S.ReviewBox key={id}>
            <img className='userImg' src={photo ? photo : user} alt="User image" />
            <div>
                <div className='reviewBoxTitle'>
                    <h3>{name}</h3>
                    <div className="starsContainer">
                        {starsGiven.map((star, index) => (
                            <span key={index}>{star}</span>
                        ))}
                    </div>
                </div>
                <p className='reviewText'>
                    {comment.length > 90 ? comment.slice(0, 90) + "..." : comment}
                </p>
            </div>
        </S.ReviewBox>
    )
}

export default ReviewBox