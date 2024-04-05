import * as S from './styles'

import star from '../../assets/images/star.svg'

type Props = {
    title: string
    image: string
    tag: boolean
    meals: string[]
    description: string
    rating: number
}

const ShopCard = ({ title, image, tag, meals, description, rating }: Props) => {
    return (
        <S.CardContainer>
            <S.Image style={{ backgroundImage: `url(${image})` }}>
                <div className='mainTagContainer'>
                    {tag && <button className='mainTag'>Best seller</button>}
                </div>
                <div className='mealsTagContainer'>
                    {meals.map((item) => (
                        <button key={item} className='mealTag'>{item}</button>
                    ))}
                </div>
            </S.Image>
            <S.CardContent>
                <S.Title>{title}</S.Title>
                <S.Description>
                    <p>
                        {description.length > 274 ? (description.slice(0, 274) + '...') : (description)}
                    </p>
                    <S.Rating>
                        <span>{rating}</span>
                        <img src={star} alt="Star icon" />
                    </S.Rating>
                </S.Description>
            </S.CardContent>
        </S.CardContainer>
    )
}

export default ShopCard