import React from 'react';

import MenuIcons from './menu/MenuIcons'
import Logo from './logo';

const Header= ()=>{
    return(
        <header>
        <div class="navbar-section">
           <div class="container">
               <div id="menu-container" class="row align-items-center">
                    
                    <div id="menu-btn" class="hamburger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="logo">
                        <Logo></Logo>
                    </div>
                    
                    <div class="content-menu">
                        
                        <div class="menu-elements">
                            <MenuIcons></MenuIcons>
                        </div>
    
                        <div class="profile-btn">
                            <a href="" class="btn btn-outline-light">Iniciar Sesión</a>
                        </div>

                    </div>
               
                </div>
           </div> 
        </div>
    </header>
    )
}

export default Header;