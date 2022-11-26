/* agregar pelicula */

// FORM
let tituloInput = document.getElementById("titulo");
let directorInput = document.getElementById("director");
let añoInput = document.getElementById("año");
let generoInput = document.getElementById("genero");
let duracionInput = document.getElementById("duracion");

let vistasInput = document.getElementById("siVistas");
let watchlistInput = document.getElementById("siWatchlist");
let favoritasInput = document.getElementById("siFavoritas");
let recomendadasInput = document.getElementById("siRecomendadas");

let formulario = document.getElementById("formFormulario");
let agregarBtn = document.getElementById("agregar");

if (agregarBtn){
    agregarBtn.onclick = (e) => {
        e.preventDefault();
    
        let titulo = tituloInput.value;
        let director = directorInput.value;
        let año = parseInt(añoInput.value);
        let genero = generoInput.value;
        let duracion = parseInt(duracionInput.value);
    
        titulo = titulo.toUpperCase();
        director = director.toUpperCase();
        genero = genero.toUpperCase();
    
        if (titulo == "" || director == "" || isNaN(año) || año > 2022 || genero == "" || isNaN(duracion)) {
            alert("datos incorrectos");
        }
        else {
            let nuevaPelicula =new Pelicula(titulo, director, año, genero, duracion);
            
            //lo setteo?
            let miPelitecaGuardada = JSON.parse(localStorage.getItem("miPeliteca"));
    
            miPelitecaGuardada.push(nuevaPelicula);
            console.log("pelicula agregada", nuevaPelicula);
            console.log("mi peliteca", miPelitecaGuardada);
    
            if (vistasInput.checked) {
                miListaVistas.push(nuevaPelicula);
                nuevaPelicula.agregarComoVista();
                console.log("vistas", miListaVistas);
            }
            if (watchlistInput.checked) {
                miListaWatchlist.push(nuevaPelicula);
                nuevaPelicula.agregarComoWatchlist;
                console.log("watchlist", miListaWatchlist);
            }
            if (favoritasInput.checked) {
                miListaFavoritas.push(nuevaPelicula);
                nuevaPelicula.agregarComoFavoritas();
                console.log("favoritas", miListaFavoritas);
            }
            if (recomendadasInput.checked) {
                miListaRecomendadas.push(nuevaPelicula);
                console.log("recomendadas", miListaRecomendadas);
            }
    
            localStorage.setItem("nuevaPelicula", JSON.stringify(nuevaPelicula));
            localStorage.setItem("miPeliteca", JSON.stringify(miPelitecaGuardada));
        }
    
        resetValores();
    }
}

function resetValores(){
    tituloInput.value = "";
    directorInput.value = "";
    añoInput.value = "";
    generoInput.value = "";
    duracionInput.value = "";
    vistasInput.checked = false;
    watchlistInput.checked = false;
    favoritasInput.checked = false;
    recomendadasInput.checked = false;
}

