import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/Moviecategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (category, profileId) {
    let moviesHtml = Movie.format(category.movies, profileId, category.favorites);
    return `<div class="category">
              <h2>${category.name}</h2>
              ${moviesHtml}
            </div>`;
  };

export { MovieCategory };