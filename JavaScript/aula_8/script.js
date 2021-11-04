const validarEmail = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input email-input que terá como ação esta função de validarEmail
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';

        obs: caso o email (value) que está no input for inválido deverá alterar a class da span com id="email-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso o email seja válido adicione a class d-none para que o aviso suma
    */
    
    let emailDigitado = document.getElementById('email-input-registration').value;
    let
    

}


const validarSenha = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input password-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        2 - obrigatório ter ao menos um número;
        3 - obrigatório ter ao menos um carácter especial;
        4 - obrigatório ter ao menos 8 caractéres;
        
        // TODO: falta fazer
        1 - obrigatório ter ao menos uma letra minúscula;
        5 - a senha não pode conter espaços em branco;
        6 - obrigatório ter ao menos uma letra maiúscula;

        obs: caso a senha (value) que está no input for inválido deverá alterar a class da span com id="password-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso a senha seja válida adicione a class d-none para que o aviso suma
    */

    ehValido = true;

    let senhaDigitada = document.getElementById('password-input-registration').value;

    let possuiOitoCaracteres = senhaDigitada.length >= 8;       //deve ter pelo menos 8 caracteres
    
    let arrayChar = [...senhaDigitada]; // Ex: 'banana123' =>  ['b', 'a', 'n' ....]
    
    let possuiLetra = arrayChar.some( char => char.toLowerCase() !== char.toUpperCase() );
    
    // é um caracter especial
    let possuiCharEspecial = arrayChar.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );  
    
    
    //                                          (      aqui vemos que não é letra     )    ( aqui vemos que é número )
    let possuiNumero = arrayChar.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );
    
    // TODO: adicionar regras
    let naoPossuiEspacos = arrayChar.some( char => char === ' ');   

    let possuiLetraMaiuscula = arrayChar.some( char => char.toLowerCase() !== char.toUpperCase() && char === char.toUpperCase() );

    let possuiLetraMinuscula = arrayChar.some( char => char.toLowerCase() !== char.toUpperCase() && char === char.toLowerCase() );;
    
    ehValido = possuiLetra && possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && possuiCharEspecial && possuiNumero && !naoPossuiEspacos;

   
    let erroSenha = document.getElementById('password-registration-error');

    erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}



const validarData = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input date-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        1 - deve ser uma data válida;
        2 - não pode ser uma data futura;
        3 - deve ser uma data de no mínimo 18 anos atrás; (idade > 18)

        obs: caso a data (value) que está no input for inválido deverá alterar a class da span com id="date-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso a data seja válida adicione a class d-none para que o aviso suma
    */

    
}
const validarCadastro = () => {
        alert(`Cadastro ${validarData() && validarEmail() && validarSenha() ? 'válido!' : 'inválido'}`);
    }