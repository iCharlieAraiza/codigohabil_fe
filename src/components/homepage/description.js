import React from 'react'

import Desk from '../../images/screen-coding.svg'

const DescriptionSection = ()=>{
    return(
        <section class="section-descritpion">
        <div class="container">
            <div class="row section-2">
                <div class="col-lg-4 display">
                    <img src={Desk} alt="" srcset=""/>
                </div>
                <div class="col-lg-7 offset-lg-1">
                    <h2><span class="circle-title"></span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis corrupti a minus officiis amet distinctio fuga optio laboriosam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing sdsd sdadsadas dsds.</p>
                </div>
            </div>
        </div>
    </section>

    )
} 

export default DescriptionSection;