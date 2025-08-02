function func() {
  document.querySelectorAll("input[name='aceitos']").forEach(input => input.checked = 'checked');
  document.getElementById('btConfirmar').click();
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn1").addEventListener("click", function () {
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func
      });
    })()
  });
});   
