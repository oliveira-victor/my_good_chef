import * as S from './styles'

const MenuItem = () => {
    return (
        <S.MenuItem>
            <img src="https://th.bing.com/th/id/OIG4.UrH7CaUXHf23hsyG538x?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Food picture" />
            <div className="dishTitle">
                <h4>Pasta Carbonara with shrimps</h4>
                <div className="price">
                    <span className='previousPrice'>$ 25.0</span>
                    <span>$ 20.0</span>
                </div>
            </div>
        </S.MenuItem>
    )
}

export default MenuItem