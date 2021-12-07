var data = new Date();
var dataDoEvento = 12/24/2021
if (dataDoEvento => new Date){
console.log("Evento permitido.")
}else{
    console.log("Evento não permitido, escolha outra data para realização")
}


let idadeDoParticipante = 25

if (idadeDoParticipante >= 18){
    console.log("Cadastro permitido.")
}else { 
    console.log("Cadastro não permiditido, Evento permitido somente para maiores de 18 anos")
}


let listaDeParticipantes = ["participante1","participante2","participante3","participante4"];
let quantidadeDeParticipantes = listaDeParticipantes.length;
console.log(quantidadeDeParticipantes);

if (listaDeParticipantes.length < 100){
    //É possível cadastrar mais participantes
    console.log("Cadastro permitido, Digite seus Dados")
}else{ 
    console.log("Cadastro não permitido, Vagas Esgotadas")
}

let listaDePalestrantes = ["palestrante1","palestrante2","palestrante3"];
let quantidadeDePalestrantes = listaDePalestrantes.length;
console.log(quantidadeDePalestrantes);


let listaDePalestrante = ["Palestrante1", "Palestrante2", "Palestrante3"];
let quantidadeDePalestrante = listaDePalestrante.length;
for (let indice = 0; indice < quantidadeDePalestrante; indice++) {
	const alunoCorrente = listaDePalestrante[indice];
	console.log(alunoCorrente);
}
{console.log ("Lista de Convidados Especiais")}

let listaDeConvidados = ["Convidado Especial 1", "Convidado Especial 2", "Convidado Especial 3"];
let quantidadeDeConvidados = listaDeConvidados.length;
let inicio = 0;

do {
	console.log(listaDeConvidados[inicio]);
	inicio++;
} while (inicio < quantidadeDeConvidados);
