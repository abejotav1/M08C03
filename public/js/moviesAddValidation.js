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

//    let forms = document.querySelector(".forms");

        formulario.addEventListener("submit",function(e){
            console.log("Aqui estas")
            e.preventDefault();
 
            let campoTitulo = document.querySelector("input#titulo");
            if (campoTitulo== ""){
                alert("El campo de titulo tiene que estar completo");

            }else if(campoNombre.value.length<3){
                alert("El campo de titulo debe tener al menos 3 caracteres")
            }

        });


})