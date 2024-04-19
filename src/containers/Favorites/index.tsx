import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { openFav } from '../../store/reducers/favoritesModal'

import * as S from './styles'

const Favorites = () => {

    const favIsOpen = useSelector((state: RootReducer) => state.favModal.favIsOpen)

    const favoritesList = useSelector((state: RootReducer) => state.favorites.favoritesList)

    const dispatch = useDispatch()

    return (
        <>
            {favIsOpen &&
                < div className="fullscreen" >
                    <div className="overlay fadeIn" onClick={() => dispatch(openFav(false))}> </div>
                    <S.Favorites>
                        {favoritesList.length > 0 ? (
                            <ul>
                                {favoritesList.map((fav) => (
                                    <S.favItem key={fav.id}>
                                        <img src={fav.image} alt={fav.title} title={fav.title} />
                                    </S.favItem>
                                ))}
                            </ul>
                        ) : (
                            <p className='emptyFavorites'>
                                Your favorites list is empty.
                            </p>
                        )}
                    </S.Favorites>
                </div >
            }
        </>
    )
}

export default Favorites