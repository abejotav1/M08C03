window.addEventListener("load",function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let tituloH1 = document.querySelector(".moviesAddTitulo")

    tituloH1.addEventListener("mouseover",function(){
        tituloH1.style.color ='Green';
    })

    let formularioT = document.querySelector("#titulo")
    let estadosecreto = 0
    let palabraMagica = "secreto"
    let codigo = ""
 
   formularioT.addEventListener("keypress",function(e){
        codigo=codigo+e.key;
        console.log(codigo.length);
        if (codigo==palabraMagica){
            alert("SECRETO MAGICO")
        }
        
    })

})