import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

function NavbarBeforeLogin(){
    let mouseMasuk = ()=>[
        
    ]

    return(
        <div>
            <div className='logo-gconn-before-navbar'>
                <img src={logoGconn} alt="" />
                <span>
                    <h1>GCONN</h1>
                    <h3>LEADING GAMES ACCOUNT MARKETPLACE</h3>
                </span>
                <span>
                </span>
            </div>
                    <i class="gg-home-alt" id='home' onMouseEnter={mouseMasuk}></i>
                    {/* <i class="gg-heart"></i>
                    <i class="gg-shopping-bag"></i>
                    <i class="gg-log-in"></i>
                    <i class="gg-user-add"></i>
                    <i class="gg-shopping-cart"></i> */}
        </div>
    );
}

export default NavbarBeforeLogin;