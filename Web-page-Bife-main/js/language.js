// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és "https://miweb.es?lang=es" , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')) {
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar l'idioma a la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  // Obtenir el fitxer json corresponent
  const response = await fetch(`./json/${lang}.json`);
  const data = await response.json();

  // console.log(data);

  // Canviar els texts (Aquesta és la part que heu de modificar a la pràctica)
  document.getElementById('t-home').innerHTML = data.web.nav.home;
  document.getElementById('t-menu').innerHTML = data.web.nav.menu;
  document.getElementById('t-reservations').innerHTML = data.web.nav.reservation;
  document.getElementById('t-about-us').innerHTML = data.web.nav.about_us;

  document.getElementById('t-welcome').innerHTML = data.web.welcome;

  document.getElementById('t-menu-title').innerHTML = data.web.menu.menu_title;
  document.getElementById('t-menu-subtitle').innerHTML = data.web.menu.menu_subtitle;
  document.getElementById('t-menu-first-dish').innerHTML = data.web.menu.menu_first_dish;
  document.getElementById('t-menu-first-price').innerHTML = data.web.menu.menu_first_price;
  document.getElementById('t-menu-second-dish').innerHTML = data.web.menu.menu_second_dish;
  document.getElementById('t-menu-second-price').innerHTML = data.web.menu.menu_second_price;
  document.getElementById('t-menu-third-dish').innerHTML = data.web.menu.menu_third_dish;
  document.getElementById('t-menu-third-price').innerHTML = data.web.menu.menu_third_price;

  document.getElementById('t-about-us-title').innerHTML = data.web.about_us.about_us_title;
  //document.getElementById('t-about-us-text').innerHTML = data.web.about_us.about_us_text;
  document.getElementById('t-about-us-button').innerHTML = data.web.about_us.about_us_button;

  document.getElementById('t-contact-us-title').innerHTML = data.web.contact_us.contact_us_title;
  document.getElementById('t-contact-us-email-1').innerHTML = data.web.contact_us.contact_us_email_1;
  document.getElementById('t-contact-us-email-2').innerHTML = data.web.contact_us.contact_us_email_2;
  document.getElementById('t-contact-us-phone-1').innerHTML = data.web.contact_us.contact_us_phone_1;
  document.getElementById('t-contact-us-phone-2').innerHTML = data.web.contact_us.contact_us_phone_2;
  document.getElementById('t-contact-us-location').innerHTML = data.web.contact_us.contact_us_location;
}

// changeLanguage('ca');