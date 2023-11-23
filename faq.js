const toggleIcon = document.querySelector('#toggle-icon');
const toggleText = document.querySelector('#toggle-text');

toggleIcon.addEventListener('click', () => toggleText.classList.toggle('show'));
