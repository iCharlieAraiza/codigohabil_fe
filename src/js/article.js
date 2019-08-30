module.exports = ()=>{

    const article = document.querySelector('article'),
      listContainer = document.querySelector('.dynamic-list-wrapper'),
      titleArticle = document.querySelector('#post h1'),
      headerTitle = document.querySelector('#header-title-bar'),
      progressBar = document.getElementById("progressBar"),
      showMenuBtn = document.getElementById("showMenuBtn"),
      searchFormHeader = document.getElementById("searchFormHeader"),
      btnMenu = document.getElementById("menu-btn"),
      contentMenu = document.querySelector(".content-menu"),

      scrollHeight = document.documentElement.scrollHeight,
      scroll = document.documentElement.clientHeight,
      fixedHeigt = (scrollHeight-scroll)/100;




const subNewString = (string, number)=>{
    const ellipsis = + (number<string.length-3) ? '…' : '';
    return string.substring(0,number) + ellipsis;
}



/*
    Instruictions
*/

if(article!= null){
    const childenElemnts = article.children;
    let h2exist;
    let firstElement = true; 

for(i=0; i<childenElemnts.length; i++){
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
        if(firstElement===true) a.className = "nav-link active", firstElement=!firstElement;

        list.appendChild(a);
        listContainer.appendChild(list);
    }
}

}




document.addEventListener("scroll", ()=>{
    
    if(window.scrollY < titleArticle.offsetTop+20){
        listContainer.firstElementChild.firstChild.className="nav-link active";
        headerTitle.style.top="-90px";
    }if(window.scrollY > titleArticle.offsetTop+550){
        headerTitle.style.top="0";
    }

    if(progressBar){
        progressBar.style.width = Math.round(window.scrollY/fixedHeigt)+"%";
    }

});


// Encontrar la posicion absoluta

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}

//Mostrar el menú

if(showMenuBtn!=null){
    showMenuBtn.addEventListener('click', ()=>{
        alert("Holo como estais perro")
        if(showMenuBtn.classList.contains('active')){
            showMenuBtn.className = '';
            searchFormHeader.style.display = "block";
        }else{
           showMenuBtn.className = 'active';
           searchFormHeader.style.display = "none";
        }
    })
}


btnMenu.addEventListener("click", ()=>{
    if(contentMenu.id !== 'active'){
        contentMenu.style.display = "flex";
        contentMenu.style.width = "100%";
        contentMenu.id="active";

    }else{
        contentMenu.style.display = "";
        contentMenu.style.width = "";
        contentMenu.id="";
    }

})
    
  }


