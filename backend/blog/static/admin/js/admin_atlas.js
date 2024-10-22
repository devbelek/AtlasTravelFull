// admin_atlas.js

document.addEventListener('DOMContentLoaded', function() {
    // Добавляем красивые эффекты при скролле
    const handleScroll = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Добавляем анимации для действий
    const addClickEffects = () => {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const x = e.clientX - e.target.offsetLeft;
                const y = e.clientY - e.target.offsetTop;

                const ripple = document.createElement('span');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.className = 'ripple';

                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    };

    // Инициализация всплывающих подсказок
    const initTooltips = () => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    };

    // Добавляем интерактивность в сайдбар
    const enhanceSidebar = () => {
        const sidebarItems = document.querySelectorAll('.nav-sidebar .nav-item');
        sidebarItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
            });

            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });
    };

    // Улучшаем таблицы
    const enhanceTables = () => {
        const tables = document.querySelectorAll('.table');
        tables.forEach(table => {
            // Добавляем сортировку
            const headers = table.querySelectorAll('th');
            headers.forEach(header => {
                header.addEventListener('click', function() {
                    const index = Array.from(this.parentElement.children).indexOf(this);
                    sortTable(table, index);
                });
            });

            // Добавляем поиск
            const tableContainer = table.parentElement;
            const searchInput = document.createElement('input');
            searchInput.className = 'form-control mb-3';
            searchInput.placeholder = 'Поиск...';
            searchInput.addEventListener('input', function() {
                filterTable(table, this.value);
            });
            tableContainer.insertBefore(searchInput, table);
        });
    };

    // Функция сортировки таблицы
    const sortTable = (table, column) => {
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));

        rows.sort((a, b) => {
            const aValue = a.children[column].textContent;
            const bValue = b.children[column].textContent;
            return aValue.localeCompare(bValue);
        });

        rows.forEach(row => tbody.appendChild(row));
    };

    // Функция фильтрации таблицы
    const filterTable = (table, query) => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(query.toLowerCase()) ? '' : 'none';
        });
    };

    // Добавляем прогресс-бар для загрузки страницы
    const addProgressBar = () => {
        const progress = document.createElement('div');
        progress.className = 'progress-bar';
        document.body.appendChild(progress);

        window.addEventListener('load', () => {
            progress.style.width = '100%';
            setTimeout(() => {
                progress.style.opacity = '0';
            }, 500);
        });
    };

    // Инициализация всех улучшений
    const init = () => {
        addClickEffects();
        initTooltips();
        enhanceSidebar();
        enhanceTables();
        addProgressBar();
        handleScroll();
    };

    init();
});

// Добавляем стили для ripple-эффекта
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        width: 0;
        transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
        z-index: 9999;
    }

    .card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
`;

document.head.appendChild(style);