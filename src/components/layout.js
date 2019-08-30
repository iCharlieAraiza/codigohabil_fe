import React from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const Layout = (props)=>{
    
    return(
        <div id={props.type}>
            <Header></Header>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
        </div>
    );

}

export default Layout;