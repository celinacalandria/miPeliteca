/* mi Peliteca */

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
