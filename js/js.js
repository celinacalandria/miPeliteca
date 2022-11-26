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
        alert("ingresa el título de la película");
    }
    else if (esta) {
        alert("pelicula cargada");
        console.log(esta);

        let fragmento = document.createDocumentFragment();
        let peliculaBuscada = fragmento.appendChild(document.createElement("div"));

        let pelicula = document.createElement("p");
        pelicula.setAttribute("class" , "pPeliculas");
        pelicula.innerHTML = `  <p><i>película encontrada:</i></p>
                                <p>título: ${esta.titulo} / director/a: ${esta.director}</p>
                                <p>año: ${esta.año} / género: ${esta.genero} / duración: ${esta.duracion} mins. / puntaje: ${esta.puntaje}</p>
                                <p>vistas: ${esta.vistas}</p>
                                <p>watchlist: ${esta.watchlist}</p>
                                <p>favoritas: ${esta.favoritas}</p>
                                
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
        alert("la pelicula no esta cargada");
        buscarInput.value = "";
    }
}