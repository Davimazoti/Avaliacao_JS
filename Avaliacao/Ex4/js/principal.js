function calcular(){
   let numero1Input = document.getElementById("numero1")
   let numero2Input = document.getElementById("numero2")

   if (numero1Input instanceof HTMLInputElement && numero2Input instanceof HTMLInputElement){
    let numero1 = Number(numero1Input.value)
    let numero2 = Number(numero2Input.value)
    console.log(numero1)
    console.log(numero2)

   
    if(numero1 == numero2){
        alert("Números não pode ser igual")
    }
   
    numero1 = numero1 -1
    
    let subtraido = 0


    if(numero1 <= 0){
        subtraido = numero1 + numero2;
    }

    else{
        numero1 = numero1 * +1
        subtraido = numero1 - numero2;
    }

    let cont = 0
    console.log(subtraido)

    while(true){
        if ((subtraido % 5) == 0){
            cont = cont + 1;
        }
        subtraido = subtraido - 1;

        if(subtraido <= 0){
            console.log(cont)
            break
        }
    }
   }
}

