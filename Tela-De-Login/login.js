
var nome = "";
var senha = "";


function validar() {

nome = document.getElementById("login").value;
senha = document.getElementById("senha").value;

 if (nome === "" || senha === "") {
    alert("Por favor verifique se todos os dados foram preenchidos.");

    return ;
    
  }

  else {
      alert("Seja bem vinde ao Restaurante Start!")
  }

}

function esqueceusenha() {

    alert("Para recuperar a senha, entre em contato com o restaurante.");
}


function cadastreum() {

  window.open("https://www.facebook.com/", "_blank")
}

function cadastredois() {

  window.open("https://www.gmail.com", "_blank")
}

function cadastre3() {

  alert("Estamos em manutenção.");
}





