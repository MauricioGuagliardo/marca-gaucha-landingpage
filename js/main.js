/* ═══════════════════════════════════════════════════════════
   Marca Gaúcha — JavaScript
   ═══════════════════════════════════════════════════════════ */

/* ── Formulário de orçamento ────────────────────────────── */
function handleForm(e) {
  e.preventDefault();

  var nome       = document.getElementById('fn').value;
  var quantidade = document.getElementById('fq').value;
  var mensagem   = document.getElementById('fm').value;

  document.getElementById('qform').style.display = 'none';
  document.getElementById('qok').style.display = 'block';

  var texto = encodeURIComponent(
    'Olá! Quero um orçamento.\n\n' +
    '*Nome:* ' + nome + '\n' +
    '*Quantidade:* ' + (quantidade || 'Não informado') + '\n' +
    '*Necessidade:* ' + (mensagem || '—')
  );

  setTimeout(function () {
    window.open('https://wa.me/5551979908970?text=' + texto, '_blank');
  }, 1600);
}

/* ── Animação fade-in ao rolar a página ─────────────────── */
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(function (el) {
  observer.observe(el);
});
