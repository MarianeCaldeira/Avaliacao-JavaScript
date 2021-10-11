function evento(){
    if(document.getElementById('nome').value == ''){
        alert('Por favor verifique se todos os dados foram preenchidos.');
    }
    else if(document.getElementById('email').value == ''){
        alert('Por favor verifique se todos os dados foram preenchidos.');
    }
    else if(document.getElementById('telefone').value == ''){
        alert('Por favor verifique se todos os dados foram preenchidos.');
    }
    else if(document.getElementById('assunto').value == 'Selecione'){
        alert('Por favor verifique se todos os dados foram preenchidos.');
    }
    else if(document.getElementById('mensagem').value == ''){
        alert('Por favor verifique se todos os dados foram preenchidos.');
    }
    else{
        alert('Sua mensagem foi enviada ao Restaurante Delícias Brasileiras!');
    }
}