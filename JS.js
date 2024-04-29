function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("sinalVerde").src = images[x];
}


function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "./Assets/Verde.png";
images[1] = "./Assets/Amarelo.png";
images[2] = "./Assets/Vermelho.png";

function atravessar() {
    var Image_Id = document.getElementById('sinalVerde');
    if (Image_Id.src.match("./Assets/Verde.png")) {
        Image_Id.src = "./Assets/Amarelo.png";
    }                 
}


