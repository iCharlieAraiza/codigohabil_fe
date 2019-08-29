import React from 'react'

import Logo from '../header/logo';
import NewDesk from '../../images/new-desk.svg';
import MenuIcons from '../header/menu/MenuIcons';

const Header = ()=>{
    return(
        <header>
        <div className="navbar-section">
            <div className="container">
                <div id="menu-container" className="row align-items-center">
                        <div id="menu-btn" className="hamburger-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="logo">
                            <Logo></Logo>
                        </div>
                        
                        <div className="content-menu">
                            
                            <div className="menu-elements">
                                <MenuIcons></MenuIcons>
                            </div>
        
                            <div className="profile-btn">
                                <a href="" class="btn btn-outline-light">Iniciar Sesión</a>
                            </div>

                        </div>
                
                    </div>
                </div> 
            </div>

            <div className="content-header container">
                <div className="row">
                    <div className="col-xl-6">
                        <h2 className="mb-2">Aprender a <span class="yellow">programar</span> y 
                            <div className="slide">
                                <div className="wrapper">
                                    <div className="element"> desarrollar aplicaciones</div>
                                    <div className="element"> crear videojuegos</div>
                                    <div className="element"> desarrollar software</div>
                                    <div className="element"> mucho más</div>
                                </div>
                            </div></h2>   
                        <h3>Aquí encontrarás artículos, tutoriales, ejercicios y consejos que te ayudaran a mejorar tus habilidades como programador</h3> 
                        <div className="btn btn-primary mt-3 px-4 btn-blue">Ver más</div>
                    </div>
                    <div className="col-lg-6 h-banner-img d-xl-block">
                        <img src={NewDesk} alt="" srcset=""/>
                    </div>
                </div>
            </div>

        
            <div className="overlay-backgorund">

        </div>

        </header>
    )
} 

export default Header;