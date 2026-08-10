/* ALAVANQUE — aviso de cookies.
   O site não usa ferramentas de análise nem pixel de anúncio. Os únicos
   cookies de terceiros vêm do YouTube, quando o visitante assiste a um vídeo.
   Por isso o aviso é informativo: apenas explica e registra a confirmação.

   Basta incluir <script src="cookies.js" defer></script> na página. */
(function () {
  var STORAGE_KEY = 'alavanque:aviso-cookies';
  var POLICY_URL = 'politica-de-privacidade.html';

  function jaConfirmou() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === 'ok';
    } catch (e) {
      /* Navegação anônima ou armazenamento bloqueado: mostra o aviso e segue. */
      return false;
    }
  }

  function registrarConfirmacao() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'ok');
    } catch (e) {
      /* Sem armazenamento o aviso volta na próxima visita — sem problema. */
    }
  }

  function montarAviso() {
    var note = document.createElement('aside');
    note.className = 'cookie-note';
    note.id = 'cookieNote';
    note.setAttribute('role', 'region');
    note.setAttribute('aria-label', 'Aviso sobre cookies');
    note.innerHTML =
      '<p class="cookie-note__head">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"/><path d="M8.5 8.5h.01"/><path d="M15 15h.01"/><path d="M9.5 14.5h.01"/>' +
        '</svg>' +
        'Sobre os cookies deste site' +
      '</p>' +
      '<p>Este site guarda apenas o necessário para funcionar. Não usamos cookies de publicidade. ' +
        'Ao assistir a um vídeo aqui, o YouTube pode gravar cookies próprios.</p>' +
      '<div class="cookie-note__actions">' +
        '<button class="av-btn av-btn--accent av-btn--sm" type="button" id="cookieNoteOk">Entendi</button>' +
        '<a class="cookie-note__link" href="' + POLICY_URL + '">Ler a política de privacidade</a>' +
      '</div>';
    return note;
  }

  function esconder(note) {
    note.classList.remove('is-visible');
    document.body.classList.remove('has-cookie-note');
    window.setTimeout(function () {
      if (note.parentNode) note.parentNode.removeChild(note);
    }, 400);
  }

  function iniciar() {
    if (jaConfirmou()) return;

    var note = montarAviso();
    document.body.appendChild(note);
    document.body.classList.add('has-cookie-note');

    note.querySelector('#cookieNoteOk').addEventListener('click', function () {
      registrarConfirmacao();
      esconder(note);
    });

    /* Um quadro depois, para a transição de entrada acontecer. */
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        note.classList.add('is-visible');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
