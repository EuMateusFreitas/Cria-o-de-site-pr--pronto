const form = document.querySelector('form');
  const prefixoInput = document.querySelector('#prefixo');
  const descricaoInput = document.querySelector('#descricao');
  const textoInput = document.querySelector('#texto');
  const output = document.querySelector('pre code');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // impede que o formulário seja enviado

    const prefixo = prefixoInput.value;
    const descricao = descricaoInput.value;
    const texto = textoInput.value;

    const objetoJSON = {
      [descricao]: {
        "prefix": prefixo,
        "body": [texto],
        "description": descricao
      }
    };

    output.textContent = JSON.stringify(objetoJSON, null, 2); // exibe o objeto JSON formatado dentro de um elemento pre/code
  });