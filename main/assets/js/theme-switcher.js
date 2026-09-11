(function() {
  const THEMES = [
    { id: 'moderna-dark', name: 'Moderna Dark' },
    { id: 'moderna-light', name: 'Moderna Light' },
    { id: 'oldtimer-light', name: 'Oldtimer Classic' },
    { id: 'oldtimer-dark', name: 'Oldtimer Terminal' }
  ];
  
  const STORAGE_KEY = 'tfc-theme';
  const currentTheme = localStorage.getItem(STORAGE_KEY) || 'moderna-dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  window.addEventListener('DOMContentLoaded', () => {
    // Inject the theme switcher UI
    const createThemeSwitcher = () => {
      const container = document.createElement('div');
      container.className = 'relative inline-block text-left ml-2';
      
      const button = document.createElement('button');
      button.className = 'p-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors text-slate-400 focus:outline-none flex items-center justify-center';
      button.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      `;

      const popover = document.createElement('div');
      popover.className = 'hidden absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl bg-slate-900 border border-slate-800 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden';
      
      const current = document.documentElement.getAttribute('data-theme');
      
      let optionsHtml = '';
      THEMES.forEach(t => {
        const isActive = t.id === current;
        optionsHtml += `
          <button data-theme-target="${t.id}" class="theme-option w-full text-left px-4 py-2.5 text-sm ${isActive ? 'bg-brand-500/10 text-brand-400 font-semibold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'} transition-colors flex items-center justify-between">
            ${t.name}
            ${isActive ? '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' : ''}
          </button>
        `;
      });
      popover.innerHTML = optionsHtml;

      button.addEventListener('click', (e) => {
        e.stopPropagation();
        popover.classList.toggle('hidden');
      });

      document.addEventListener('click', () => popover.classList.add('hidden'));
      popover.addEventListener('click', (e) => e.stopPropagation());

      popover.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const newTheme = btn.getAttribute('data-theme-target');
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem(STORAGE_KEY, newTheme);
          popover.classList.add('hidden');
          
          // Re-render switchers to update checkmarks
          document.dispatchEvent(new Event('theme-changed'));
        });
      });

      container.appendChild(button);
      container.appendChild(popover);
      return container;
    };

    // Desktop Nav
    const desktopNav = document.querySelector('nav.hidden.md\\:flex');
    if (desktopNav) {
      desktopNav.appendChild(createThemeSwitcher());
    }

    // Update checkmarks when theme changes
    document.addEventListener('theme-changed', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      document.querySelectorAll('.theme-option').forEach(btn => {
        const t = btn.getAttribute('data-theme-target');
        if (t === activeTheme) {
          btn.className = 'theme-option w-full text-left px-4 py-2.5 text-sm bg-brand-500/10 text-brand-400 font-semibold transition-colors flex items-center justify-between';
          btn.innerHTML = THEMES.find(x => x.id === t).name + '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
        } else {
          btn.className = 'theme-option w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-between';
          btn.innerHTML = THEMES.find(x => x.id === t).name;
        }
      });
    });
  });
})();
