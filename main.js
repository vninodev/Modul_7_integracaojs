const form = document.getElementById('form-deposito');

function validaNome(NomeCompleto) {
    const nomeComoArray = NomeCompleto.split(' ');
    return nomeComoArray.length >= 2;

}

form.addEventListener('submit', function(e)  {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} deposiado para o client : ${nomeBeneficiario.value} - Conta: ${numeroContaBeneficiario.value}`;
    

    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
    alert(mensagemSucesso);
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';



    }else    {
        alert("O Nome não está completo");  
    }
})

console.log(form);