function verificacao() {

    var nome = document.getElementById("inNome");
    var idade = document.getElementById("inIdade");
    var salario = document.getElementById("inSalario");
    var outResposta = document.getElementById("outResposta");

    if(salario <= 3001 || salario >= 1999 && idade < 31 || idade > 19) {
        outResposta.textContent = "Parabéns " + nome + " você foi selecionado para a entrevista";
        alert("if ok");
    } else {
        alert("else ok");
        outResposta.textContent = "Desculpe, mas você não se encaixa no perfil da vaga";
    }

}

var btVer = document.getElementById("btVer");
btVer.addEventListener("click", verificacao);