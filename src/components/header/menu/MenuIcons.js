import React from 'react';
import Moon from '../../../images/menu/moon.svg'
import Github from '../../../images/menu/github.svg'
import Save from '../../../images/menu/save.svg'

const MenuIcons = ()=>{
    return(
        <ul>
            <li>
                <img src={Moon}/>
            </li>
            <li>
                <img src={Github}/>
            </li>
            <li>
                <img src={Save}/>
            </li>
        </ul>
    )
}

export default MenuIcons;