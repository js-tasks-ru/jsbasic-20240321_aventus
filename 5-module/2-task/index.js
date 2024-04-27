function toggleText() {
  // ваш код...
    const button = document.querySelector('.toggle-text-button');
    const text = document.getElementById('text');
    button.addEventListener('click', () => {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
      button.textContent = 'Нажмите, чтобы спрятать текст';
    } else {
      text.setAttribute('hidden', '');
      button.textContent = 'Нажмите, чтобы показать текст';
    }
  });
}
