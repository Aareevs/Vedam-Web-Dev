document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('header form');
  const input = document.querySelector('input[name="location"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
  });
});

