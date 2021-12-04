var listadePeca = ["Filtro de Ar","Motor","Amortecedor"]

if (listadePeca.length < 10) {
  //É possível cadastrar
    console.log("É possível cadastrar mais peças") 
} else {
    console.log("Não tem mais espaço na lista")
}


let peso = 50;
if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log ("A peça possui peso adequado")
}


let nomePeca = "Disco de Freio"
if (nomePeca.length > 3) {
    console.log ("Nome da peça está adequado para o cadastro")
}else if(nomePeca.length == 0){
console.log("O nome da peça não pode ser vazio")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}

// = -> atribuição de valor -> recebe
// == -> verificação se os valores são iguais -> É igual?
// === -> verificação se o valor e o tipo de valor são iguais ->





switch(nomePeca.length){
    Case 0:
    console.log("o nome da peça não pode ser vazio")
    break;

    Case 1:
    Case 2:
    Case 3:
    console.log("o nome deve ter mais de 3 caracteres, digite um nome adequado")
    
    default:
        console.log("O nome da peça está adequado")
        break;


