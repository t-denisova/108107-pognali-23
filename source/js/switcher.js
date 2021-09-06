(function() {
  const button = document.querySelector('.header__action');
  const switcher = document.querySelector('.switcher');
  const header = document.querySelector('.header');
  const logo = document.querySelector('.header__logo');
  const burger = document.querySelector('.header__action');

  button.addEventListener('click', () => {
    switcher.classList.toggle('switcher--opened');
    header.classList.toggle('header--opened');

    if (logo.classList.contains('logo--inverse') && !headerIsReversed) {
      logoNormal.style.display="block";
      logoInverse.style.display="inverse";
      burger.classList.remove('header__action--inverse');
    }

    if (!logo.classList.contains('logo--inverse') && header.classList.contains('header--opened')) {
      logoNormal.style.display="none";
      logoInverse.style.display="block";
      burger.classList.add('header__action--inverse');
    }

    if (switcher.classList.contains('switcher--opened')) {
      disableScroll();
    } else {
      enableScroll();
    }
  })

  var keys = {37: 1, 38: 1, 39: 1, 40: 1};

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; }
    }));
  } catch(e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
})();
