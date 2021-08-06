(function () {
  const headers = document.querySelectorAll('.accordion__header');

  Array.prototype.forEach.call(headers, h => {
    let btn = h.querySelector('.accordion__heading');
    let target = h.parentElement;
    console.log(target);

    btn.onclick = () => {
      let expanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !expanded);
      target.classList.toggle('accordion__item--opened')
    }
  });
})();
