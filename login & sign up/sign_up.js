const toggleButtons = document.querySelectorAll('.toggle button');
const forms = document.querySelectorAll('form');

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    forms.forEach(form => {
      form.style.display = 'none';
    });
    forms[index].style.display = 'block';
  });
});
