/* contenido peliteca */

// PELITECA
let miPeliteca = JSON.parse(localStorage.getItem("miPeliteca"));
if (miPeliteca == undefined){
    miPeliteca = [];

    miPeliteca.push(new Pelicula("PARASITE", "BONG JOON-HO", 2019, "COMEDY/DRAMA", 133, true, false, false, true, 5));
    miPeliteca.push(new Pelicula("THE LIGHTHOUSE", "ROBERT EGGERS", 2019, "THRILLER/FANSTASY", 108, true, false, false, false, 4));
    miPeliteca.push(new Pelicula("MID90S","JONAH HILL", 2018,"DRAMA/COMEDY", 86, true, false, false, false, 3));
    miPeliteca.push(new Pelicula("CLIMAX", "GASPAR NOÉ", 2018, "MUSIC/HORROR",  97, true, false, false, false, 4));
    miPeliteca.push(new Pelicula("LIFE","DANIEL ESPINOSA", 2017, "MISTERY/SCIENCE-FICTION", 104, true, false, false, true, 4));

    miPeliteca.push(new Pelicula("CARLITOS' WAY", "BRIAN DE PALMA", 1993, "THRILLER/DRAMA", 144, false, true, false, false));
    miPeliteca.push(new Pelicula("BLOW OUT", "BRIAN DE PALMA", 1981, "DRAMA/THRILLER", 108, false, true, false, false));
    miPeliteca.push(new Pelicula("THE PIANIST", "ROMAN POLANSKI", 2002,"WAR/DRAMA", 150, false, true, false, false));
    miPeliteca.push(new Pelicula("ANOTHER ROUND", "THOMAS VINTERBERG", 2020,  "COMEDY/DRAMA", 117, false, true, false, false));
    miPeliteca.push(new Pelicula("KIKA", "PEDRO ALMODÓVAR", 1993,"COMEDY/DRAMA", 117, false, true, false, false));

    miPeliteca.push(new Pelicula("10 THINGS I HATE ABOUT YOU", "GIL JUNGER", 1999,"COMEDY/ROMANCE", 97, true, false, true, false, 5));
    miPeliteca.push(new Pelicula("MEGAMIND", "TOM MCGRATH", 2010,"COMEDY/ANIMATION", 96, true, false, true, false, 5));
    miPeliteca.push(new Pelicula("THE SHINING", "STANLEY KUBRICK", 1980,"HORROR/THRILLER", 144, true, false, true, true, 5));

    miPeliteca.push(new Pelicula("APOCALYPTO", "MEL GIBSON", 2006, "ACTION/HISTORY", 139, true, false, false, true, 5));
    miPeliteca.push(new Pelicula("THE SECRET IN THEIR EYES", "JUAN JOSE CAMPANELLA", 2009, "CRIME/MISTERY", 130, true, false, false, true, 5));
    miPeliteca.push(new Pelicula("ADAPTATION", "SPIKE JONZE", 2002, "CRIME/DRAMA", 115, true, false, false, true, 4));
    miPeliteca.push(new Pelicula("BUT I'M A CHEERLEADER", "JAMIE BABBIT",1999, "COMEDY/ROMANCE", 85, true, false, false, true, 4));
    miPeliteca.push(new Pelicula("THE INTRUDER", "NATALIA META", 2020, "THRILLER", 95, true, false, true, true, 5));

    localStorage.setItem("miPeliteca", JSON.stringify(miPeliteca));
} 

// NOVEDADES
let novedades = [];

novedades.push(new Pelicula("NOPE!", "JORDAN PEELE", 2022, "THRILLER", 130));
novedades.push(new Pelicula("SMILE", "PARKER FILM", 2022, "HORROR/MISTERY", 115));
novedades.push(new Pelicula("THE FRENCH DISPATCH", "WES ANDERSON", 2021, "DRAMA/ROMANCE", 108));
novedades.push(new Pelicula("CRIMES OF THE FUTURE", "DAVID CRONENBERG", 2022,"SCIENCE FICTION/HORROR", 107));
novedades.push(new Pelicula("LUCA", "ENRICO CASAROSA", 2021, "ANIMATION/FANTASY", 95));









