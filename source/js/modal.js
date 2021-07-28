(function() {
  const dialog = document.createElement('div');
  const button = document.querySelector('.tariffs__button');
  button.addEventListener('click',
  () => {
    console.log('ddd');
    const elems = document.querySelectorAll('body  > *');
    Array.prototype.forEach.call(elems, elem => {
      elem.setAttribute('inert', 'inert');
    })

    document.body.appendChild(dialog);

    dialog.classList.add('modal');
    dialog.innerHTML = `
      <div
        class="modal__inner"
        role="dialog"
        aria-labelledby="modal"
        tabindex="-1"
        aria-modal="true">
        <h2 id="modal" class="modal__heading">Бизнес-тарифы</h2>
        <dl class="offers>
          <dt class="offers__term">Реклама у блоггера</dt>
          <dd class="offers__desc">300 000 руб./пост</dd>
          <dt class="offers__term">Накрутка подписчиков</dt>
          <dd class="offers__desc">от 1 руб./шт.</dd>
          <dt class="offers__term">Лайки от ботов</dt>
          <dd class="offers__desc">от 20 коп./лайк</dd>
          <dt class="offers__term">Ваш продакт-плейсмент</dt>
          <dd class="offers__desc">Индивидуально</dd>
        </dl>
        <button
          type="button"
          class="modal__close">
          Закрыть окно
        </button>
      </div>
    `
    const close = () => {
      Array.prototype.forEach.call(elems, elem => {
        if (elem !== dialog) {
          elem.removeAttribute('inert');
        }
      });
      dialog.parentNode.removeChild(dialog);
      setTimeout(() => { button.focus()}, 10);
    }

    const closeButton = document.querySelector('.modal__close');
    if (closeButton) {
      closeButton.addEventListener('click', () => close());
    }

    dialog.addEventListener('keydown', e => {
      if (e.keyCode == 27) {
        e.preventDefault();
        close();
      }
    })
  });
})();
