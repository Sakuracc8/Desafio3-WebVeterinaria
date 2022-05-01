document.getElementById('suscripcion').onclick = function(){
    alert('Las suscripciones se habilitarán pronto')
    let pregunta = confirm
    if (window.confirm("¿Desea dejar una consulta online?")) {
        window.open("contacto.html");
      };
    }