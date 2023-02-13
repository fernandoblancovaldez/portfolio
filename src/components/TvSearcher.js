import Card from "react-bootstrap/Card";

import React from "react";

const TvSearcher = () => {
  /* const d = document,
    $shows = d.getElementById("shows"),
    $template = d.getElementById("show-template").content,
    $fragment = d.createDocumentFragment();

  d.addEventListener("keypress", async (e) => {
    if (e.target.matches("#search")) {
      //console.log(e.key, e.keyCode)
      if (e.key === "Enter") {
        try {
          //console.log(e.target.value)
          $shows.innerHTML = `<img class="loader" src="../assets/loader.svg" alt="Cargando...">`;

          let query = e.target.value.toLowerCase(),
            api = `http://api.tvmaze.com/search/shows?q=${query}`,
            res = await fetch(api),
            json = await res.json();

          console.log(api, res, json);
          if (!res.ok) throw { status: res.status, statusText: res.statusText };

          if (json.length === 0) {
            $shows.innerHTML = `<h2>No existen resultados de shows para el criterio de busqueda "<mark>${query}</mark>" </h2>`;
          } else {
            json.forEach((el) => {
              $template.querySelector("h3").textContent = el.show.name;
              $template.querySelector("div").innerHTML = el.show.summary
                ? el.show.summary
                : "Sin descripción";
              $template.querySelector("img").src = el.show.image
                ? el.show.image.medium
                : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
              $template.querySelector("img").alt = el.show.name;
              $template.querySelector("img").style.maxWidth = "100%";
              $template.querySelector("a").href = el.show.url
                ? el.show.url
                : "#";
              $template.querySelector("a").target = el.show.url
                ? "_BLANK"
                : "_SELF";
              $template.querySelector("a").rel = el.show.url
                ? "noreferrer noopener"
                : "";
              $template.querySelector("a").textContent = el.show.url
                ? "Ver mas"
                : "";

              let $clone = d.importNode($template, true);
              $fragment.appendChild($clone);
            });
            $shows.innerHTML = "";
            $shows.appendChild($fragment);
          }
        } catch (err) {
          let message = err.statusText || "Ocurrió un error";
          $shows.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        }
      }
    }
  }); */
  return (
    <Card body className="glass">
      <h3 className="hero-font fs-1 lh-1">buscador de series.</h3>
      <input
        type="search"
        id="search"
        placeholder="Buscar shows de tv..."
        autocomplete="off"
      />
      <section id="shows" class="grid-fluid"></section>
      {/* <template id="show-template">
        <article class="show">
          <h3></h3>
          <div></div>
          <img />
          <a></a>
        </article>
      </template> */}
    </Card>
  );
};

export default TvSearcher;
