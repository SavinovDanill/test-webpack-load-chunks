const loadPage = async () => {
    const pathname = window.location.pathname;
    if (pathname === '/about') {
      const module = await import('./about.js');
      module.default();
    } else if (pathname === '/main') {
      const module = await import('./main.js');
      module.default();
    }
  };
  
  window.addEventListener('popstate', loadPage);
  
  document.getElementById('main-link').addEventListener('click', (event) => {
    event.preventDefault();
    history.pushState(null, '', '/main');
    loadPage();
  });
  
  document.getElementById('about-link').addEventListener('click', (event) => {
    event.preventDefault();
    history.pushState(null, '', '/about');
    loadPage();
  });
  
  loadPage();
  