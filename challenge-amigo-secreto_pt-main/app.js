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
let campo = document.getElementById('listaAmigos');


function mostrarLista(){
    campo.innerHTML = '';
    for(let i = 0; i < listaNomes.length; i++){
            let item = document.createElement('li');
            item.appendChild(document.createTextNode(listaNomes[i]));
            campo.appendChild(item);
    }
}

function sortearAmigo(){
    if(listaNomes == ''){
        alert('Lista de amigos está vazia! Por favor preencha a lista');
    }else{
    let numAleatorio = parseInt(Math.random() * listaNomes.length);
    campo.innerHTML = '';
    document.getElementById('listaAmigos').style.color = "green";
    campo.innerHTML = `O(A) amigo(a) sorteado(a) é: ${listaNomes[numAleatorio]}`;
    
    }
}

function limparCampo(){
    nomes = document.getElementById('amigo');
    nomes.value = '';
    
}
