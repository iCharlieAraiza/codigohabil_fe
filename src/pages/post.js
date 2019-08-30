import React,{Component} from 'react';
import Layout from '../components/layout'

//Post components 
import PageHeader from '../components/post/pageheader'
import Content from '../components/post/content'

class Posts extends Component {

    componentDidMount(){
 
        const   article = document.querySelector('article'),
                titleArticle = document.querySelector('#post h1'),
                scrollHeight = document.documentElement.scrollHeight,
                listContainer = document.querySelector('.dynamic-list-wrapper'),
                headerTitle = document.querySelector('#header-title-bar');

        const subNewString = (string, number)=>{
            const ellipsis = + (number<string.length-3) ? '…' : '';
            return string.substring(0,number) + ellipsis;
        }

        if(article!= null){
            const childenElemnts = article.children;
            let h2exist;
            let firstElement = true; 
        
            for(let i=0; i<childenElemnts.length; i++){
                let tag = childenElemnts[i].tagName
                
                if(tag==="H2") h2exist=true;
            
                if(tag==="H2" || tag==="H3"){
                    childenElemnts[i].id=`post-${i-1}`;
            
                    const list = document.createElement('li'),
                        a = document.createElement('a');
                    
                    a.textContent = subNewString(childenElemnts[i].textContent,45);
                    a.href="#"+childenElemnts[i].id;
                    a.className="nav-link";
            
                    if(tag==="H3" && h2exist) list.className= 'indented';
                    
                    if(firstElement===true) {
                        a.className = "nav-link active"
                        firstElement=!firstElement;
                    }
            
                    list.appendChild(a);
                    listContainer.appendChild(list);
                }
            }
        
        }


        document.addEventListener("scroll", ()=>{    
            
            document.addEventListener("scroll", ()=>{
                
                if(window.scrollY < titleArticle.offsetTop+20){
                    
                    headerTitle.style.top="10";
                    
                }
                

            });

        });
    
    }

    render(){
        return(
            <Layout type="post">
    
                <PageHeader></PageHeader>
            
                <Content></Content>
                
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="./js/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                <script src="./js/prism.js"></script>

            </Layout>
        );
    }
} 

export default Posts;