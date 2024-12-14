const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// Open the sidebar when clicking on the bar (hamburger icon)
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

// Close the sidebar when clicking on the close icon (X)
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
