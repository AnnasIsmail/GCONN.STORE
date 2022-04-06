import HomeIcon from '../../image/icon/home/home';
import MarketIcon from '../../image/icon/market/market';
import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

function NavbarBeforeLogin(){

    return(
        <div className='navbar'>
            <span className='logo-gconn-before-navbar'>
                <img src={logoGconn} alt="" />
                <span>
                    <h1>GCONN</h1>
                    <h3>LEADING GAMES ACCOUNT MARKETPLACE</h3>
                </span>
            </span>
            <div><HomeIcon /> <h3>Home</h3></div>
            <div><MarketIcon /> <h3>Market</h3></div>
        </div>
    );
}

export default NavbarBeforeLogin;