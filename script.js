document.addEventListener("DOMContentLoaded", function() {
    var h1Element = document.querySelector('h1');
    setTimeout(function() {
      h1Element.classList.add('h1-normal');
    }, 1000); // 1000 milissegundos = 1 segundo
  });