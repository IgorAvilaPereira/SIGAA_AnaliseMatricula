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

  // // limpar
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
  
  // // exportar
  // document.querySelector("#btn3").addEventListener("click", function () {
  //   // var totalDeAulas = prompt("Quantas linhas da tabela deseja apagar?");
  //   (async () => {
  //     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //     chrome.scripting.executeScript({
  //       target: { tabId: tab.id },
  //       func: script3/*,
  //         args: [totalDeAulas]*/
  //     });
  //   })()
  // });

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
