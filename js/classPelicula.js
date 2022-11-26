/* clase pelicula */

// CLASS PELICULA 
class Pelicula {

   constructor (titulo, director, año, genero, duracion, vistas, watchlist, favoritas, puntaje){
      this.titulo = titulo;
      this.director = director;
      this.año = año;
      this.genero = genero;
      this.duracion = duracion;
      this.vistas = vistas;
      this.watchlist = watchlist;
      this.favoritas = favoritas;
      this.puntaje = puntaje;
   }

   agregarComoVista(){
     this.puntuar();
 
      return this.vistas = true;      
   }
 
   puntuar(){
      let fragmento = document.createDocumentFragment();
      let cuantasEstrellas = fragmento.appendChild(document.createElement("div"));

      let puntoLabel = document.createElement("label");
      puntoLabel.setAttribute("for", "puntoInput");

      let puntoInput = document.createElement("input");
      puntoInput.setAttribute("type", "text");
      puntoInput.setAttribute("id", "puntoInput");
      puntoInput.setAttribute("class", "form-control");
      puntoInput.setAttribute("placeholder", "¿Cuántas estrellas le das?");

      let puntoBtn = document.createElement("button");
      puntoBtn.setAttribute("type", "submit");
      puntoBtn.setAttribute("id", "puntoBtn");
      puntoBtn.setAttribute("class", "btn");
      puntoBtn.setAttribute("class", "btn-outline-success");
      puntoBtn.innerText="puntuar";

      cuantasEstrellas.setAttribute("id", "cuantasEstrellas");
      cuantasEstrellas.appendChild(puntoLabel);
      cuantasEstrellas.appendChild(puntoInput);
      cuantasEstrellas.appendChild(puntoBtn);

      let divVistas = document.getElementById("divVistas");
      divVistas.append(fragmento);

      puntoBtn.onclick = (e) =>{
         e.preventDefault();

         let punto = document.getElementById("puntoInput");
         let estrellas = parseInt(punto.value);

         if (estrellas == "1"){
            punto.value = "";
            return this.puntaje = 1;
         }    
         else if (estrellas == "2"){
            punto.value = "";
            return this.puntaje = 2;
         }
         else if (estrellas == "3"){
            punto.value = "";
            return this.puntaje = 3;
         } 
         else if (estrellas == "4"){
            punto.value = "";
            return this.puntaje = 4;
         }
         else if (estrellas == "5"){
            punto.value = "";
            return this.puntaje = 5;
         }
         else{
            alert("La opción ingresada no es correcta");
            return this.puntaje = null;
         }
      }   
   }
 
   agregarComoWatchlist(){   
      return this.watchlist = true;
   }
 
   agregarComoFavoritas(){
      return this.favoritas = true;
   }    
}
 