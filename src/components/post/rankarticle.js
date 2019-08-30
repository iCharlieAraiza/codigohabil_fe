import React from 'react'

//Components
import Up from '../../images/icon/up.svg'
import Down from '../../images/icon/down.svg'

const RankArticle = ()=>{
    return(
        <div class="rank-article ">
            <div class="title">
                ¿Te ha servido el artículo?
            </div>
            <div class="buttons-block mt-3">
                <button id="up">
                        <img src={Up}/>
                </button>
                <button id="down">
                    <span>
                        <img src={Down}/>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default RankArticle;