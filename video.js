/* ALAVANQUE — reusable YouTube player.
   Nothing is loaded from YouTube until the visitor clicks: posters are local
   images, so the pages stay fast and no third-party request happens on load.

   Markup:
     <button class="av-video" data-video="<id>" data-video-title="...">…poster…</button>
       → plays in place, inside its own frame.
     <button class="av-video-link" data-video="<id>" data-video-title="...">…</button>
       → opens the shared lightbox. */
(function () {
  const EMBED = 'https://www.youtube-nocookie.com/embed/';
  const PARAMS = '?autoplay=1&rel=0&playsinline=1&modestbranding=1';

  function buildFrame(id, title) {
    const iframe = document.createElement('iframe');
    iframe.src = EMBED + encodeURIComponent(id) + PARAMS;
    iframe.title = title || 'Vídeo Alavanque';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    return iframe;
  }

  /* ---------- play in place ---------- */
  function playInline(host) {
    if (host.classList.contains('is-playing')) return;
    const id = host.dataset.video;
    if (!id) return;
    host.classList.add('is-playing');
    host.innerHTML = '';
    host.appendChild(buildFrame(id, host.dataset.videoTitle));
  }

  /* ---------- lightbox ---------- */
  let modal = null;
  let modalFrame = null;
  let modalTitle = null;
  let returnFocus = null;

  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement('div');
    modal.className = 'av-video-modal';
    modal.id = 'videoModal';
    modal.hidden = true;
    modal.innerHTML =
      '<div class="av-video-modal__shell" role="dialog" aria-modal="true" aria-labelledby="videoModalTitle">' +
        '<div class="av-video-modal__bar">' +
          '<p class="av-video-modal__title" id="videoModalTitle"></p>' +
          '<button class="av-video-modal__close" type="button" aria-label="Fechar vídeo">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="av-video-modal__frame"></div>' +
      '</div>';
    document.body.appendChild(modal);
    modalFrame = modal.querySelector('.av-video-modal__frame');
    modalTitle = modal.querySelector('.av-video-modal__title');
    modal.querySelector('.av-video-modal__close').addEventListener('click', closeVideo);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeVideo();
    });
    return modal;
  }

  function onModalKeydown(event) {
    if (event.key === 'Escape') {
      closeVideo();
      return;
    }
    if (event.key !== 'Tab' || !modal) return;
    const items = Array.from(modal.querySelectorAll('button, iframe, [href]'));
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openVideo(id, title, trigger) {
    if (!id) return;
    ensureModal();
    returnFocus = trigger || document.activeElement;
    modalTitle.textContent = title || 'Vídeo Alavanque';
    modalFrame.innerHTML = '';
    modalFrame.appendChild(buildFrame(id, title));
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onModalKeydown);
    window.setTimeout(() => modal.querySelector('.av-video-modal__close').focus(), 40);
  }

  function closeVideo() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modalFrame.innerHTML = '';
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onModalKeydown);
    if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
    returnFocus = null;
  }

  /* ---------- wiring ---------- */
  document.addEventListener('click', (event) => {
    const inline = event.target.closest('.av-video[data-video]');
    if (inline) {
      event.preventDefault();
      playInline(inline);
      return;
    }
    const trigger = event.target.closest('[data-video]:not(.av-video)');
    if (trigger) {
      event.preventDefault();
      openVideo(trigger.dataset.video, trigger.dataset.videoTitle, trigger);
    }
  });

  window.openVideo = openVideo;
  window.closeVideo = closeVideo;
})();
