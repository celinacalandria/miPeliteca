// NOVEDADES
function mostrarListaNovedades(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("ul"));

    novedades.forEach((pelicula) => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  `<p>título: ${pelicula.titulo} / director/a: ${pelicula.director}</p>
                                    <p>año: ${pelicula.año} / género: ${pelicula.genero} </p>
                                    <p>duración: ${pelicula.duracion} mins. 
        `
        listaPelicula.appendChild(itemPelicula);
    })

    let divListaNovedades = document.getElementById("divListaNovedades");
    divListaNovedades.append(fragmento);
}
mostrarListaNovedades();

// RECOMENDADAS
function mostrarListaRecomendadas(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));
    
    let listada = miPelitecaGuardada.filter(pelicula => pelicula.recomendadas);

    listada.forEach(pelicula => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  ` <p>título: ${pelicula.titulo} / director/a: ${pelicula.director}</p>
                                    <p>año: ${pelicula.año} / género: ${pelicula.genero} </p>
                                    <p>duración: ${pelicula.duracion} mins / puntaje: ${pelicula.puntaje}</p>
                                    <p>vistas: ${pelicula.vistas}</p>
                                    <p>watchlist: ${pelicula.watchlist}</p>
                                    <p>favoritas: ${pelicula.favoritas}</p>
                                    
        `
        listaPelicula.appendChild(itemPelicula);
    });    

    let divListaRecomendadas = document.getElementById("divListaRecomendadas");
    divListaRecomendadas.append(fragmento);
}
mostrarListaRecomendadas();   