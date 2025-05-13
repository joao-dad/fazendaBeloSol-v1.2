/*logo parceiros */

const slides = document.querySelectorAll('.slide');
let current = 0;
const time = 7000; // tempo de troca (7s)

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, time);

/* fundo menu*/

window.addEventListener('scroll', function() {
  const menu = document.querySelector('.menu-fixo');
  if (window.scrollY > 50) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
});

/*contar numeros */

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.num h3');
  let counted = false;

  const animateCount = (el, target) => {
    let start = 0;
    const speed = 200; // menor = mais rápido
    const step = () => {
      const increment = Math.ceil(target / speed);
      start += increment;
      if (start < target) {
        el.textContent = start;
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('pt-PT');
      }
    };
    step();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          animateCount(counter, target);
        });
        counted = true;
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('.num'));
});

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

/*tempo */
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');


/*videos */

function abrirModalVideo() {
  document.getElementById("modalVideo").style.display = "block";
}

function fecharModalVideo() {
  document.getElementById("modalVideo").style.display = "none";
}
