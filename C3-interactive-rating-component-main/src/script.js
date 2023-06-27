const btnSubmit = document.querySelector('#btnSubmit');
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const spanResult = document.querySelector('#spanResult');
const numbers = document.querySelectorAll('.item');
let selectedNumber = 0;

numbers.forEach(el => {
  el.addEventListener('click', () => {
    const number = el.textContent;
    selectedNumber = number;

    numbers.forEach(item => {
    if (item.textContent === number) {
      item.style.background = 'hsl(216, 12%, 54%)';
    } else {
        item.style.background = 'hsla(217, 12%, 63%, 0.086)';
      }
   })
  })
})

btnSubmit.addEventListener('click', () => {
  if (selectedNumber === 0) {
    swal({
      title: "Empty feedback",
      text: "Please select a number",
      icon: "error",
      dangerMode: true,
    })
  } else {
      firstCard.style.display = 'none';
      secondCard.style.display = 'flex';
      spanResult.textContent = `You selected ${selectedNumber} out of 5 `;
    }
})