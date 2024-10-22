// Улучшения админ-панели
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всех компонентов
    initializeComponents();

    // Добавление анимаций
    addAnimations();

    // Инициализация темной темы
    initializeDarkMode();

    // Инициализация поиска
    initializeSearch();
});

function initializeComponents() {
    // Инициализация тултипов
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', showTooltip);
        tooltip.addEventListener('mouseleave', hideTooltip);
    });

    // Инициализация уведомлений
    const notifications = document.querySelectorAll('.alert');
    notifications.forEach(notification => {
        notification.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        });
    });

    // Улучшенные селекты
    const selects = document.querySelectorAll('select:not(.select2-hidden-accessible)');
    selects.forEach(select => {
        $(select).select2({
            theme: 'custom',
            dropdownParent: select.closest('.modal-content') || document.body
        });
    });
}

function addAnimations() {
    // Анимация появления контента
    const content = document.querySelector('.content-wrapper');
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';

        requestAnimationFrame(() => {
            content.style.transition = 'all 0.5s ease';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        });
    }

    // Анимация карточек
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });

    // Анимация боковой панели
    const sidebarItems = document.querySelectorAll('.nav-sidebar .nav-item');
    sidebarItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';

        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 50 + (index * 50));
    });
}

function initializeDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '🌙';
    document.querySelector('.navbar-nav').appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Проверка сохраненных настроек
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️';
    }
}

function initializeSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', debounce(function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const tableRows = document.querySelectorAll('tbody tr');

            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                const match = text.includes(searchTerm);
                row.style.display = match ? '' : 'none';

                if (match) {
                    row.style.animation = 'fadeIn 0.3s ease forwards';
                }
            });
        }, 300));
    });
}

// Утилиты
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showTooltip(e) {
    const tooltip = e.target;
    tooltip.style.animation = 'fadeIn 0.3s ease forwards';
}

function hideTooltip(e) {
    const tooltip = e.target;
    tooltip.style.animation = 'fadeOut 0.3s ease forwards';
}

// Дополнительные утилиты для работы с данными
class AdminUtils {
    static formatNumber(number) {
        return new Intl.NumberFormat('ru-RU').format(number);
    }

    static formatDate(date) {
        return new Intl.DateTimeFormat('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date));
    }

    static formatCurrency(amount) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB'
        }).format(amount);
    }
}

// Инициализация графиков
class ChartInitializer {
    static initializeCharts() {
        // Инициализация графиков, если они есть на странице
        const chartContainers = document.querySelectorAll('[data-chart]');
        chartContainers.forEach(container => {
            const type = container.dataset.chart;
            const data = JSON.parse(container.dataset.chartData || '{}');
            this.createChart(container, type, data);
        });
    }

    static createChart(container, type, data) {
        // Здесь можно добавить инициализацию графиков
        // используя библиотеку по вашему выбору
        // например, Chart.js или ApexCharts
    }
}