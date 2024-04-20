import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { openFav } from '../../store/reducers/favoritesModal'
import MenuModal from '../../components/MenuModal'

import * as S from './styles'

const Favorites = () => {

    const favIsOpen = useSelector((state: RootReducer) => state.favModal.favIsOpen)
    const favoritesList = useSelector((state: RootReducer) => state.favorites.favoritesList)

    const dispatch = useDispatch()

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState<MenuItem>({
        id: 0,
        title: "",
        image: "",
        mealInfo: "",
        price: 0,
        previousPrice: 0
    })

    const handleModal = (data: MenuItem) => {
        setModalData({
            id: data.id,
            title: data.title,
            image: data.image,
            mealInfo: data.mealInfo,
            price: data.price,
            previousPrice: data.previousPrice
        })
        setModalIsOpen(true)
        dispatch(openFav(false))
    }

    return (
        <>
            {modalIsOpen && (
                <MenuModal 
                data={modalData} 
                setModalIsOpen={setModalIsOpen}
            />
            )}

            {favIsOpen &&
                <div className="fullscreen">
                    <div className="overlay fadeIn" onClick={() => dispatch(openFav(false))}> </div>
                    <S.Favorites>
                        {favoritesList.length > 0 ? (
                            <ul>
                                {favoritesList.map((fav) => (
                                    <S.favItem key={fav.id}>
                                        <img
                                            src={fav.image}
                                            alt={fav.title}
                                            title={fav.title}
                                            onClick={() => handleModal(fav)}
                                        />
                                    </S.favItem>
                                ))}
                            </ul>
                        ) : (
                            <p className='emptyFavorites'>
                                Your favorites list is empty.
                            </p>
                        )}
                    </S.Favorites>
                </div>
            }
        </>
    )
}

export default Favorites