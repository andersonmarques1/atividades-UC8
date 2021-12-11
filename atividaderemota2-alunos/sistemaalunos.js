let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
//  console.log(contador)   
   
 if (contador == 0){
     console.log ("O número atual é zero")
 } else if (contador % 2 ==0){
     console.log(" O número " + contador + " é par ")
 } else{
     console.log (` O número ${contador} é Impar `) 
    }
}

{console.log ("Agora vamos testar o comando while")}

let numeroDeAlunos1 = 10;

let contador = 0;

while (contador <= numeroDeAlunos1 ) {
    
    if (contador == 0){
    console.log ("O nmero atual é zero")
} else if (contador % 2 ==0){
    console.log(" O número " + contador + " é par ")
} else{
    console.log (` O número ${contador} é Impar `) 
   }
   contador++;
}

{console.log ("agora vamos fazer uma listagem de nomes de alunos")}

let nomeDeAluno = ["aluno 1", "aluno 2", "aluno 3", "aluno 4"]

for (let nome of nomeDeAluno){
console.log (`Esta pessoa se chama ${nome}`)

}
