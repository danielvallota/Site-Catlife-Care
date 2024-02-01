const form = document.getElementById('form-msn');

function validateNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split (' ');
    return nomeComoArray.length >=2;
    
}

form.addEventListener('submit', function (e) {
    var formEValido = false;
    e.preventDefault ();

    const nomeCompleto = document.getElementById('nome-completo');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('texto');
    const telefone = document.getElementById('telefone')
    const mensagemSucesso = 'Obrigado por deixar uma mensagem de forma expontânea, humano.';

    formEValido = validateNome (nomeCompleto.value)
    if (formEValido) {
        alert(mensagemSucesso);

        nomeCompleto.value = ''
        email.value = ''
        mensagem.value = ''
        telefone.value = ''



    } else {
        alert('Os dados não estão completos, favor corrigir.')
    }

})
console.log(form)