function setCookie(name, value) {
  document.cookie = `${name}=${value};path=/`;
}


function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
      }
  }
  return null;
}


function saveLanguage() {
  const languageRadios = document.getElementsByName('language');
  let selectedLanguage = null;
  for (let i = 0; i < languageRadios.length; i++) {
      if (languageRadios[i].checked) {
          selectedLanguage = languageRadios[i].value;
          break;
      }
  }

  if (selectedLanguage) {
      setCookie('selectedLanguageCookie', selectedLanguage);
      localStorage.setItem('selectedLanguageStorage', selectedLanguage);
  }
}


function initLanguageSelection() {
  const languageRadios = document.getElementsByName('language');
  const selectedLanguageCookie = getCookie('selectedLanguageCookie');
  const selectedLanguageStorage = localStorage.getItem('selectedLanguageStorage');

  if (selectedLanguageCookie) {
      for (let i = 0; i < languageRadios.length; i++) {
          if (languageRadios[i].value === selectedLanguageCookie) {
              languageRadios[i].checked = true;
              break;
          }
      }
  } else if (selectedLanguageStorage) {
      for (let i = 0; i < languageRadios.length; i++) {
          if (languageRadios[i].value === selectedLanguageStorage) {
              languageRadios[i].checked = true;
              break;
          }
      }
      setCookie('selectedLanguageCookie', selectedLanguageStorage);
  }
}

window.onload = initLanguageSelection;