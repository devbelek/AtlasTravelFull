// csrf.js
(function($) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Проверяем, начинается ли эта строка cookie с нужного имени
                if (cookies[i].substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookies[i].substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    // Настраиваем AJAX запросы, чтобы они включали CSRF-токен
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    });
})(jQuery);