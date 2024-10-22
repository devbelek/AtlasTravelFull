JAZZMIN_SETTINGS = {
    # Основные настройки
    "site_title": "Atlas Travel",
    "site_header": "Atlas Travel Management",
    "site_brand": "Atlas Travel",
    "site_logo": "admin/img/LOGO.svg",
    "login_logo": "admin/img/LOGO.svg",
    "login_logo_dark": None,
    "site_icon": "admin/img/LOGO.svg",

    # Настройки CSS/JS
    "custom_css": "static/custom_admin.css",
    "custom_js": [
        "admin/js/vendor/jquery/jquery.min.js",
        "admin/js/jquery.init.js",
    ],

    # Настройки интерфейса
    "welcome_sign": "Добро пожаловать в Панель Управления Atlas Travel",
    "copyright": "Atlas Travel © 2024",
    "search_model": ["auth.User", "tours.Tour", "hotels.Hotel", "flights.Flight"],

    # Верхнее меню
    "topmenu_links": [
        {"name": "Главная", "url": "admin:index"},
        {"name": "Сайт", "url": "/", "new_window": True},
        {"model": "auth.User", "permissions": ["auth.view_user"]},
        {"name": "Поддержка", "url": "https://support.example.com", "new_window": True},
    ],

    # Настройки отображения
    "show_sidebar": True,
    "navigation_expanded": True,
    "hide_apps": [],
    "hide_models": ["auth.Group"],

    # Формат форм
    "changeform_format": "horizontal_tabs",
    "form_submit_sticky": True,

    # Иконки (с туристической тематикой)
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",

        "tours.Tour": "fas fa-globe-americas",
        "tours.TourCategory": "fas fa-tags",
        "tours.TourPackage": "fas fa-box-open",
        "tours.TourDate": "fas fa-calendar-alt",
        "tours.TourBooking": "fas fa-ticket-alt",
        "tours.TourReview": "fas fa-star",

        "hotels.Hotel": "fas fa-hotel",
        "hotels.Room": "fas fa-bed",
        "hotels.Booking": "fas fa-concierge-bell",
        "hotels.HotelReview": "fas fa-comment-dots",

        "flights.Flight": "fas fa-plane",
        "flights.FlightBooking": "fas fa-ticket-alt",
        "flights.Airline": "fas fa-plane-departure",

        "destinations.Country": "fas fa-flag",
        "destinations.City": "fas fa-city",
        "destinations.Attraction": "fas fa-monument",

        "customers.Customer": "fas fa-user-circle",
        "customers.Inquiry": "fas fa-question-circle",
        "customers.Newsletter": "fas fa-envelope",

        "blog.Post": "fas fa-blog",
        "blog.Category": "fas fa-folder",
        "blog.Tag": "fas fa-tag",

        "marketing.Promotion": "fas fa-percentage",
        "marketing.Coupon": "fas fa-ticket-alt",
        "marketing.Campaign": "fas fa-bullhorn",
    },

    # Группировка и порядок приложений
    "order_with_respect_to": [
        "tours",
        "hotels",
        "flights",
        "destinations",
        "customers",
        "blog",
        "marketing",
        "auth",
    ],

    # Кастомные ссылки в меню
    "custom_links": {
        "tours": [{
            "name": "Управление турами",
            "url": "admin:tours_tour_changelist",
            "icon": "fas fa-globe-americas"
        }],
        "hotels": [{
            "name": "Управление отелями",
            "url": "admin:hotels_hotel_changelist",
            "icon": "fas fa-hotel"
        }],
    },
}

# UI настройки для современного туристического дизайна
JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": "navbar-success",
    "accent": "accent-teal",
    "navbar": "navbar-dark",
    "no_navbar_border": True,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-dark-success",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": True,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "cosmo",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success"
    }
}