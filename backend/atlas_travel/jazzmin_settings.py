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
    "custom_css": "/custom_admin.css",  # Пути к вашим кастомным стилям
    "custom_js": "/staticfiles/admin/js/vendor/jquery/jquery.js,/staticfiles/admin/js/jquery.init.js,"
                 "/staticfiles/admin/js/jquery-ui/jquery-ui.min.js,/staticfiles/adminsortable2/js/jquery.ui.touch-punch.js,"
                 "/staticfiles/adminsortable2/js/sortable.admin.js",

    # Приветственное сообщение
    "welcome_sign": "Добро пожаловать в админ-панель Atlas Travel",
    "copyright": "Все права защищены.",

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
        "services.VisaService": "fas fa-passport",
        "services.ServiceImage": "fas fa-image",
        "services.ServiceFeature": "fas fa-list-ul",
        "telegram_bot.TelegramUser": "fas fa-comment-dots",
        "main.RestIdea": "fas fa-lightbulb",
        "main.BestChoice": "fas fa-trophy",
        "main.PopularHotel": "fas fa-hotel",
        "main.RentOfCar": "fas fa-car",
        "main.RentOfCarImage": "fas fa-car-side",
        "main.RentOfCarDescription": "fas fa-file-alt",
        "main.Benefits": "fas fa-gift",
        "main.MainComments": "fas fa-comment-alt",
        "hotels.HotelComments": "fas fa-comment-alt",
        "hotels.Hotel": "fas fa-hotel",
        "hotels.PopularHotels": "fas fa-star",
        "hotels.HotelImage": "fas fa-image",
        "hotels.HotelInquiry": "fas fa-question-circle",
        "hotels.IconsAfterName": "fas fa-icons",
        "flights.FlightComments": "fas fa-comment-alt",
        "flights.Flight": "fas fa-plane",
        "flights.FlightImage": "fas fa-image",
        "flights.FlightInquiry": "fas fa-question-circle",
        "contacts.Contacts": "fas fa-address-book",
        "blog.BlogPost": "fas fa-blog",
        "blog.BlogSection": "fas fa-newspaper",
        "about.AboutUs": "fas fa-info-circle",
        "about.AboutUsImage": "fas fa-image",
        "about.FAQ": "fas fa-question",
        "about.AboutUsInquiry": "fas fa-envelope",
        "about.AboutUsConsultant": "fas fa-user-tie",
        "about.OurProjects": "fas fa-project-diagram",
        "about.PrivacyPolicy": "fas fa-user-shield",
        "about.UserAgreement": "fas fa-handshake",
        "about.ReturnPolicy": "fas fa-undo",
        "tours.Tour": "fas fa-plane-departure",
        "tours.TourComments": "fas fa-comment-alt",
        "tours.TourImage": "fas fa-image",
        "tours.TourInquiry": "fas fa-question-circle",
        "tours.IconsAfterName": "fas fa-icons",
        "common.Tag": "fas fa-tag",
        "common.City": "fas fa-city",
        "common.Country": "fas fa-globe",
        "common.Comments": "fas fa-comments",
        "common.Inquiry": "fas fa-envelope",
        "transfer.Transfer": "fas fa-shuttle-van",
        "transfer.TransferComments": "fas fa-comment-alt",
        "transfer.TransferImage": "fas fa-image",
        "transfer.TransferInquiry": "fas fa-question-circle",
        "transfer.IconsAfterName": "fas fa-icons",
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
        "common",
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
    "hide_models": ["services.ServiceFeature"],

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
    "navbar": "navbar-dark",  # Использование тёмной темы для навигации
    "no_navbar_border": True,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-light-primary",  # Светлая тема для бокового меню
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": True,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "default",  # Используем стандартную тему
    "dark_mode_theme": None,  # Отключение темной темы
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success"
    },
    "actions_sticky_top": True,  # Закрепление действий сверху
}