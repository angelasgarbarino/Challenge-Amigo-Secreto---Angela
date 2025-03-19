//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// 1 Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.//

let amigos = [];

// 2 Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.//
// Tarefas específicas:
//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
//Se estiver vazio, exiba um alerta com a mensagemg de erro: "Por favor, insira um nome."
//Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

function adicionarAmigo() {
    let inputAmigo = document.querySelector('#amigo');
    let nomeAmigo = inputAmigo.value.trim(); 
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    amigos.push(nomeAmigo);

    atualizarListaAmigos();

    inputAmigo.value = "";
}

// Comando para evitar digitar nomes iguais:
    // if (listaAmigos.includes(nomeAmigo)) {
        // alert(`O nome '${nomeAmigo}' já está na lista!`);
        // inputAmigo.value = ""; 
  //      return; 
//      }

    

//3 Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. 
// Use innerHTML para limpar a lista antes de adicionar novos elementos.//
//Tarefas específicas:
//Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista 
// onde os amigos serão exibidos.
//Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
//Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
//Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.

function atualizarListaAmigos() {
    const listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) { 
        let listItem = document.createElement('li');
        listItem.textContent = amigo; 
        listaAmigos.appendChild(listItem);
    }
}

//4 Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.
//Use Math.random() e Math.floor() para obter um índice aleatório.
//Tarefas específicas:
//Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
//Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
//Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
//Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        let itemResultado = document.createElement('li');
        itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
        listaAmigos.innerHTML = "";
        
    } else {
        let itemResultado = document.createElement('li');
        itemResultado.textContent = 'Adicione amigos para sortear.';
        resultado.appendChild(itemResultado);
          }
}

//   inputitemResultado.value = ""; PARA LIMPAR O RETORNO "o amigo secreto..."
// ver como nao repetir nomes 
// mudar imagem do arquivo 
// adicionar nomes com enter

    amigos = []; 
    atualizarListaAmigos(); 


// 5 Crie o READ ME
// O README é um elemento chave em qualquer projeto de desenvolvimento, pois fornece uma descrição clara e detalhada do propósito, estrutura e uso do código.
// Quando você participa de um processo seletivo, o README é essencial para comunicar como utilizar o projeto.
// Esse arquivo, com extensão .md (Markdown), é o ponto de referência inicial para qualquer pessoa que queira entender e trabalhar com seu código.
// Um bom README inclui informações sobre instalação, dependências, como executar o projeto e possíveis problemas ou soluções.
// Um README bem estruturado facilita a compreensão do projeto por parte de outros desenvolvedores.


// 6 Publique sua página no GitHub Pages!
//Use o que aprendeu sobre Git e GitHub e publique sua página web utilizando o serviço GitHub Pages.
//Dessa forma, você poderá compartilhar o resultado do seu projeto!

