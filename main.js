(()=>{var n=document.createElement("img");document.body.appendChild(n),fetch("https://api.giphy.com/v1/gifs/translate?api_key=YgSMbNVTn9H2yFPan735riidNHosuAno&s=cats",{mode:"cors"}).then((function(n){return n.json()})).then((function(t){n.src=t.data.images.original.url}))})();