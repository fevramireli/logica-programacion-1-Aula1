//Buena práctica: Ordenar en la parte superior del código las variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Por favor, indica un número entre 1 y ${numeroMaximoPosible}:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Estatus: Acierto, el resultado de la condicional es TRUE
        alert(`Acertaste! El número es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El múmero secreto es menor.');
        } else {
            alert('El número secreto es mayor.');
        }
        //Incremento de contador en FALSE
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos.`);
            break;
        }
        //Estatus: No Acierto, el resultado de la condicional es FALSE
        //alert('No acertaste el número.')
    }
}