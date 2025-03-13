//para pegar a lista
let lista = document.querySelector('#listaAmigos');
//para colocar o resultado
let resultado = document.querySelector('#resultado');
//para armazenar os nomes e número de nomes na lista
let listaNomes = [];
let numeroDeNomes = 0;

//função para inserir nomes no input
function adicionarNome() {
    let nomes = document.querySelector('#amigo').value;


    //verifica se o nome inserido é valido
    if (nomes === '') {
        alert('Digite um nome')
    } else {
        //coloca os nomes na lista
         listaNomes.push(nomes)
        
         //para adicionar os nomes    
         lista.innerHTML = listaNomes.map(nome => `<li>${nome}</li>`).join('');
     
         //limpar os campos
         let limparInput = document.querySelector('#amigo');
         limparInput.value = '';
        
         //conta o número de nomes na lista
         numeroDeNomes++;
     
         //mostra numero de nomes na lista
         console.log(numeroDeNomes)
     
         //para mostrar a lista no console
         console.log(listaNomes);  
    }
    
}

//sortear 
function sortearAmigo() {
    //valida se há nomes na lista
    if (numeroDeNomes <= 1) {
        alert('Insira um nome na lista!')
    } else {
        //sorteia um indice da lista
        let numeroSorteado = parseInt(Math.random() * numeroDeNomes);

        //exibe nome na tela
        resultado.innerHTML = listaNomes[numeroSorteado];

        //exibe o indice sorteado no console
        console.log(`O indice sorteado é... ${numeroSorteado}`)
    }
    
}

//limpar Jogo
function limparJogo() {
    console.log('ok')
}
