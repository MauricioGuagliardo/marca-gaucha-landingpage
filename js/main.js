/* ═══════════════════════════════════════════════════════════
   Marca Gaúcha — JavaScript
   ═══════════════════════════════════════════════════════════ */

/* ── Formulário de orçamento ────────────────────────────── */
function handleForm(e) {
  e.preventDefault();

  var nome       = document.getElementById('fn').value;
  var quantidade = document.getElementById('fq').value;
  var mensagem   = document.getElementById('fm').value;

  var texto = encodeURIComponent(
    'Olá! Quero um orçamento.\n\n' +
    '*Nome:* ' + nome + '\n' +
    '*Quantidade:* ' + (quantidade || 'Não informado') + '\n' +
    '*Necessidade:* ' + (mensagem || '—')
  );

  var url = 'https://wa.me/555197908970?text=' + texto;

  /* Abre o WhatsApp ANTES de trocar o conteúdo do form,
     enquanto ainda estamos dentro do evento do usuário.
     Isso evita que o browser bloqueie como popup. */
  window.open(url, '_blank');

  /* Troca o form pela mensagem de sucesso */
  document.getElementById('qform').style.display = 'none';
  document.getElementById('qok').style.display   = 'block';
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
