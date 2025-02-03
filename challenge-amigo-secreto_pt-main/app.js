let listaNomes = [];


function adicionarAmigo(){
    let nomes = document.getElementById('amigo').value;
    if(nomes == ''){
        alert('Por favor, insira um nome!');
    }else{
    listaNomes.push(nomes);
    }
    mostrarLista();
    limparCampo(); 
    
}

function mostrarLista(){
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = '';
    for(let i = 0; i < listaNomes.length; i++){
            let item = document.createElement('li');
            item.appendChild(document.createTextNode(listaNomes[i]));
            campo.appendChild(item);
    }
}

function limparCampo(){
    nomes = document.getElementById('amigo');
    nomes.value = '';
    
}
