let listaNomes = [];


function adicionarAmigo(){
    let nomes = document.getElementById('amigo').value;
    if(nomes == ''){
        alert('Por favor, insira um nome!');
    }else{
    listaNomes.push(nomes);
    }
    limparCampo(); 
    
}

function limparCampo(){
    nomes = document.getElementById('amigo');
    nomes.value = '';
    
}
