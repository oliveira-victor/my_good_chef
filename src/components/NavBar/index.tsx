import * as S from './styles'

const NavBar = () => {

    return (
        <S.Nav>
            <S.NavContainer className="container">
                <button>All</button>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
                <button>Desserts</button>
                <button>Snacks</button>
            </S.NavContainer>
        </S.Nav>
    )
}

export default NavBar