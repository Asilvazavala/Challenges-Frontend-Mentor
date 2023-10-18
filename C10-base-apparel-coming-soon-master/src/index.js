const email = document.getElementById('email');
const submitInfo = document.getElementById('submitInfo');
const iconError = document.getElementById('iconError');
const textError = document.getElementById('textError');

submitInfo.addEventListener('click', (e) => {  
  e.preventDefault();

  const emailValue = email.value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
  if (!emailValue.match(emailRegex)) {
    iconError.style.display = 'block';
    textError.style.display = 'block';
  } else {
    iconError.style.display = 'none';
    textError.style.display = 'none';
  }
});