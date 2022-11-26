/* lista novedades */
function mostrarListaNovedades(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("ul"));

    novedades.forEach((pelicula) => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  `<p>título: ${pelicula.titulo} / director/a: ${pelicula.director}</p>
                                    <p>año: ${pelicula.año} / género: ${pelicula.genero} </p>
                                    <p>duración: ${pelicula.duracion} mins. / puntaje: ${pelicula.puntaje}</p>
                                    <p>vistas: ${pelicula.vistas}</p>
                                    <p>watchlist: ${pelicula.watchlist}</p>
                                    <p>favoritas: ${pelicula.favoritas}</p>
        `
        listaPelicula.appendChild(itemPelicula);
    })

    let divListaNovedades = document.getElementById("divListaNovedades");
    divListaNovedades.append(fragmento);
}
mostrarListaNovedades();
