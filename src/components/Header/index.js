import './style.scss';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <header className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <Link>
                        <img src={Logo} alt='Louislee Logo' />
                    </Link>
                </div>
                <div className='callToActions'>
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header