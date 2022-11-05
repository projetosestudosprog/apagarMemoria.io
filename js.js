let desejaApagaMemoria = confirm("DESEJA APAGA A MEMORIA");
let contagem = 1;
let contagemaFuncao = 1;
let mensagem = "Iniciando...";
let numero10 = 10;
let numero30 = 30;
let numero45 = 45;
let numero80 = 80;
let numero99 = 99;
let numero100 = 100;
let memoriaApagadas = "SUAS MEMÓRIAS FORAM APAGADAS.";
let memoriaApagadaH1 = document.querySelector(".apagadas");

if (desejaApagaMemoria == true) {
  while (contagem === 1 || contagem === 2) {
    alert(mensagem);
    contagem++;
  }

  if (contagem == 2 || contagem >= 2) {
    while (contagemaFuncao <= 6) {
      numeros();
      contagemaFuncao++;
    }
  }
}

function numeros() {
  switch (contagemaFuncao) {
    case 1:
      alert(numero10 + "%");
      break;
    case 2:
      alert(numero30 + "%");
      break;
    case 3:
      alert(numero45 + "%");
      break;
    case 4:
      alert(numero80 + "%");
      break;
    case 5:
      alert(numero99 + "%");
      break;
    case 6:
      alert(numero100 + "%");
      memoriaApagadaH1.innerHTML = memoriaApagadas;
      break;
  }
}
