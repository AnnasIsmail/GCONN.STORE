import HomeIcon from '../../image/icon/home';
import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

function NavbarBeforeLogin(){

    return(
        <div>
            <div className='logo-gconn-before-navbar'>
                <img src={logoGconn} alt="" />
                <span>
                    <h1>GCONN</h1>
                    <h3>LEADING GAMES ACCOUNT MARKETPLACE</h3>
                </span>
            </div>
            <HomeIcon />
        </div>
    );
}

export default NavbarBeforeLogin;