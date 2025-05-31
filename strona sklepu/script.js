// Reakcja na kliknięcie hamburger menu
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});

function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  const targetPage = document.getElementById(id);

  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    console.warn(`Brak sekcji o ID: ${id}`);
  }

  // Zamknięcie menu, jeśli jest widoczne
  const menu = document.getElementById('menu');
  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
}

// Domyślnie odpala 'home' po załadowaniu htmla
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});