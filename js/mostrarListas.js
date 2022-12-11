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
        itemPelicula.innerHTML =  ` <p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins / Puntaje: ${pelicula.puntaje}</p>
                                    <p>Vistas: ${pelicula.vistas}</p>
                                    <p>Watchlist: ${pelicula.watchlist}</p>
                                    <p>Favoritas: ${pelicula.favoritas}</p>
                                    
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
        itemPelicula.innerHTML =  ` <p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins / Puntaje: ${pelicula.puntaje}</p>
                                    <p>Vistas: ${pelicula.vistas}</p>
                                    <p>Watchlist: ${pelicula.watchlist}</p>
                                    <p>Favoritas: ${pelicula.favoritas}</p>
                                    
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
        itemPelicula.innerHTML =  ` <p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins / Puntaje: ${pelicula.puntaje}</p>
                                    <p>Vistas: ${pelicula.vistas}</p>
                                    <p>Watchlist: ${pelicula.watchlist}</p>
                                    <p>Favoritas: ${pelicula.favoritas}</p>
                                    
        `
        listaPelicula.appendChild(itemPelicula);
    });    

    let divListaFavoritas = document.getElementById("divListaFavoritas");
    divListaFavoritas.append(fragmento);
}
mostrarListaFavoritas();

// RECOMENDADAS
function mostrarListaRecomendadas(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));
    
    let listada = miPelitecaGuardada.filter(pelicula => pelicula.recomendadas);

    listada.forEach(pelicula => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  ` <p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins / Guntaje: ${pelicula.puntaje}</p>
                                    <p>Vistas: ${pelicula.vistas}</p>
                                    <p>Watchlist: ${pelicula.watchlist}</p>
                                    <p>Favoritas: ${pelicula.favoritas}</p>
                                    
        `
        listaPelicula.appendChild(itemPelicula);
    });    

    let divListaRecomendadas = document.getElementById("divListaRecomendadas");
    divListaRecomendadas.append(fragmento);
}
mostrarListaRecomendadas();   
