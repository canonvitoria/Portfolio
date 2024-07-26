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
            } else {
                
            }
        } catch (error) {
            mainContent.innerHTML = '<p>Erro ao carregar a página.</p>';
        }
    };

    const loadScript = (src, callback) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = callback;
        document.body.appendChild(script);
    };

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    const loadStyle = (href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    };

    loadPage('home');
});

function animateCircle(circle, percent) {
    const angle = (percent / 100) * 360;
    const leftHalf = circle.querySelector('.circle-half-left');
    const rightHalf = circle.querySelector('.circle-half-right');

    if (angle <= 180) {
        rightHalf.style.transform = `rotate(${angle}deg)`;
        leftHalf.style.transform = `rotate(0deg)`;
    } else {
        rightHalf.style.transform = `rotate(180deg)`;
        leftHalf.style.transform = `rotate(${angle - 180}deg)`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        animateCircle(circle, percent);
    });
});
