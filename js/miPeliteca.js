/* mi Peliteca */

// PELITECA ORIGINAL
let fragmentoPeliteca = document.createDocumentFragment();
let listaPelicula = fragmentoPeliteca.appendChild(document.createElement("div"));
    
let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));
   
miPelitecaGuardada.forEach((pelicula) => {
    let itemPelicula = document.createElement("p");
    itemPelicula.setAttribute("class", "pItemPelicula");
    itemPelicula.innerHTML =  `<p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                <p>Duración: ${pelicula.duracion} mins. / Puntaje: ${pelicula.puntaje}</p>
                                <p>Vistas: ${pelicula.vistas}</p>
                                <p>Watchlist: ${pelicula.watchlist}</p>
                                <p>Favoritas: ${pelicula.favoritas}</p>
    `
    listaPelicula.appendChild(itemPelicula);
})

let divPeliteca = document.getElementById("divPeliteca");
divPeliteca.append(fragmentoPeliteca);

// ORDENAR
let frag = document.createDocumentFragment();
let botonesOrdenar = frag.appendChild(document.createElement("div"));

let btnAlfabetico = document.createElement("button");
btnAlfabetico.setAttribute("type", "button");
btnAlfabetico.setAttribute("class", "btn");
btnAlfabetico.setAttribute("class", "btn-outline-success");
btnAlfabetico.setAttribute("id", "btnAlfabetico");
btnAlfabetico.innerText = "ordenar alfabéticamente";

let btnAño = document.createElement("button");
btnAño.setAttribute("type", "button");
btnAño.setAttribute("class", "btn");
btnAño.setAttribute("class", "btn-outline-success");
btnAño.setAttribute("id", "btnAño");
btnAño.innerText = "ordenar por año de publicación";

let btnDuracion = document.createElement("button");
btnDuracion.setAttribute("type", "button");
btnDuracion.setAttribute("class", "btn");
btnDuracion.setAttribute("class", "btn-outline-success");
btnDuracion.setAttribute("id", "btnDuracion");
btnDuracion.innerText = "ordenar por menor duración";

botonesOrdenar.setAttribute("id", "botonesOrdenar");
botonesOrdenar.appendChild(btnAlfabetico);
botonesOrdenar.appendChild(btnAño);
botonesOrdenar.appendChild(btnDuracion);
let divBotones = document.getElementById("divBotones");
divBotones.append(frag);

// alfabeticamente
btnAlfabetico.onclick = (e) =>{
    e.preventDefault();

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));

    miPelitecaGuardada.sort((peliculaA, peliculaB) =>
        {
            if (peliculaA.titulo < peliculaB.titulo)
            {
                return -1;
            } 
            return 1;
        }
    )

    divPeliteca.innerHTML = "";
    
    let fragmento = document.createDocumentFragment();
    let listaPeliculaOrdenada = fragmento.appendChild(document.createElement("div"));
    listaPeliculaOrdenada.setAttribute("id", "listaPeliculaOrdenada");
   
    miPelitecaGuardada.forEach((pelicula) => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  `<p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins. / Puntaje: ${pelicula.puntaje}</p>
                                    <p>Vistas: ${pelicula.vistas}</p>
                                    <p>Watchlist: ${pelicula.watchlist}</p>
                                    <p>Favoritas: ${pelicula.favoritas}</p>
        `
        listaPeliculaOrdenada.appendChild(itemPelicula);
    })

    divPeliteca.append(fragmento);

    let divBtnReset = document.createElement("div");
    divBtnReset.setAttribute("id", "divBtnReset");
        
    let btnReset = document.createElement("button");
    btnReset.setAttribute("type", "submit");
    btnReset.setAttribute("id", "btnReset");
    btnReset.setAttribute("class", "btn");
    btnReset.setAttribute("class", "btn-outline-success");
    btnReset.innerText= "Peliteca original";

    divBtnReset.appendChild(btnReset);
    divPeliteca.appendChild(divBtnReset);

    btnReset.onclick = (e) => {
        e.preventDefault();

        pelitecaOriginal();
        btnReset.remove();
    }
}

// año de publicacion
btnAño.onclick = (e) =>{
    e.preventDefault();

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));

    miPelitecaGuardada.sort((peliculaA, peliculaB) =>
        {
            if (peliculaA.año > peliculaB.año)
            {
                return -1;
            } 
            return 1;
        }
    )

    divPeliteca.innerHTML = "";
    
    let fragmento = document.createDocumentFragment();
    let listaPeliculaOrdenada = fragmento.appendChild(document.createElement("div"));
    listaPeliculaOrdenada.setAttribute("id", "listaPeliculaOrdenada");
   
    miPelitecaGuardada.forEach((pelicula) => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  `<p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins. / Puntaje: ${pelicula.puntaje}</p>
                                    <p>Vistas: ${pelicula.vistas}</p>
                                    <p>Watchlist: ${pelicula.watchlist}</p>
                                    <p>Favoritas: ${pelicula.favoritas}</p>
        `
        listaPeliculaOrdenada.appendChild(itemPelicula);
    })

    divPeliteca.append(fragmento);

    let divBtnReset = document.createElement("div");
    divBtnReset.setAttribute("id", "divBtnReset");
        
    let btnReset = document.createElement("button");
    btnReset.setAttribute("type", "submit");
    btnReset.setAttribute("id", "btnReset");
    btnReset.setAttribute("class", "btn");
    btnReset.setAttribute("class", "btn-outline-success");
    btnReset.innerText= "Peliteca original";

    divBtnReset.appendChild(btnReset);
    divPeliteca.appendChild(divBtnReset);

    btnReset.onclick = (e) => {
        e.preventDefault();

        pelitecaOriginal();
        btnReset.remove();
    }
}

// duracion
btnDuracion.onclick = (e) =>{
    e.preventDefault();

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));

    miPelitecaGuardada.sort((peliculaA, peliculaB) =>
        {
            if (peliculaA.duracion < peliculaB.duracion)
            {
                return -1;
            } 
            return 1;
        }
    )

    divPeliteca.innerHTML = "";
    
    let fragmento = document.createDocumentFragment();
    let listaPeliculaOrdenada = fragmento.appendChild(document.createElement("div"));
    listaPeliculaOrdenada.setAttribute("id", "listaPeliculaOrdenada");
   
    miPelitecaGuardada.forEach((pelicula) => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  `<p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins. / Puntaje: ${pelicula.puntaje}</p>
                                    <p>Vistas: ${pelicula.vistas}</p>
                                    <p>Watchlist: ${pelicula.watchlist}</p>
                                    <p>Favoritas: ${pelicula.favoritas}</p>
        `
        listaPeliculaOrdenada.appendChild(itemPelicula);
    })

    divPeliteca.append(fragmento);

    let divBtnReset = document.createElement("div");
    divBtnReset.setAttribute("id", "divBtnReset");
        
    let btnReset = document.createElement("button");
    btnReset.setAttribute("type", "submit");
    btnReset.setAttribute("id", "btnReset");
    btnReset.setAttribute("class", "btn");
    btnReset.setAttribute("class", "btn-outline-success");
    btnReset.innerText= "Peliteca original";

    divBtnReset.appendChild(btnReset);
    divPeliteca.appendChild(divBtnReset);

    btnReset.onclick = (e) => {
        e.preventDefault();

        pelitecaOriginal();
        btnReset.remove();
    }
}

function pelitecaOriginal(){
    document.getElementById("divPeliteca").innerHTML = "";

    let fragmentoPeliteca = document.createDocumentFragment();
    let listaPelicula = fragmentoPeliteca.appendChild(document.createElement("div"));
    
    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));
   
    miPelitecaGuardada.forEach((pelicula) => {
        let itemPelicula = document.createElement("p");
        itemPelicula.setAttribute("class", "pItemPelicula");
        itemPelicula.innerHTML =  `<p>Título: ${pelicula.titulo} / Director/a: ${pelicula.director}</p>
                                    <p>Año: ${pelicula.año} / Género: ${pelicula.genero} </p>
                                    <p>Duración: ${pelicula.duracion} mins. / Puntaje: ${pelicula.puntaje}</p>
                                    <p>Vistas: ${pelicula.vistas}</p>
                                    <p>Watchlist: ${pelicula.watchlist}</p>
                                    <p>Favoritas: ${pelicula.favoritas}</p>
        `
        listaPelicula.appendChild(itemPelicula);
    })

    let divPeliteca = document.getElementById("divPeliteca");
    divPeliteca.append(fragmentoPeliteca);
}

 



