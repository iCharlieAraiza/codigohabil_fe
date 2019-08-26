import React from 'react';
import '../components/scss/style.scss';
import Logo from '../images/logov2.svg';

const Homepage = (props)=>{
    return (<div>{
            props.children}
            
            <div id="page">
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
                                <img src={Logo} alt=""/>
                            </div>
                            
                            <div className="content-menu">
                                
                                <div className="menu-elements">

                                </div>
            
                                <div className="profile-btn">
                                    <a href="" className="btn btn-outline-light">Iniciar Sesión</a>
                                </div>

                            </div>
                    
                        </div>
                </div> 
                </div>
            </header>
            </div>

        </div>)
}

export default Homepage;