const form = document.getElementById('checkout');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const cardNumberInput = document.getElementById('card-number');
const expiryDateInput = document.getElementById('expiry-date');
const cvvInput = document.getElementById('cvv');
const paymentMethodInput = document.getElementById('payment-method');

paymentMethodInput.addEventListener('change', () => {
  if (paymentMethodInput.value === 'hand-to-hand') {
    cardNumberInput.disabled = true;
    expiryDateInput.disabled = true;
    cvvInput.disabled = true;
  } else {
    cardNumberInput.disabled = false;
    expiryDateInput.disabled = false;
    cvvInput.disabled = false;
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }
  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }
  if (addressInput.value.trim() === '') {
    alert('Please enter your address.');
    addressInput.focus();
    return;
  }
  if (paymentMethodInput.value === '') {
    alert('Please select a payment method.');
    paymentMethodInput.focus();
    return;
  }
  if (paymentMethodInput.value === 'card') {
    if (cardNumberInput.value.trim() === '') {
      alert('Please enter your card number.');
      cardNumberInput.focus();
      return;
    }
    if (expiryDateInput.value.trim() === '') {
      alert('Please enter your card expiry date.');
      expiryDateInput.focus();
      return;
    }
    if (cvvInput.value.trim() === '') {
      alert('Please enter your card CVV.');
      cvvInput.focus();
      return;
    }
  }
  form.submit();
});
