const API = "https://swapi.dev/api/people/1/";

const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};

const fillData = (data) => {
  let html = "";

  html += '<div class="col">';
  html += '<div class="col">';
  html += `<h5>${data.name}</h5>`;
  html += `<p>${data.mass}</p>`;
  html += `<p>${data.hair_color}</p>`;
  html += `<p>${data.skin_color}</p>`;
  html += `<p>${data.eye_color}</p>`;
  html += `<p>${data.birth_year}</p>`;
  html += `<p>${data.gender}</p>`;
  html += `<p>${data.created}</p>`;
  html += `<p>${data.edited}</p>`;

  html += "</div>";
  html += "</div>";
  document.getElementById("characters").innerHTML = html;
};

getAPI(API);

/*
"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
    "created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
*/
