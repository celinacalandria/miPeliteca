/* contenido peliteca */

// LISTAS VACIAS -arrays
/* let miPeliteca = JSON.parse(localStorage.getItem("miPeliteca"));
if (miPeliteca == undefined){
    miPeliteca = [];
} */

let miPeliteca = [];

let miListaVistas = [
    {titulo: "PARASITE", director: "BONG JOON-HO", año: 2019, genero: "COMEDY/DRAMA", duracion: 133, vistas: true, puntaje: 4},
    {titulo: "THE LIGHTHOUSE", director: "ROBERT EGGERS", año: 2019, genero: "THRILLER/FANSTASY", duracion: 108, vistas: true, puntaje: 4},
    {titulo: "MID90S", director: "JONAH HILL", año: 2018, genero: "DRAMA/COMEDY", duracion: 86, vistas: true, puntaje: 3},
    {titulo: "CLIMAX", director: "GASPAR NOÉ", año: 2018, genero: "MUSIC/HORROR", duracion: 97, vistas: true, puntaje: 4},
    {titulo: "LIFE", director: "DANIEL ESPINOSA", año: 2017, genero: "MISTERY/SCIENCE-FICTION", duracion: 104, vistas: true, puntaje: 4},
];
let miListaWatchlist = [
    {titulo: "CARLITOS' WAY", director: "BRIAN DE PALMA", año: 1993, genero: "THRILLER/DRAMA", duracion: 144, watchlist: true},
    {titulo: "BLOW OUT", director: "BRIAN DE PALMA", año: 1981, genero: "DRAMA/THRILLER", duracion: 108, watchlist: true},
    {titulo: "THE PIANIST", director: "ROMAN POLANSKI", año: 2002, genero: "WAR/DRAMA", duracion: 150, watchlist: true},
    {titulo: "ANOTHER ROUND", director: "THOMAS VINTERBERG", año: 2020, genero: "COMEDY/DRAMA", duracion: 117, watchlist: true},
    {titulo: "KIKA", director: "PEDRO ALMODÓVAR", año: 1993, genero: "COMEDY/DRAMA", duracion: 117, watchlist: true},
];
let miListaFavoritas = [
    {titulo: "10 THINGS I HATE ABOUT YOU", director: "GIL JUNGER", año: 1999, genero: "COMEDY/ROMANCE", duracion: 97, vistas: true, puntaje: 5},
    {titulo: "MEGAMIND", director: "TOM MCGRATH", año: 2010, genero: "COMEDY/ANIMATION", duracion: 96, vistas: true, favoritas: true, puntaje: 5},
    {titulo: "THE SHINING", director: "STANLEY KUBRICK", año: 1980, genero: "HORROR/THRILLER", duracion: 144, vistas: true, favoritas: true, puntaje: 5},
];
let miListaRecomendadas = [
    {titulo: "APOCALYPTO", director: "MEL GIBSON", año: 2006, genero: "ACTION/HISTORY", duracion: 139, vistas: true, puntaje: 5},
    {titulo: "THE SECRET IN THEIR EYES", director: "JUAN JOSE CAMPANELLA", año: 2009, genero: "CRIME/MISTERY", duracion: 130, vistas: true, puntaje: 5},
    {titulo: "ADAPTATION", director: "SPIKE JONZE", año: 2002, genero: "CRIME/DRAMA", duracion: 115, vistas: true, puntaje: 4},
    {titulo: "BUT I'M A CHEERLEADER", director: "JAMIE BABBIT", año: 1999, genero: "COMEDY/ROMANCE", duracion: 85, vistas: true, puntaje: 4},
    {titulo: "THE INTRUDER", director: "NATALIA META", año: 2020, genero: "THRILLER", duracion: 95, vistas: true, favoritas: true, puntaje: 5},
];

// LISTAS PRECARGADAS -arrays
let novedades = [
    {titulo: "NOPE", director: "JORDAN PEELE", año: 2022, genero: "THRILLER", duracion: 130},
    {titulo: "SMILE", director: "PARKER FILM", año: 2022, genero: "HORROR/MISTERY", duracion: 115},
    {titulo: "THE FRENCH DISPATCH", director: "WES ANDERSON", año: 2021, genero: "DRAMA/ROMANCE", duracion: 108},
    {titulo: "CRIMES OF THE FUTURE", director: "DAVID CRONENBERG", año: 2022, genero: "SCIENCE FICTION/HORROR", duracion: 107},
    {titulo: "THE WORST PERSON IN THE WORLD", director: "JOACHIM TRIER", año: 2021, genero: "COMEDY/DRAMA", duracion: 128},
];
let peliculasClasicas = [
    {titulo: "ONCE UPON A TIME... IN HOLLYWOOD", director: "QUENTIN TARANTINO", año: 162, genero: "THRILLER/COMEDY", duracion: 162},
    {titulo: "LOST IN TRANSLATION", director: "SOFIA COPPOLA", año: 2003, genero: "COMEDY/ROMANCE", duracion: 102},
    {titulo: "IN THE MOOD FOR LOVE", director: "WONG KAR-WAI", año: 2000, genero: "DRAMA/ROMANCE", duracion: 99}
];

miPeliteca.push(miListaVistas);
miPeliteca.push(miListaWatchlist);
miPeliteca.push(miListaFavoritas);
miPeliteca.push(miListaRecomendadas);

localStorage.setItem("miPeliteca", JSON.stringify(miPeliteca));





