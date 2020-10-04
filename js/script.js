function atualizaTextoVermelho(val) {
  document.getElementById('rangeVermelho').value = val;
}
function atualizaTextoVerde(val) {
  document.getElementById('rangeVerde').value = val;
}
function atualizaTextoAzul(val) {
  document.getElementById('rangeAzul').value = val;
}
function corQuadradoRGB() {
  var quadrado = document.getElementById('quadrado');
  var vermelho = document.getElementById('rangeVermelho').value;
  var verde = document.getElementById('rangeVerde').value;
  var azul = document.getElementById('rangeAzul').value;
  quadrado.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul})`;
}
