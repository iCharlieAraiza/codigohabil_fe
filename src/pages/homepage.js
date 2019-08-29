import React from 'react';
import '../components/scss/style.scss';

import Laptop from '../images/laptop.svg'
import Header from '../components/homepage/header'

//Componentes 
import LanguagesBlocks from '../components/homepage/languagesblocks';
import DescriptionSection from '../components/homepage/description';
import Footer from '../components/footer/footer'



const Homepage = (props)=>{
    return (<div>{
            props.children}
            <div id="homepage">
                
                <Header></Header>

                <LanguagesBlocks></LanguagesBlocks>

                <DescriptionSection></DescriptionSection>

                <section class="background-main-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 offset-md-6">
                                <img src={Laptop} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer></Footer>
            
            </div>
        </div>
        )
}

export default Homepage;