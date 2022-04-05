import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

function NavbarBeforeLogin(){
    return(
        <div>
            <span className='logo-gconn-before-navbar'>
                <img src={logoGconn} alt="" />
                <span>
                    <h1>GCONN</h1>
                    <h3>LEADING GAMES ACCOUNT MARKETPLACE</h3>
                </span>
                
            </span>
        </div>
    );
}

export default NavbarBeforeLogin;