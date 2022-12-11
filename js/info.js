//api key = 196725942575ebba95491c7ed55f1629

// NOPE
fetch(`https://api.themoviedb.org/3/movie/762504?api_key=196725942575ebba95491c7ed55f1629`)
    .then((response)=>response.json())
    .then((json)=>
    nopeF(json)
)
function nopeF(json){
    let div = document.getElementById("NOPE!");

    let p = document.createElement("p");
    p.setAttribute("class", "pInfo");
    p.innerHTML = `<p> Resumen(en): ${json.overview} </p>`
    div.appendChild(p);

    let img = document.createElement("img");
    img.setAttribute("class", "imgInfo")
    img.src = `https://image.tmdb.org/t/p/w500/${json.poster_path}`
    div.appendChild(img);    

    let a = document.createElement("a");
    a.setAttribute("class", "aInfo");
    a.setAttribute("href", `${json.homepage}`);
    a.setAttribute("target", "_blank");
    a.innerHTML = `<p>visita la página oficial </p>`;
    div.appendChild(a);

}

// SMILE
fetch(`https://api.themoviedb.org/3/movie/882598?api_key=196725942575ebba95491c7ed55f1629`)
    .then((response)=>response.json())
    .then((json)=>
    smileF(json)
)
function smileF(json){
    let div = document.getElementById("SMILE");

    let p = document.createElement("p");
    p.setAttribute("class", "pInfo");
    p.innerHTML = `<p> Resumen(en): ${json.overview} </p>`
    div.appendChild(p);

    let img = document.createElement("img");
    img.setAttribute("class", "imgInfo")
    img.src = `https://image.tmdb.org/t/p/w500/${json.poster_path}`
    div.appendChild(img);    

    let a = document.createElement("a");
    a.setAttribute("class", "aInfo");
    a.setAttribute("href", `${json.homepage}`);
    a.setAttribute("target", "_blank");
    a.innerHTML = `<p>visita la página oficial </p>`;
    div.appendChild(a);
}

// THE FRENCH DISPATCH
fetch(`https://api.themoviedb.org/3/movie/542178?api_key=196725942575ebba95491c7ed55f1629`)
    .then((response)=>response.json())
    .then((json)=>
    frenchF(json)
)
function frenchF(json){
    let div = document.getElementById("THE FRENCH DISPATCH");

    let p = document.createElement("p");
    p.setAttribute("class", "pInfo");
    p.innerHTML = `<p> Resumen(en): ${json.overview} </p>`
    div.appendChild(p);

    let img = document.createElement("img");
    img.setAttribute("class", "imgInfo")
    img.src = `https://image.tmdb.org/t/p/w500/${json.poster_path}`
    div.appendChild(img);    

    let a = document.createElement("a");
    a.setAttribute("class", "aInfo");
    a.setAttribute("href", `${json.homepage}`);
    a.setAttribute("target", "_blank");
    a.innerHTML = `<p>visita la página oficial </p>`;
    div.appendChild(a);
}

// CRIMES OF THE FUTURE
fetch(`https://api.themoviedb.org/3/movie/819876?api_key=196725942575ebba95491c7ed55f1629`)
    .then((response)=>response.json())
    .then((json)=>
    crimesF(json)
)
function crimesF(json){
    let div = document.getElementById("CRIMES OF THE FUTURE");

    let p = document.createElement("p");
    p.setAttribute("class", "pInfo");
    p.innerHTML = `<p> Resumen(en): ${json.overview} </p>`
    div.appendChild(p);

    let img = document.createElement("img");
    img.setAttribute("class", "imgInfo")
    img.src = `https://image.tmdb.org/t/p/w500/${json.poster_path}`
    div.appendChild(img);    

    let a = document.createElement("a");
    a.setAttribute("class", "aInfo");
    a.setAttribute("href", `${json.homepage}`);
    a.setAttribute("target", "_blank");
    a.innerHTML = `<p>visita la página oficial </p>`;
    div.appendChild(a);
}

// LUCA
fetch(`https://api.themoviedb.org/3/movie/508943?api_key=196725942575ebba95491c7ed55f1629`)
    .then((response)=>response.json())
    .then((json)=>
    lucaF(json)
)
function lucaF(json){
    let div = document.getElementById("LUCA");

    let p = document.createElement("p");
    p.setAttribute("class", "pInfo");
    p.innerHTML = `<p> Resumen(en): ${json.overview} </p>`
    div.appendChild(p);

    let img = document.createElement("img");
    img.setAttribute("class", "imgInfo")
    img.src = `https://image.tmdb.org/t/p/w500/${json.poster_path}`
    div.appendChild(img);    

    let a = document.createElement("a");
    a.setAttribute("class", "aInfo");
    a.setAttribute("href", `${json.homepage}`);
    a.setAttribute("target", "_blank");
    a.innerHTML = `<p>visita la página oficial </p>`;
    div.appendChild(a);
}


