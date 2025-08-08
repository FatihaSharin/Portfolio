const amazonLink = document.getElementById('amazonLink');

amazonLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  
  const userConfirmation = confirm('Proceed to Amazon?');

  if (userConfirmation) {
    // If the user confirms, open the link in a new tab
    window.open(amazonLink.href, '_blank');
  }
});

cart.addEventListener('click', () => {
  demo.textContent = "Bro..., go to Amazon or something. I ain't actually selling these shit.";
  cart.disabled = true;
  buy.disabled = true;
  cart.classList.add('active');
  buy.classList.add('active');

  setTimeout(() => {
    resetWebsite();
  }, 5000);
});

buy.addEventListener('click', () => {
  demo.innerHTML = "Bro..., go to Amazon or something. I ain't actually selling these shit. <br> What? You expected different message for this button? Oh, please~ I'm lazy lol. Go away. Shoo. Shoo.";
  cart.disabled = true;
  buy.disabled = true;
  cart.classList.add('active');
  buy.classList.add('active');

  setTimeout(() => {
    resetWebsite();
  }, 8000);
});

function resetWebsite() {
  demo.textContent = "";
  cart.disabled = false;
  buy.disabled = false;
  cart.classList.remove('active');
  buy.classList.remove('active');
}
