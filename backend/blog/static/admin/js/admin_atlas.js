// admin_atlas.js

document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов при загрузке
    const fadeInElements = () => {
        const elements = document.querySelectorAll('.card, .btn, .nav-item');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };

    // Эффект волны для кнопок
    const addRippleEffect = () => {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;

                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    };

    // Улучшение навигации
    const enhanceNavigation = () => {
        const navItems = document.querySelectorAll('.nav-sidebar .nav-item');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
            });

            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });
    };

    // Анимация для страницы входа
    const enhanceLoginPage = () => {
        if (document.querySelector('.login-page')) {
            const loginBox = document.querySelector('.login-box');
            loginBox.style.opacity = '0';
            loginBox.style.transform = 'translateY(20px)';

            setTimeout(() => {
                loginBox.style.opacity = '1';
                loginBox.style.transform = 'translateY(0)';
            }, 200);
        }
    };

    // Инициализация всех улучшений
    const init = () => {
        fadeInElements();
        addRippleEffect();
        enhanceNavigation();
        enhanceLoginPage();
    };

    init();
});

// Добавляем стили для эффектов
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        pointer-events: none;
        transform: scale(0);
        animation: ripple 0.6s linear;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .card, .btn, .nav-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }

    .login-box {
        transition: all 0.5s ease;
    }
`;

document.head.appendChild(style);