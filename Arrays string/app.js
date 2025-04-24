let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function calcular(){

    let texto = document.getElementById('texto').value
    let contadorVogais = 0

    div.innerHTML = ''
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a' || texto [i] == 'A') {
            contadorVogais++
        }else if(texto[i] == 'e' || texto [i] == "E"){
            contadorVogais++
        }else if(texto[i] == 'i' || texto [i] == "I"){
            contadorVogais++
        }else if(texto[i] == 'o' || texto [i] == "O"){
            contadorVogais++
        }else if(texto[i] == 'u' || texto [i] == "U"){
            contadorVogais++
        }



        if (i == texto.length -1) {
            div.innerHTML += `${texto[i]}`
        }else{
        div.innerHTML += `${texto[i]} -`
    }
  }
 div.innerHTML += `<br><br><strong>Total de vogais:</strong> ${contadorVogais}`
}

btn.addEventListener('click', calcular)