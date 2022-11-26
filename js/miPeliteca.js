/* miPeliteca */

// como quiero que funcione y no anda
// querria acceder al local storage para agarrar el array peliteca actualizado e imprimirlo pero salta undefined

function mostrarPeliteca(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));
    
    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));
   
    miPelitecaGuardada.forEach((pelicula) => {
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

    let divPeliteca = document.getElementById("divPeliteca");
    divPeliteca.append(fragmento);
}
mostrarPeliteca();


/* function mostrarPeliteca(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));
    
    // asi tampoco funciona porque me toma el array vacio como cuando lo declaro.
    // si pruebo con un lista precargada si funciona
    miPeliteca.forEach((pelicula) => {
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

    let divPeliteca = document.getElementById("divPeliteca");
    divPeliteca.append(fragmento);
}

mostrarPeliteca(); */
