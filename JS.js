function atravessar() {
    var Image_Id = document.getElementById('sinalVerde');
    if (Image_Id.src.match("Verde.png")) {
        Image_Id.src = "Amarelo.png";
    } else if (Image_Id.src.match("Amarelo.png"))
        Image_Id.src = "Vermelho.png";  
                
    else {
        Image_Id.src = "Verde.png";
    }
}