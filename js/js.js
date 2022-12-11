/* buscar pelicula */

let buscarInput = document.getElementById("inputBuscarPeli");
let buscarBtn = document.getElementById("btnBuscarPeli");

buscarBtn.onclick = (e) => {
    e.preventDefault();

    let buscada = buscarInput.value;
    buscada = buscada.toUpperCase();

    let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));

    let esta = miPelitecaGuardada.find((pelicula) => pelicula.titulo == buscada);

    if (buscada == ""){
        Swal.fire({
            icon: 'question',
            title: 'Ingresa el título de la película',
        })
    }
    else if (esta) {
        Swal.fire({
            icon: 'success',
            title: 'Película encontrada',
        })
        console.log(esta);

        let fragmento = document.createDocumentFragment();
        let peliculaBuscada = fragmento.appendChild(document.createElement("div"));

        let pelicula = document.createElement("p");
        pelicula.setAttribute("class" , "pPeliculas");
        pelicula.innerHTML = `  <p><i>Película encontrada:</i></p>
                                <p>Título: ${esta.titulo} / Director/a: ${esta.director}</p>
                                <p>Año: ${esta.año} / Género: ${esta.genero} </p> 
                                <p>Duración: ${esta.duracion} mins. / Puntaje: ${esta.puntaje}</p>
                                <p>Vistas: ${esta.vistas}</p>
                                <p>Watchlist: ${esta.watchlist}</p>
                                <p>Favoritas: ${esta.favoritas}</p>
                                
        `;

        let divBtnReset = document.createElement("div");
        divBtnReset.setAttribute("id", "divBtnReset");
        
        let btnReset = document.createElement("button");
        btnReset.setAttribute("type", "submit");
        btnReset.setAttribute("id", "btnReset");
        btnReset.setAttribute("class", "btn");
        btnReset.setAttribute("class", "btn-outline-success");
        btnReset.innerText= "limpiar";

        peliculaBuscada.appendChild(pelicula);
        divBtnReset.appendChild(btnReset);
        peliculaBuscada.appendChild(divBtnReset);

        let divPeliculaBuscada = document.getElementById("divPeliculaBuscada");
        divPeliculaBuscada.append(fragmento);

        btnReset.onclick = (e) => {
            e.preventDefault();

            pelicula.innerHTML = "";
            btnReset.remove();
            buscarInput.value = "";
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'La película no está cargada',
        })
        buscarInput.value = "";
    }
}