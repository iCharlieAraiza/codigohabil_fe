import React from 'React'

//Component 
import Search from '../../images/icon/search.svg'


const PageHeader = () =>{
    return(
        <div class="post-search-header">
            <div class="container pr-0">
                
                <div class="category-title">
                    <span><a href="">Category 1</a></span>
                </div>
                
                <div class="show-search-btn">
                    <button id="showMenuBtn" class="active">
                    </button>
                </div>

                <div class="search-box">
                    <form method="GET" class="d-md-block" id="searchFormHeader">
                            <input type="text" placeholder="Buscar"/>
                            <button>
                                <img src={Search}/>
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;