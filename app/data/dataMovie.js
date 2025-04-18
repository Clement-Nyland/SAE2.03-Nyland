let HOST_URL = "https://mmi.unilim.fr/~nyland2/SAE2.03-Nyland";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.getMovie = async function(){
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
    // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
    // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let data = await answer.json();
    // Enfin, on retourne ces données.
    return data;
}

DataMovie.requestMovieDetails = async function (movieId) {
  
  let answer = await fetch(HOST_URL + `/server/script.php?todo=readMovieDetail&id=${movieId}` );
  let movieDetails = await answer.json();
  return movieDetails;
};

DataMovie.requestCategories = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readMoviesCategory");
  let categories = await answer.json();
  return categories;
};

export { DataMovie };