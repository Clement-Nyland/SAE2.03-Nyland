let templateFile = await fetch("./component/addMovie/template.html");
let template = await templateFile.text();

let addMovie = {};

addMovie.format = function (handler) {
  let html = template;
  html = html.replace("{{handler}}", handler);
  return html;
};

export { addMovie };
