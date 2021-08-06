(function() {

  const block = document.querySelector('.choose-country');
  const button = document.querySelector('.choose-country__action');
  const filter = document.querySelector('.choose-country__filter');
  const countriesList =  document.querySelector('.choose-country__countries');

  const countriesMap = [
    {
      letter: 'А',
      countries: ['Австралия', 'Австрия', 'Азербайджан', 'Албания'],
    },
    {
      letter: 'Б',
      countries: ['Багамские Острова', 'Бангладеш', 'Барбадос', 'Бахрейн'],
    },
    {
      letter: 'В',
      countries: ['Вануату', 'Великобритания', 'Венгрия', 'Венесуэла'],
    },
    {
      letter: 'Г',
      countries: ['Габон', 'Гаити', 'Гайана', 'Гамбия'],
    },
    {
      letter: 'д',
      countries: ['Дания', 'Джибути', 'Доминика', 'Доминикана'],
    },
    {
      letter: 'е',
      countries: ['Египет'],
    },
    {
      letter: 'з',
      countries: ['Замбия', 'Зимбабве'],
    },
    {
      letter: 'и',
      countries: ['Израиль', 'Индия', 'Индонезия', 'Иордания'],
    },
    {
      letter: 'к',
      countries: ['Кабо-Верде', 'Казахстан', 'Камбоджа', 'Камерун'],
    },
    {
      letter: 'л',
      countries: ['Лаос', 'Латвия', 'Лесото', 'Либерия'],
    },
    {
      letter: 'м',
      countries: ['Маврикий', 'Мавритания', 'Мадагаскар', 'Малави'],
    },
    {
      letter: 'н',
      countries: ['Намибия', 'Науру', 'Непал', 'Нигер'],
    },
    {
      letter: 'о',
      countries: ['ОАЭ', 'Оман'],
    },
    {
      letter: 'п',
      countries: ['Пакистан', 'Палау', 'Папуа - Новая Гвинея', 'Парагвай'],
    },
    {
      letter: 'р',
      countries: ['Руанда', 'Румыния', 'Россия'],
    },
    {
      letter: 'с',
      countries: ['Сальвадор', 'Самоа', 'Сан-Марино'],
    },
    {
      letter: 'т',
      countries: ['Таджикистан', 'Таиланд', 'Танзания', 'Того'],
    },
    {
      letter: 'у',
      countries: ['Уганда', 'Узбекистан', 'Украина', 'Уругвай'],
    },
    {
      letter: 'ф',
      countries: ['Фиджи', 'Филиппины', 'Финляндия', 'Франция'],
    },
    {
      letter: 'х',
      countries: ['Хорватия'],
    },
    {
      letter: 'ч',
      countries: ['Чад', 'Черногория', 'Чехия', 'Чили'],
    },
    {
      letter: 'ш',
      countries: ['Швейцария', 'Швеция', 'Шри-Ланка'],
    },
    {
      letter: 'э',
      countries: ['Эквадор', 'Эритрея', 'Эсватини', 'Эстония', 'Эфиопия'],
    },
    {
      letter: 'ю',
      countries: ['ЮАР', 'Южный Судан'],
    },
    {
      letter: 'я',
      countries: ['Ямайка', 'Япония'],
    },
  ];

  countriesMap.map((item, index) => {
    const letterContainer = document.createElement('li');
    letterContainer.setAttribute('role','presentation');

    filter.appendChild(letterContainer);
    const tab = document.createElement('a');
    tab.classList.add('choose-country__filter-button');
    tab.setAttribute('href', `#list${index}`);
    tab.setAttribute('role', 'tab');
    tab.setAttribute('tabindex', '-1');
    if (index != 0) {

    } else {
      tab.setAttribute('aria-selected', 'true');
    }

    tab.innerHTML= `${item.letter}`
    letterContainer.appendChild(tab);

    const panel = document.createElement('div');
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('id', `#list${index}`);
    panel.setAttribute('aria-label', `${item.letter}`);
    panel.classList.add('choose-country__countries-panel')
    countriesList.appendChild(panel);

    const panelHeading = document.createElement('h2');
    panelHeading.innerHTML = `${item.letter}`;
    panelHeading.classList.add('choose-country__countries-heading');

    const countriesContainer = document.createElement('ul');
    countriesContainer.classList.add('choose-country__countries-list');

    panel.appendChild(panelHeading);
    panel.appendChild(countriesContainer);

    if (index != 0) {
      countriesContainer.hidden = true;
    }

    item.countries.map(c => {
      const country = document.createElement('li');
      countriesContainer.appendChild(country);
      country.innerHTML = `
        <button class="choose-country__country-button" type="button">
          ${c}
        </button>
      `
    });
  });

  button.addEventListener('click', () => {
    block.classList.toggle('choose-country--opened');
  });

  const mediaQueryDesktop= window.matchMedia('(min-width: 1440px)');
  const allCountriesLists = document.querySelectorAll('.choose-country__countries-list');

  if (typeof window.matchMedia !== 'undefined') {
    if (mediaQueryDesktop.matches && allCountriesLists) {
      block.classList.add('choose-country--opened');
      for (let countries of allCountriesLists) {
        countries.hidden = false;
      }
    }
  }

  mediaQueryDesktop.addEventListener('change', event => {
    if (event.matches && allCountriesLists) {
      block.classList.add('choose-country--opened');
      for (let countries of allCountriesLists) {
        countries.hidden = false;
      }

    } else {
      block.classList.remove('choose-country--opened');
      for (let countries of allCountriesLists) {
        countries.hidden = true;
      }
      allCountriesLists[0].hidden = false;
    }
  })
})();
