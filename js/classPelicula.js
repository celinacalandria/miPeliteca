/* clase pelicula */

// CLASS PELICULA 
class Pelicula {
   constructor (titulo, director, año, genero, duracion, vistas, watchlist, favoritas, recomendadas, puntaje){
      this.titulo = titulo;
      this.director = director;
      this.año = año;
      this.genero = genero;
      this.duracion = duracion;
      this.vistas = vistas;
      this.watchlist = watchlist;
      this.favoritas = favoritas;
      this.recomendadas = recomendadas;
      this.puntaje = puntaje;
   }

   agregarComoVista(estrellas){
      this.puntaje = estrellas;
 
      return this.vistas = true;      
   }
 
   agregarComoWatchlist(){   
      return this.watchlist = true;
   }
 
   agregarComoFavoritas(){
      return this.favoritas = true;
   }    

   agregarComoRecomendadas(){
      return this.recomendadas = true;
   }
}
 