function script2(){
// Seleciona todas as terceiras células (td) do corpo da tabela
const terceirasCelulas = document.querySelectorAll('table tbody tr td:nth-child(3)');

// Extrai os textos e remove valores vazios, nulos e "Imprimir"
const valores = Array.from(terceirasCelulas)
  .map(celula => celula.innerText.trim())
  .filter(valor => valor !== "" && valor !== null && valor !== "Imprimir");

// Abre nova janela
const novaJanela = window.open("", "_blank");

// Estrutura HTML
let html = `
<html>
<head>
<title>Emails</title>
<style>
body { font-family: Arial; padding: 20px; }
.linha { margin-bottom: 6px; }
</style>
</head>
<body>
<h2>Valores da 3ª Coluna</h2>
`;

// Adiciona cada valor em uma linha
valores.forEach(valor => {
  html += `<div class="linha">${valor}</div>`;
});

html += `
</body>
</html>
`;

novaJanela.document.write(html);
novaJanela.document.close();

}

function script1(conteudo) {
  var clist = document.querySelectorAll("input[name='aceitos']");
  for (var i = 0; i < clist.length; ++i) { clist[i].checked = "checked"; }
  document.getElementById('btConfirmar').click();
}

document.addEventListener("DOMContentLoaded", function () {
  // // importar
  // document.querySelector("#btn1").addEventListener("click", function () {
  //   var conteudo = document.querySelector("#conteudo").value.trim().replace(/[\r\n]+/gm, "<quebra>").trim();
  //   (async () => {
  //     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //     chrome.scripting.executeScript({
  //       target: { tabId: tab.id },
  //       func: script1,
  //       args: [conteudo],
  //     });
  //   })()
  // });

  // analisar
  document.querySelector("#btn1").addEventListener("click", function () {
    // var totalDeAulas = prompt("Quantas linhas da tabela deseja apagar?");
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script1/*,
          args: [totalDeAulas]*/
      });
    })()
  });
  
  // exportar emails
   document.querySelector("#btn2").addEventListener("click", function () {     
     (async () => {
       const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
       chrome.scripting.executeScript({
         target: { tabId: tab.id },
         func: script2/*,
           args: [totalDeAulas]*/
       });
     })()
  });

  // // exportar com data
  // document.querySelector("#btn4").addEventListener("click", function () {
  //   // var totalDeAulas = prompt("Quantas linhas da tabela deseja apagar?");
  //   (async () => {
  //     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //     chrome.scripting.executeScript({
  //       target: { tabId: tab.id },
  //       func: script4/*,
  //         args: [totalDeAulas]*/
  //     });
  //   })()
  // });
});   
