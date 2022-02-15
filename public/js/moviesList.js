window.addEventListener("load",function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let logoDH = document.querySelector(".logo-DH")

    logoDH.addEventListener("mouseover",function(){
        let modo = confirm('Desea modo oscuro');
        if(modo){
            body.style.backgroundColor = '#7f7f7f'
            body.classList.add('fondoMoviesList');
        }
        
        console.log(body);
        moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
        moviesListTitulo.style.color ='white';
        moviesListTitulo.style.backgroundColor = 'teal';
        moviesListTitulo.style.padding = '20px';
    })

})