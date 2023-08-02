function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    
    // Verifica si el modo oscuro está activado o desactivado
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    
    // Almacena la preferencia del modo oscuro en el almacenamiento local
    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    const body = document.querySelector('body');
    
    if (isDarkModeEnabled) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });
