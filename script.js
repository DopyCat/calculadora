let outputscreen = document.getElementById("outputscreen"); // Criando a variável que vai armazenar o elemento com ID "outputscreen"

function display(num) { // A função recebe um parâmetro chamado num
    outputscreen.value += num; // Adiciona o valor de num ao valor atual da tela
}

function calculate() {
    try { // Tenta executar um código que pode gerar erro
        outputscreen.value = eval(outputscreen.value); // Avalia o conteúdo da tela como uma expressão matemática
    } catch(e) { // Se houver erro no eval (como uma expressão inválida), entra no catch
        alert("Invalid"); // Exibe um alerta se a expressão for inválida
    }
}

// Função para limpar a tela
function cl() {
    outputscreen.value = "";  // Limpa o valor da tela
}

function del() { //Índice negativo: Conta a partir do final da string, começando do índice -1 (último caractere).
    outputscreen.value = outputscreen.value.slice(0, -1); // usado para extrair uma parte de uma string
}

/*.slice() é um método que cria uma cópia de uma parte da string (neste caso, o conteúdo de outputscreen.value).
O primeiro parâmetro (0) é o índice de onde a fatia começa (ou seja, no início da string).
O segundo parâmetro (-1) indica até onde a fatia vai, mas não inclui o último caractere (o -1 representa o último caractere da string). */

