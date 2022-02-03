const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//Promesa
const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};

const fillData = (data) => {
  data.forEach((item) => {
    getImage(item.url);
 });
};

const getImage = (urlImg) => {
  return fetch(urlImg)
    .then((response) => response.json())
    .then((json) => {
      paintCard(json);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};
let html = "";
const paintCard = (ch) => {
  //console.log(ch)
  html += '<div class="col">';
  html += '<div class="card h-100  bg-opacity-10 ">';
  html += `<img src="${ch.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">`;
  html += '<div class="card-body">';
  html += `<h5 class="card-title">${ch.name}</h5>`;
  html += "</div>";
  html += "</div>";
  html += "</div>";
  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  let page = "";

  page += `<li class="page-item ${
    info.previous == null ? "disabled" : ""
  }"> <a class="page-link" onclick="getAPI('${
    info.previous
  }')">Prev</a> </li> `;
  page += `<li class="page-item ${
    info.next == null ? "disabled" : ""
  }"> <a class="page-link" onclick="getAPI('${info.next}')">Next</a> </li> `;

  console.log(info);

  document.getElementById("pagination").innerHTML = page;
};

getAPI(API);
