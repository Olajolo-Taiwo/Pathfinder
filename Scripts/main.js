
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');menuIcon.addEventListener('click', () => sidebar.classList.add('show'));
closeSidebar.addEventListener('click', () => sidebar.classList.remove('show'));

const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
btn.addEventListener('click', () => {
  const panel = btn.nextElementSibling;
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});
});

const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
sections.forEach(sec => {
  const rect = sec.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    sec.classList.add('visible');
  }
});
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(index) {
slides.forEach((slide, i) => {
  slide.classList.remove('active');
  if (i === index) {
    slide.classList.add('active');
  }
});
}
setInterval(() => {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}, 4000);
});

const experienceForm = document.getElementById('experienceForm');
const experienceText = document.getElementById('experienceText');
const experiencesSection = document.querySelector('.experiences');

experienceForm.addEventListener('submit', function(e) {
e.preventDefault();
const text = experienceText.value.trim();
if (text) {
const newCard = document.createElement('div');
newCard.className = 'experience-card';
newCard.textContent = `"${text}"`;
experiencesSection.appendChild(newCard);
experienceText.value = '';
}
});

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = 0;
    setTimeout(() => loadingScreen.style.display = "none", 1000);
  }, 2000);
});