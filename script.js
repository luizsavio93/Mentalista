// criando uma variável para o número secreto que escolhi ou que será gerado automaticamente pelo Math.random()
var numeroSecreto = parseInt(Math.random() * 11);

var Clicar = 1;
function contarTentativas() {
  Clicar += 1;
}

// chutar qualquer número
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  // se chute for igual ao numero secreto exibe "acertou", se não ele exibe "errou"
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Você acertou! Precisou de " + Clicar + " tentativas!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  }
  if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Você errou! O número secreto era MAIOR";
  }
  if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Você errou! O número secreto era MENOR";
  }
}

//comparar um valor com outro, use o ==

//atribuir um valor a uma variavel, use o =

// Math.random() - sorteia um número decimal aleatório, maior que 0 e menor que 1