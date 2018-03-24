function verInteresse() {

    var inModelo = document.getElementById("inModelo");
    var inCor = document.getElementById("inCor");
    var inPreco = document.getElementById("inPreco");
    var outResposta = document.getElementById("outResposta");


    var modelo = inModelo.value;
    var cor = inCor.value;
    var preco = Number(inPreco.value);


    if (preco < 100000) {
        outResposta.textContent = "Ok! " + modelo + " interessa";
    } else {
        outResposta.textContent = "Não interessa";
    }


}
var btVer = document.getElementById("btVer");
btVer.addEventListener("click", verInteresse);