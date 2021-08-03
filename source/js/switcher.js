(function() {
  const button = document.querySelector('.header__action');
  const switcher = document.querySelector('.switcher');
  const header = document.querySelector('.header');

  button.addEventListener('click', () => {
    switcher.classList.toggle('switcher--opened');
    header.classList.toggle('header--opened');
  })
})();
