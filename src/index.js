let img = document.createElement("img");
img.alt = "404";
document.body.appendChild(img);

let form = document.createElement("input");
form.type = "text";
form.style.display = "block";
form.style.boxSizing = "border-box";
form.style.width = "50vw";
form.style.height = "10vh";
form.style.backgroundColor = "black";
form.style.color = "white";
form.style.textAlign = "center";
form.style.fontSize = "5vh";
document.body.appendChild(form);

let button = document.createElement("div");
document.body.appendChild(button);
button.style.width = "50vw";
button.style.height = "10vh";
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.display = "flex";
button.style.justifyContent = "center";
button.style.alignItems = "center";
button.style.fontSize = "5vh";
button.style.cursor = "pointer";
button.style.fontFamily = "arial";
button.innerHTML = "search";

let loadImg = () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YgSMbNVTn9H2yFPan735riidNHosuAno&s=" +
      form.value,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      img.src = "#";
      throw e;
    });

  form.value = "";
};

button.addEventListener("click", loadImg);
