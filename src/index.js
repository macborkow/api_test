let img = document.createElement("img");
document.body.appendChild(img);

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
button.innerHTML = "new cat";

let loadImg = () => {
    console.log('yo');
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YgSMbNVTn9H2yFPan735riidNHosuAno&s=cats",
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    });
};

loadImg();

button.addEventListener("click", loadImg);
