import * as S from './styles'

type Props = {
    title: string
    image: string
    price: number
    previousPrice?: number
}

const MenuItem = ({title, image, price, previousPrice}: Props) => {
    return (
        <S.MenuItem>
            <img src={image} alt="Food picture" />
            <div className="dishTitle">
                <h4 className='menuTitle'>{title}</h4>
                <div className="price">
                    {previousPrice ? <span className='previousPrice'>$ {previousPrice}</span> : <span>&nbsp;</span>}
                    <span>$ {price}</span>
                </div>
            </div>
        </S.MenuItem>
    )
}

export default MenuItem