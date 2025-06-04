import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var maiuculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var minusculas = 'abcdefghijklmnopqrstuvwxyz';
var numeros = '0123456789';


rl.question('Qual o tamanho da senha?\n',(tamanho) => {
    tamanho = parseInt(tamanho);
    if(tamanho <= 0){
        console.log('Tamanho inválido. Deve ser um número maior que zero.');
        rl.close();
        return;
    }

    rl.question('Você quer incluir letras maiúsculas? (s/n)\n', (maiusculas) => {
        rl.question('Você quer incluir letras minúsculas? (s/n)\n', (minusculass) => {
            rl.question('Você quer incluir números? (s/n)\n', (numeross) => {
                
                let senha = '';
                let caracters = '';

                if(maiusculas.toLocaleLowerCase()=== 's'){
                    caracters += maiuculas
                }

                if(minusculass.toLocaleLowerCase() === 's'){
                    caracters += minusculas
                }

                if(numeross.toLocaleLowerCase() === 's'){
                    caracters += numeros
                }
            


                for (let i = 0; i < tamanho; i++) {
                    const randomIndex = Math.floor(Math.random() * caracters.length);
                    senha += caracters[randomIndex];
                }

                console.log(`A senha gerada é: ${senha}`);
                rl.close();
                
            })
        })
    })



})