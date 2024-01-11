const originalFacebook = './images/icon-facebook.svg'; // Ruta de la imagen original
const hoverFacebook = './images/icon-facebook-hover.svg'; // Ruta de la imagen para hover
const facebookIcon = document.getElementById('facebook-img');
const originaltwitter = './images/icon-twitter.svg'; // Ruta de la imagen original
const hovertwitter = './images/icon-twitter-hover.svg'; // Ruta de la imagen para hover
const twitterIcon = document.getElementById('twitter-img');
const originalpinterest = './images/icon-pinterest.svg'; // Ruta de la imagen original
const hoverpinterest = './images/icon-pinterest-hover.svg'; // Ruta de la imagen para hover
const pinterestIcon = document.getElementById('pinterest-img');
const originalinstagram = './images/icon-instagram.svg'; // Ruta de la imagen original
const hoverinstagram = './images/icon-instagram-hover.svg'; // Ruta de la imagen para hover
const instagramIcon = document.getElementById('instagram-img');
const inputLink = document.getElementById('inputLink');
const btnGetShortLink = document.getElementById('btnGetShortLink');
const spanError = document.getElementById('spanError');
const shortLinksContainer = document.getElementById('shortLinksContainer');
const historyButtonContainer = document.getElementById('historyButtonContainer');
const menuMobileButton = document.getElementById('menuMobileButton');
const menuMobile = document.getElementById('menuMobile');

window.addEventListener('load', () => {
  const savedLinks = JSON.parse(localStorage.getItem('shortLinks')) || [];
  savedLinks.forEach((linkData) => {
    addShortLink(linkData.originalURL, linkData.shortLink);
  });

  if (savedLinks.length > 0) {
    showHistoryButton();
  }
});

menuMobileButton.addEventListener('click', () => {
  menuMobile.classList.toggle('flex');
  menuMobile.classList.toggle('hidden');
})

function saveLink(originalURL, shortLink) {
  const savedLinks = JSON.parse(localStorage.getItem('shortLinks')) || [];
  
  if (savedLinks.length >= 5) {
    // Eliminar el enlace más antiguo (el primero en la lista)
    savedLinks.shift();
  }

  savedLinks.push({ originalURL, shortLink });
  localStorage.setItem('shortLinks', JSON.stringify(savedLinks));
}

function clearLocalStorage() {
  localStorage.clear();
  
  const currentLinks = document.querySelectorAll('#shortLinksContainer > div');    
  currentLinks.forEach((link) => {
    link.remove();
  });

  historyButtonContainer.classList.add('hidden');
  historyButtonContainer.classList.remove('flex');  
}

function showHistoryButton() {
  historyButtonContainer.classList.add('flex');
  historyButtonContainer.classList.remove('hidden');  
}

function changeImage(changeIcon) {
  facebookIcon.src = changeIcon === 'facebook' ? hoverFacebook : originalFacebook;
  twitterIcon.src = changeIcon === 'twitter' ? hovertwitter : originaltwitter;
  pinterestIcon.src = changeIcon === 'pinterest' ? hoverpinterest : originalpinterest;
  instagramIcon.src = changeIcon === 'instagram' ? hoverinstagram : originalinstagram;
}

function showError(errorMessage) {
  spanError.classList.remove('hidden');
  spanError.classList.add('block');
  spanError.textContent = errorMessage;
  inputLink.classList.add('focus:outline-Red', 'text-Red');
  inputLink.focus();
}

function cleanError() {
  spanError.classList.add('hidden');
  spanError.classList.remove('block');  
  inputLink.classList.remove('focus:outline-Red', 'text-Red');
  inputLink.focus();
}

inputLink.addEventListener("input", function () {
  cleanError()
})

function validateURL() {
  const URL = inputLink.value;

  if (URL.trim() === '') {
    showError('Invalid link');
    return;
  } else if (!URL.startsWith('https://')) {
      showError('Link must start with https://');
    }  else {
        cleanError()
      }
}

btnGetShortLink.addEventListener('click', async () => {
  validateURL()
  const URL = inputLink.value;

  try {
    const fetchAPI = await fetch(`https://api.shrtco.de/v2/shorten?url=${URL}`);
    const response = await fetchAPI.json();
    
    if (response.ok === false) {
      showError('Invalid link');
      return
    } 

    validateLengthLinkContainer();

    const shortLink = response.result.full_short_link;
    addShortLink(URL, shortLink);
    saveLink(URL, shortLink);
    showHistoryButton();
  } catch (error) {
      showError('Invalid link');
      console.log(error);
    }
})

function validateLengthLinkContainer() {
  const currentLinks = document.querySelectorAll('#shortLinksContainer > div');
    
  if (currentLinks.length >= 5) {
    // Si hay 5 o más enlaces, eliminar el enlace más antiguo
    currentLinks[0].remove();
  }
}

function addShortLink(URL, link) {
  const linkContainer = document.createElement('div');
  linkContainer.classList.add("flex", "justify-between", "gap-y-2", "flex-wrap", "items-center", "bg-white", "p-4", "lg:p-6", "mb-4", "rounded-md");

  const linkElement = document.createElement('a');
  linkElement.href = URL; 
  linkElement.textContent = URL;
  linkElement.classList.add('text-black');
  linkElement.target = '_blank'; 

  const shortLinkElement = document.createElement('a');
  shortLinkElement.href = link;
  shortLinkElement.classList.add('text-Cyan', 'mr-2');
  shortLinkElement.textContent = link;
  shortLinkElement.target = '_blank';

  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy';
  copyButton.classList.add('text-white', 'font-bold', 'bg-Cyan', 'rounded-lg', 'px-6', 'py-2', 'lg:text-lg', 'hover:brightness-[1.2]', 'transition-all');
  copyButton.addEventListener('click', () => {
    // Copiar al portapapeles
    navigator.clipboard.writeText(link).then(() => {
      copyButton.textContent = 'Copied!';
      copyButton.classList.remove('bg-Cyan');
      copyButton.classList.add('bg-DarkViolet');
    }).catch((error) => {
      console.error('No se pudo copiar al portapapeles: ', error);
    });
  });

  const shortLinkAndButtonContainer = document.createElement('div');
  shortLinkAndButtonContainer.classList.add("flex", "flex-wrap", "w-full", "lg:w-auto", "justify-between", "lg:justify-center", "lg:items-center", "bg-white", "gap-x-3");

  shortLinkAndButtonContainer.appendChild(shortLinkElement);
  shortLinkAndButtonContainer.appendChild(copyButton);

  linkContainer.appendChild(linkElement);
  linkContainer.appendChild(shortLinkAndButtonContainer);

  shortLinksContainer.appendChild(linkContainer);
}