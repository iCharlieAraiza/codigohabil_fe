import React from 'react'

//Components
import RankArticle from './rankarticle'

const Content = ()=>{
    return(
        <div class="container">
        <div class="row">

            <div class="col-lg-3">
                <div class="dinamic-article-container d-lg-block">
                    <nav class="directory-article sidebar">
                        <h4>Temas del post</h4>
                        
                        <ul class="nav dynamic-list-wrapper nav" id="spy">
                        </ul>
                    
                    </nav>
                    
                    <div class="related-articles sidebar mt-4">
                        <h4>Artículos relacionados</h4>
                        <ul>
                            <li><a href="">Crear elmento hacia pruba de</a></li>
                            <li class="active"><a href="">Prueba 2</a></li>
                            <li><a href="">Prueba 3</a></li>

                        </ul>
                    </div>

                </div>
            </div>


            <div class="col-12 col-lg-9 article-content">
                <h1>Insertar un nuevo elemento en javascript</h1>
                <h2 class="pretext" id="content1">Introducción al articulo usando elementos</h2>
                <article>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, inventore magnam. Accusantium vitae recusandae ipsam totam incidunt eius dicta, eligendi, tempora quasi cumque id natus. Necessitatibus, facilis? Eos deserunt voluptatem tempora! Aut laborum odit ad.</p>
                    <p>Lorem ipsum dolor sit <b>ame sdasdas dasdat</b>, consectetur adipisicing elit. Ipsam, illo unde laborum et repellendus earum ut facilis ex.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam suscipit, ad quae praesentium consequatur numquam eius rerum doloremque inventore culpa tempora dolor ea, debitis in iste. Voluptas ipsum dignissimos placeat pariatur harum. Nesciunt fugiat accusantium pariatur ad. Consectetur incidunt id possimus cupiditate suscipit blanditiis deserunt.</p>
                    
                    <h2 id="content2">Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem <a href="">ipsum dolor sit amet</a> consectetur,  consequatur asperiores. Numquam in ducimus voluptate velit nulla rerum ipsum consequatur soluta optio inventore, ad possimus qui voluptatem, obcaecati perspiciatis aliquam nesciunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus nesciunt numquam quo doloribus tempore pariatur magnam nobis!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur vitae tenetur id aperiam accusamus eius iure, unde modi rerum, esse nobis laudantium dolorem ducimus expedita possimus officia, ipsa dolor quos.</p>

                    <p><em>Texto en cursiva</em></p> 

                    <ol>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                        <li>Doloribus sequi ratione aliquam impedit est? Temporibus.</li>
                        <li>Veritatis distinctio optio voluptate quod architecto voluptates.</li>
                        <li>Eius, fugit quod quasi praesentium obcaecati ipsa.</li>
                        <li>Eos cum error suscipit modi saepe quas!</li>
                        <li>Ipsum odit officia magnam voluptatibus facilis autem?</li>
                    </ol>

                    <h3 id="content3">Lorem ipsum dolor sit amet, possimus alias hic oluptatem tempore ipsa blanditiis!</h3>
                    
                    <img src="https://www.taniarascia.com/static/1196b1563a48f699ca40439dd8413cfc/35272/vue1.png" alt="" srcset=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae libero vero explicabo officia quae rerum sit temporibus aliquam!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi deleniti, saepe ad autem dolorem laboriosam corporis accusamus, molestiae, minima dolores sit veniam non! Numquam, adipisci.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur libero odit doloribus sed, cupiditate accusantium, autem sunt ex eos reiciendis quas, earum nesciunt? Veniam optio eaque ex? Inventore, nam?</p>

                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita!</li>
                        <li>Libero odit harum consectetur eligendi aliquid aspernatur iste alias minus.</li>
                        <li>Modi corporis nam odio hic nobis voluptatem, soluta quas minima.</li>
                        <li>Quaerat at repudiandae harum facilis amet assumenda hic ut optio.</li>
                    </ul>

                    <h3 class="list-number"> <span>1</span> Paso númeor primero</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error tempora sunt dolore et alias? Tenetur natus perspiciatis nesciunt facere.</p>

                    <h3 id="content4">Lorem ipsum dolor sit  tempore ipsa blanditiis!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae libero vero explicabo officia quae rerum sit temporibus aliquam!</p>
                    
                    <div class="block-text info">
                        <p>El artículo se está actualizando</p>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi deleniti, saepe ad autem dolorem laboriosam corporis accusamus, molestiae, minima dolores sit veniam non! Numquam, adipisci.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt dolores accusantium. Doloremque odio sunt qui architecto.</p>

                    <div class="warning block-text">
                        <div class="text-section">
                            <span>Warming element</span>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ducimus harum deserunt quasi veniam! Aut saepe facere dignissimos sit dolor dolores ratione quas id unde!</p>
                        </div>
                    </div>
                    <h2 id="content5">Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit, illo inventore quae placeat soluta doloribus hic aut quam maxime ratione, perspiciatis aliquam eligendi perferendis, iure laudantium deleniti quibusdam autem eos sunt! Voluptatem quos rerum corrupti sapiente, ipsam laborum doloremque ratione?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus repudiandae quis! Suscipit debitis nesciunt magnam facere esse quod fugiat ullam reiciendis nobis modi libero dolorum aperiam, porro voluptatum.</p>

<div class="filename">index.html</div>
<pre class="language-js"><code class="language-js">import React from 'react'
import HomePage from './HomePage'

)
}</code></pre>

                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae beatae possimus dolorem quo placeat debitis nulla perferendis ipsa qui eius hic rerum aliquid ducimus a omnis quis aut magni, autem obcaecati illum id. Cum!</p>
                </article>
                
                <RankArticle></RankArticle>

                <div class="footer-post py-3">
                    <div class="category-tab">
                        <span>Caregoría:</span>
                        <a href="http://" class="btn">Categoría 1</a>
                    </div>
                    <div class="tag-tab">
                        <span>Temas:</span>
                        <a href="http://" class="btn">Tema 1</a>
                        <a href="http://" class="btn">Tema 2</a>
                        <a href="http://" class="btn">Tema 3</a>
                    </div>
                </div>

            </div>
        </div>

        <div id="header-title-bar" >
            <div class="container">
                   <div class="hamburger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
                <div class="title-container d-sm-block">
                    <div class="reading">
                        Estas leyendo
                    </div>
                    <div class="title">
                        Titulo del artículo de prueba
                    </div>
                </div>

                <div class="shared-section">
                    <div class="icon facebook">
                    </div>
                    <div class="icon twitter">
                    </div>
                </div>        
            </div>
            
            <div id="progressBar"></div>
        </div>


    </div>
    )
}

export default Content;