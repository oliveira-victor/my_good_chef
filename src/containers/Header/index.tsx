import * as S from './styles'

import logo from '../../assets/images/logo.webp'
import tray from '../../assets/images/tray.svg'

const Header = () => {
    return (
        <S.Header>
            <div className="headerContainer container">
                <h1>
                    <img className='logo' src={logo} alt="My Good Chef" />
                </h1>
                <S.Tray>
                    <img onClick={() => alert('Open cart')} src={tray} alt="Tray icon" />
                    <div className="bubble">
                        3
                    </div>
                </S.Tray>
            </div>
        </S.Header>
    )
}

export default Header
