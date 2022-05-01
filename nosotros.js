function cambioDeTema() {
    let tema = document.getElementById("tema");
  
    if (tema.getAttribute("href") == "style-nosotros.css") {
      tema.href = "style-nosotros-modo-oscuro.css";
    } else {
      tema.href = "style-nosotros.css";
    }
  }