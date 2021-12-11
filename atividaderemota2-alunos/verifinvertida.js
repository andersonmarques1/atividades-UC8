{console.log ("agora vamos fazer a verificação invertida")}

let numeroDeAlunos2 = 10;

let contador = 0;

while (contador <= numeroDeAlunos2 ) {
    
    if (contador == 0){
    console.log ("O nmero atual é zero")
} else if (contador % 2 != 0){
    console.log(" O número " + contador + " é ímpar ")
} else{
    console.log (` O número ${contador} é par `) 
   }
   contador++;
}
