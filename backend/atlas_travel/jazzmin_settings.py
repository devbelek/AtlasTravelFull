JAZZMIN_SETTINGS = {
    # Заголовок сайта
    "site_title": "Atlas Travel",
    "site_header": "Atlas Travel",
    "site_brand": "Atlas Travel",

    # Логотипы
    "site_logo": "admin/img/LOGO.svg",
    "login_logo": "admin/img/LOGO.svg",
    "login_logo_dark": None,
    "site_logo_classes": "img-circle elevation-3",
    "site_icon": "admin/img/LOGO.svg",

    # CSS и JavaScript
    "custom_css": "custom_admin.css",
    "custom_js": "admin/js/custom.js",

    # Приветственное сообщение
    "welcome_sign": "Добро пожаловать в панель управления Atlas Travel",
    "copyright": "Atlas Travel © 2024",

    # Поиск
    "search_model": [
        "tours.Tour",
        "hotels.Hotel",
        "flights.Flight",
    ],

    # Верхнее меню
    "topmenu_links": [
        {"name": "Главная", "url": "admin:index"},
        {"name": "Сайт", "url": "/", "new_window": True},
    ],

    # Иконки для моделей
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
        "tours.Tour": "fas fa-plane-departure",
        "tours.TourImage": "fas fa-image",
        "tours.TourInquiry": "fas fa-question-circle",
        "hotels.Hotel": "fas fa-hotel",
        "hotels.HotelImage": "fas fa-image",
        "hotels.HotelInquiry": "fas fa-question-circle",
        "flights.Flight": "fas fa-plane",
        "flights.FlightImage": "fas fa-image",
        "transfer.Transfer": "fas fa-shuttle-van",
        "transfer.TransferImage": "fas fa-image",
        "blog.BlogPost": "fas fa-blog",
        "contacts.Contact": "fas fa-address-book",
        "about.AboutUs": "fas fa-info-circle",
        "main.Benefits": "fas fa-gift",
        "services.VisaService": "fas fa-passport",
    },

    # Порядок приложений
    "order_with_respect_to": [
        "tours",
        "hotels",
        "flights",
        "transfer",
        "services",
        "blog",
        "contacts",
        "about",
        "auth",
    ],

    # Пользовательские ссылки
    "custom_links": {
        "tours": [{
            "name": "Туры",
            "url": "admin:tours_tour_changelist",
            "icon": "fas fa-plane-departure"
        }],
        "hotels": [{
            "name": "Отели",
            "url": "admin:hotels_hotel_changelist",
            "icon": "fas fa-hotel"
        }],
    },

    # Настройки форм
    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {
        "auth.user": "collapsible",
        "auth.group": "vertical_tabs",
    },

    # Отключение приложений и моделей из меню
    "hide_apps": [],
    "hide_models": [],

    # Расширенная навигация
    "navigation_expanded": True,
}

# Настройки интерфейса
JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": False,
    "accent": "accent-primary",
    "navbar": "navbar-light",
    "no_navbar_border": True,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-light-primary",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": True,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "default",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success"
    },
    "actions_sticky_top": True
}