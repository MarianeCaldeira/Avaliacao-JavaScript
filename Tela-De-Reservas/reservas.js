var form01 = document.getElementById('form01');
var cancela = document.getElementById('cancelar');
var enviar = document.getElementById('enviar');

enviar.addEventListener("click", (event) =>{
  event.preventDefault();
    var permitido = true;
    [...form01.elements].forEach((field) => {
        if (field.classList.contains('form-control')) {
            if (!field.value) {
                permitido = false;
            }
        }
    })
    if(!permitido){
        document.getElementById("texto-mensagem").innerHTML="Por favor verifique se todos os dados foram preenchidos.";  
    }
    else{
        document.getElementById("texto-mensagem").innerHTML="Sua Reserva foi salva, estamos te aguardando no Restaurante Delícias Brasileiras!";   
    }
});

cancela.addEventListener('click', (event) => {
    event.preventDefault();
    [...form01.elements].forEach((field, index) => {
        if (field.className != "botao"){
            field.value = "";
        }
    });
    document.getElementById("texto-mensagem").innerHTML="Sua Reserva foi cancelada.";   
});