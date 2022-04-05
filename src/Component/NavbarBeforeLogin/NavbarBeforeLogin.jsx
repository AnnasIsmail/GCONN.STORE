import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

function NavbarBeforeLogin(){
    return(
        <div>
            <span>
                <img className='logo-gconn-before-navbar' src={logoGconn} alt="" />
            </span>
        </div>
    );
}

export default NavbarBeforeLogin;