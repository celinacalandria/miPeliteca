/* mostrar listas */

/* lista vistas*/
function mostrarListaVistas(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    //funciona bien porque utilizo el array
    miListaVistas.forEach((pelicula) => {
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

    let divListaVistas = document.getElementById("divListaVistas");
    divListaVistas.append(fragmento);

}
mostrarListaVistas();

/* lista watchlist */
function mostrarListaWatchlitst(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    miListaWatchlist.forEach((pelicula) => {
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

    let divListaWatchlist = document.getElementById("divListaWatchlist");
    divListaWatchlist.append(fragmento);
}
mostrarListaWatchlitst();

/* lista favoritas */
function mostrarListaFavoritas(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    miListaFavoritas.forEach((pelicula) => {
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

    let divListaFavoritas = document.getElementById("divListaFavoritas");
    divListaFavoritas.append(fragmento);
}
mostrarListaFavoritas();

/* lista recomendadas */
function mostrarListaRecomendadas(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    miListaRecomendadas.forEach((pelicula) => {
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

    let divListaRecomendadas = document.getElementById("divListaRecomendadas");
    divListaRecomendadas.append(fragmento);
}
mostrarListaRecomendadas();
