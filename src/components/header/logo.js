import React from 'react';
import {Link} from 'gatsby';
import LogoImage from '../../images/logov2.svg'

const Logo = ()=>{
    return(
        <Link to="/">
            <img src={LogoImage}/>
        </Link>
    )
}

export default Logo;