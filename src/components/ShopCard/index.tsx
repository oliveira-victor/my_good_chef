import * as S from './styles'

import shopIgm from '../../assets/images/place-tasty.jpg'
import star from '../../assets/images/star.svg'

const ShopCard = () => {
    return (
        <S.CardContainer>
            <S.Image style={{ backgroundImage: `url(${shopIgm})` }}>
                <div className='mainTagContainer'>
                    <button className='mainTag'>Best seller</button>
                </div>
                <div className='mealsTagContainer'>
                    <button className='mealTag'>Desserts</button>
                    <button className='mealTag'>Snacks</button>
                </div>
            </S.Image>
            <S.CardContent>
                <S.Title>Tasty</S.Title>
                <S.Description>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repellendus ea recusandae temporibus quo aspernatur porro deleniti tempora placeat in a asperiores molestiae optio quia quisquam atque cum labore? Maxime!
                    </p>
                    <S.Rating>
                        <span>4.8</span>
                        <img src={star} alt="Star icon" />
                    </S.Rating>
                </S.Description>
            </S.CardContent>
        </S.CardContainer>
    )
}

export default ShopCard