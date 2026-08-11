const ageGate = document.getElementById('ageGate');
const enterBtn = document.getElementById('enterBtn');
const leaveBtn = document.getElementById('leaveBtn');
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');

if (localStorage.getItem('royalsmockersAgeConfirmed') === 'yes') ageGate.classList.add('hidden');

enterBtn.addEventListener('click', () => {
  localStorage.setItem('royalsmockersAgeConfirmed', 'yes');
  ageGate.classList.add('hidden');
});

leaveBtn.addEventListener('click', () => {
  window.location.href = 'https://www.google.com/';
});

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
