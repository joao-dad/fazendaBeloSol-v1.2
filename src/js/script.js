const slides = document.querySelectorAll('.slide');
let current = 0;
const time = 7000; // tempo de troca (7s)

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, time);


/*produtos */

function abrirModal(pdfPath) {
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('iframePDF');
  iframe.src = pdfPath;
  modal.style.display = 'block';
}

function fecharModal() {
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('iframePDF');
  modal.style.display = 'none';
  iframe.src = '';
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
  const modal = document.getElementById('pdfModal');
  if (event.target == modal) {
    fecharModal();
  }
}