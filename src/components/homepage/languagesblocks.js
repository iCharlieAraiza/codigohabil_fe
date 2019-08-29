import React from 'react';

import Javascript from '../../images/logos/javascript-original.svg';
import PHP from '../../images/logos/php-original.svg';
import Csharp from '../../images/logos/csharp-original.svg';
import CSS from '../../images/logos/css3-original.svg';
import Git from '../../images/logos/git-original.svg';
import Python from '../../images/logos/python-original.svg';
import ReactImg from '../../images/logos/react-original.svg';

const LanguagesBlocks = ()=>{
    return(
        <section>
            <div className="container">
                <div className="row content-section section-1">
                    <div className="col-lg-4 content">
                        <h2 className="mb-2"><span class="circle-title"></span>Temas que te pueden interesar</h2>
                        <p>Tópicos, cursos, prácticas y artículos relacionados con la programación y el aprendizaje. Desde nivel básico hasta avanzado.</p>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <div className="row">
                            <div className="col-6 col-md-3 card-container">
                                <div className="card-lang">
                                    <img src={Javascript} alt="" srcset=""/>
                                    <h4>Javascript</h4>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 card-container">
                                <div className="card-lang">
                                    <img src={PHP}/>
                                    <h4>PHP</h4>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 card-container">
                                <div className="card-lang">
                                    <img src={Csharp}/>
                                    <h4>C#</h4>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 card-container">
                                <div className="card-lang">
                                    <img src={CSS}/>
                                    <h4>CSS</h4>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 card-container">
                                <div className="card-lang">
                                    <img src={Git}/>
                                    <h4>Git</h4>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 card-container">
                                <div className="card-lang">
                                    <img src={Python}/>
                                    <h4>Python</h4>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 card-container">
                                <div className="card-lang">
                                    <img src={ReactImg}/>
                                    <h4>React</h4>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 card-container">
                                <div className="card-lang last-card-lang">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           

            </div>
        </section>
    )
} 

export default LanguagesBlocks;