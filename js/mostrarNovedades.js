// NOVEDADES
function mostrarListaNovedades(){
    let fragmento = document.createDocumentFragment();
    let listaPelicula = fragmento.appendChild(document.createElement("div"));

    novedades.forEach((pelicula) => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  `<p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins. </p>
        `
        let aPelicula = document.createElement("a");
        aPelicula.setAttribute("class", "aPelicula");
        aPelicula.setAttribute("href", `../pags/info.html#${pelicula.titulo}`) //no me lleva al id deseado
        aPelicula.innerHTML = `<p> + info </p>`;
        
        itemPelicula.appendChild(aPelicula);
        listaPelicula.appendChild(itemPelicula);
    })

    let divListaNovedades = document.getElementById("divListaNovedades");
    divListaNovedades.append(fragmento);
}
mostrarListaNovedades();

