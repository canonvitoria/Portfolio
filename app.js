document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navegacao a, .formularioRegistro');
    const mainContent = document.getElementById('main-content');

    const loadPage = async (page) => {
        try {
            const response = await fetch(`pages/${page}.html`);
            const content = await response.text();
            mainContent.innerHTML = content;

            if (page === 'projects') {
                loadScript('scripts/script.js', () => {
                    loadChartJs(() => {
                        createCharts();
                    });
                });
            }

            if (page === 'formulario') {
                loadStyle('styles/styleForms.css');
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

    loadPage('home');
});

function loadChartJs(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = callback;
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navegacao a, .formularioRegistro');
    const mainContent = document.getElementById('main-content');

    const loadPage = async (page) => {
        try {
            const response = await fetch(`pages/${page}.html`);
            const content = await response.text();
            mainContent.innerHTML = content;

            if (page === 'projects') {
                loadScript('scripts/script.js', () => {
                    loadChartJs(() => {
                        createCharts();
                    });
                });
            }

            if (page === 'formulario') {
                loadStyle('styles/styleForms.css');
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

    loadPage('home');
});

function loadChartJs(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = callback;
    document.body.appendChild(script);
}

function createCharts() {
    const createChart = (id, percentage) => {
        const ctx = document.getElementById(id).getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [percentage, 100 - percentage],
                    backgroundColor: ['#A67B56', '#E0E0E0'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '80%',
                plugins: {
                    tooltip: {
                        enabled: false
                    },
                    legend: {
                        display: false
                    },
                }
            },
            plugins: [{
                beforeDraw: function(chart) {
                    const width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx;
                    ctx.restore();
                    const fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em Montserrat";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#A67B56";
                    const text = percentage + "%",
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }]
        });
    };

    createChart('htmlChart', 90);
    createChart('cssChart', 90);
    createChart('jsChart', 75);
    createChart('phpChart', 30);
    createChart('mysqlChart', 60);
    createChart('pythonChart', 85);
    createChart('vueChart', 70);
    createChart('typescriptChart', 70);
    createChart('reactChart', 20);
}
