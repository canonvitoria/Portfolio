document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navegacao a, .formularioRegistro');
    const mainContent = document.getElementById('main-content');

    const loadPage = async (page) => {
        try {
            const response = await fetch(`Pages/${page}.html`);
            const content = await response.text();
            mainContent.innerHTML = content;

            if (page === 'projects') {
                loadScript('scripts/script.js');
            }

        } catch (error) {
            mainContent.innerHTML = '<p>Erro ao carregar a página.</p>';
        }
    };

    const loadScript = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
    };

    const loadStyle = (href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    };

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    loadPage('home'); // Carregar página inicial
});
