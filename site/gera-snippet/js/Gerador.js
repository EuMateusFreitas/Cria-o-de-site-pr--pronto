function gerarCodigo() {
  const prefixo = document.getElementById('prefixo').value;
  const descricao = document.getElementById('descricao').value;
  const snippet = document.getElementById('snippet').value;
  const separatedSnippet = snippet.replace(/\\/g, "\\\\").replace(/"/g, '\\"').split("\n");
  const separatedSnippetLength = separatedSnippet.length;
  const newSnippet = separatedSnippet.map((line, index) => {
    return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
  });
  const codigo = `
    "${descricao}": {
      "prefix": "${prefixo}",
      "body": [
        ${newSnippet.join('\n')}
      ],
      "description": "${descricao}"
    },
  `;
  document.getElementById('codigo').textContent = codigo;
  hljs.highlightElement(document.getElementById('codigo-gerado'));

}

