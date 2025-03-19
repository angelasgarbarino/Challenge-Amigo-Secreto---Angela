# Challenge-Amigo-Secreto---Angela
Desafio Amigo Secreto formação Alura e Oracle

Amigo Secreto
Neste desafio, proposto pela ALURA e ORACLE como parte da formação ONE, foi necessário desenvolver o código (JS) de uma aplicação que permita aos 
usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".
O usuário deverá adicionar nomes por meio de um campo de texto e de um botão "Adicionar". Os nomes inseridos serão exibidos em uma lista visível na 
página, e ao finalizar, um botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela.
O projeto foi desenvolvido com HTML (estrutura da página), CSS (estilização da página) e JavaScript (programação do conteúdo da página). 
O propósito deste desafio foi praticar os conceitos adquiridos sobre lógica de programação, e para isso foram fornecidos os códigos HTML e CSS, 
permitindo que o foco esteja totalmente nos aspectos fundamentais da lógica de programação, como variáveis, condicionais, funções e listas, entre outros.

Funcionalidades da aplicação:
Adicionar nomes de amigos: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

Orientações para o desenvolvimento do desafio:

O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

1 Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.

2 Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.
Tarefas específicas:
Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
Se estiver vazio, exiba um alerta com a mensagemg de erro: "Por favor, insira um nome."
Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

3 Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. 
Use innerHTML para limpar a lista antes de adicionar novos elementos.

Tarefas específicas:
Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.

4 Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos. 
Use Math.random() e Math.floor() para obter um índice aleatório.

Tarefas específicas:

Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.

•	5 Crie o READ ME
O README é um elemento chave em qualquer projeto de desenvolvimento, pois fornece uma descrição clara e detalhada do propósito, estrutura e uso do código.
Quando você participa de um processo seletivo, o README é essencial para comunicar como utilizar o projeto.
Esse arquivo, com extensão .md (Markdown), é o ponto de referência inicial para qualquer pessoa que queira entender e trabalhar com seu código.
 Um bom README inclui informações sobre instalação, dependências, como executar o projeto e possíveis problemas ou soluções.
Um README bem estruturado facilita a compreensão do projeto por parte de outros desenvolvedores.

•	6 Publique sua página no GitHub Pages!
Use o que aprendeu sobre Git e GitHub e publique sua página web utilizando o serviço GitHub Pages.
Dessa forma, você poderá compartilhar o resultado do seu projeto!


