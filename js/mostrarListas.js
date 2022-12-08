/* mostrar listas */

// VISTAS
function mostrarListaVistas(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));

    let listada = miPelitecaGuardada.filter(pelicula => pelicula.vistas);

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

    let divListaVistas = document.getElementById("divListaVistas");
    divListaVistas.append(fragmento);
}
mostrarListaVistas();

// WATCHLIST
function mostrarListaWatchlitst(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));

    let listada = miPelitecaGuardada.filter(pelicula => pelicula.watchlist);

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

    let divListaWatchlist = document.getElementById("divListaWatchlist");
    divListaWatchlist.append(fragmento);
}
mostrarListaWatchlitst();

// FAVORITAS
function mostrarListaFavoritas(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));

    let listada = miPelitecaGuardada.filter(pelicula => pelicula.favoritas);

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

    let divListaFavoritas = document.getElementById("divListaFavoritas");
    divListaFavoritas.append(fragmento);
}
mostrarListaFavoritas();


