import * as S from './styles'

import star from '../../assets/images/star.svg'
import leaf from '../../assets/images/leaf.svg'

const ShopCard = ({ id, title, image, tag, vegan, meals, description, reviews }: ShopCard) => {

    const getRating = (data: Reviews[]) => {
        let totalStars = 0
        data.map((item) => (
            totalStars = totalStars + item.stars
        ))

        return (totalStars / data.length).toFixed(1)
    }

    return (
        <S.CardContainer onClick={() => alert(`Go to shop ${id}: ${title}`)}>
            <S.Image style={{ backgroundImage: `url(${image})` }}>
                <div className='mainTagContainer'>
                    {vegan && <button className='vegan'><img src={leaf} alt="Leaf icon" /> Vegan</button>}
                    {tag && <button className='mainTag'>Best seller</button>}
                </div>
                <ul className='mealsTagContainer'>
                    {meals.map((item) => (
                        <li key={item}>
                            <button className='mealTag'>{item}</button>
                        </li>
                    ))}
                </ul>
            </S.Image>
            <S.CardContent>
                <S.Title className='shopTitle'>{title}</S.Title>
                <S.Description>
                    <p>
                        {description.length > 274 ? description.slice(0, 274) + '... read more' : description}
                    </p>
                    <S.Rating>
                        <span>{getRating(reviews)}</span>
                        <img src={star} alt="Star icon" />
                    </S.Rating>
                </S.Description>
            </S.CardContent>
        </S.CardContainer>
    )
}

export default ShopCard