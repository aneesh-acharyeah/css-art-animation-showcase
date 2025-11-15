// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');

if (saved === 'light') {
  root.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  root.classList.toggle('light');
  const mode = root.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', mode);
});

// Optional: minor interaction guard for neon button
document.querySelectorAll('.neon-btn').forEach(btn => {
  btn.addEventListener('click', e => e.preventDefault());
});
