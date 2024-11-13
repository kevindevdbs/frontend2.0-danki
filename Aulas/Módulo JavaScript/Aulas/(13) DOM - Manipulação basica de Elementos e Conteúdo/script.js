// Obtém todos os elementos <p> do documento e os armazena na variável 'p'
var p = document.getElementsByTagName('p');

// Define o conteúdo HTML do primeiro elemento <p> como 'Manipulação'
p[0].innerHTML = 'Manipulação';

// Inicia um loop que irá iterar de 0 a 9
for (var i = 0; i < 10; i++) {
    // A cada iteração, adiciona o valor de 'i' ao conteúdo HTML do primeiro elemento <p>
    // O conteúdo atual é concatenado com um espaço e o valor de 'i'
    p[0].innerHTML = p[0].innerHTML + ' ' + i;
}