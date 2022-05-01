document.getElementById('enviar').onclick = function(){ 
    let pregunta = confirm
    if (window.confirm("¿Estás seguro de querer enviar este mensaje?")) {
        let nombre = document.getElementById('nombre').value;
        alert('Gracias por tu mensaje, ' + nombre) };
    }