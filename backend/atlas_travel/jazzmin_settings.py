JAZZMIN_SETTINGS = {
    "site_title": "Atlas Travel",
    "site_header": "Atlas Travel",
    "site_logo": "admin/img/LOGO.svg",
    "site_logo_classes": "img-circle elevation-3",
    "login_logo": "admin/img/LOGO.svg",
    "login_logo_dark": "admin/img/LOGO.svg",
    "site_icon": "admin/img/LOGO.svg",
    "site_brand": "Atlas Travel",
    "custom_css": "/custom_admin.css",
    "welcome_sign": "Добро пожаловать в админ-панель Atlas Travel",
    "copyright": "Все права защищены.",
    "user_avatar": None,
    "search_model": [],
    "topmenu_links": [

    ],
    "custom_js": "/staticfiles/admin/js/vendor/jquery/jquery.js,/staticfiles/admin/js/jquery.init.js,"
                 "/static/admin/js/admin_atlas.js,"
                 "/staticfiles/admin/js/jquery-ui/jquery-ui.min.js,"
                 "/staticfiles/adminsortable2/js/jquery.ui.touch-punch.js,"
                 "/staticfiles/adminsortable2/js/sortable.admin_atlas.js",
    "default_icon_parents": "fas fa-circle",
    "default_icon_children": "fas fa-dot-circle",
    "show_sidebar": True,
    "navigation_expanded": True,
    "changeform_format": "horizontal_tabs",
    "language_chooser": True,
    "show_ui_builder": True,
    "changeform_format_overrides": {
        "auth.user": "collapsible",
        "tours.tour": "horizontal_tabs",
    },
    "hide_apps": [],
    "hide_models": [
        "services.ServiceFeature",
    ],
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
        "flights.IconsAfterName": "fas fa-icons",

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

    "order_with_respect_to": [
        "tours",
        "hotels",
        "transfer",
        "flights",
        "main",
        "blog",
        "services",
        "contacts",
        "about",
        "common",
        "auth",
    ],

    "custom_links": {
        "travel_services": [{
            "name": "Туристические услуги",
            "url": "admin:index",
            "children": [
                {"name": "Туры", "url": "admin:tours_tour_changelist"},
                {"name": "Отели", "url": "admin:hotels_hotel_changelist"},
                {"name": "Трансфер", "url": "admin:transfer_transfer_changelist"},
                {"name": "Авиаперелеты", "url": "admin:flights_flight_changelist"},
            ]
        }],
    },
}


JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": "navbar-primary",
    "accent": "accent-primary",
    "navbar": "navbar-white navbar-light",
    "no_navbar_border": True,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": True,
    "sidebar_fixed": True,
    "sidebar": "sidebar-light-primary",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": True,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "default",
    "dark_mode_theme": "darkly",
    "button_classes": {
        "primary": "btn-outline-primary",
        "secondary": "btn-outline-secondary",
        "info": "btn-outline-info",
        "warning": "btn-outline-warning",
        "danger": "btn-outline-danger",
        "success": "btn-outline-success"
    }
}





