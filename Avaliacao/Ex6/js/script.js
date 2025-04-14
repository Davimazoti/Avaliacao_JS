function calcular(){
    let numero1Input = document.getElementById("numero1")
    let numero2Input = document.getElementById("numero2")
    let opcaoInput = document.getElementById("opcao")

    if(numero1Input instanceof HTMLInputElement && numero2Input instanceof HTMLInputElement && opcaoInput instanceof HTMLInputElement){
        let numero1 = Number(numero1Input.value)
        let numero2 = Number(numero2Input.value)
        let opcao = Number(opcaoInput.value)

        let resutado = 0
        switch(opcao){
            case 1:
                resutado = numero1 + numero2;
                console.log(resutado);
                break
            
            case 2:
                resutado = numero1 - numero2;
                console.log(resutado)
                break

            case 3:
                resutado = numero1 * numero2;
                console.log(resutado)
                break

            case 4:
                if(numero2 <= 0){
                    alert("Erro")
                }
                resutado = numero1 / numero2
                console.log(resutado)
                break

            case 5:
                resutado = Math.pow(numero1, numero2)
                console.log(resutado)
                break

            case 6:
                resutado = Math.sqrt(numero1)
                console.log(resutado)
                break
        }
    }

}