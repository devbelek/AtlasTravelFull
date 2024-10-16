# Используем базовый образ nginx на основе alpine
FROM nginx:alpine

# Установка зависимостей для сборки Nginx и модуля Brotli
RUN apk add --no-cache --virtual .build-deps \
    gcc \
    libc-dev \
    make \
    openssl-dev \
    pcre-dev \
    zlib-dev \
    linux-headers \
    curl \
    git

# Клонирование и настройка модуля Brotli
RUN cd /tmp && \
    git clone https://github.com/google/ngx_brotli.git && \
    cd ngx_brotli && \
    git submodule update --init

# Скачивание и распаковка Nginx
RUN NGINX_VERSION=$(nginx -v 2>&1 | sed 's/^nginx version: nginx\///') && \
    curl -fSL https://nginx.org/download/nginx-$NGINX_VERSION.tar.gz -o nginx.tar.gz && \
    tar -zxC /tmp -f nginx.tar.gz

# Компиляция Nginx с модулем Brotli
RUN NGINX_VERSION=$(nginx -v 2>&1 | sed 's/^nginx version: nginx\///') && \
    cd /tmp/nginx-$NGINX_VERSION && \
    ./configure --with-compat --add-dynamic-module=/tmp/ngx_brotli && \
    make modules

# Копирование скомпилированных модулей Brotli
RUN cp /tmp/nginx-$NGINX_VERSION/objs/ngx_http_brotli_filter_module.so /usr/lib/nginx/modules/ && \
    cp /tmp/nginx-$NGINX_VERSION/objs/ngx_http_brotli_static_module.so /usr/lib/nginx/modules/

# Удаление ненужных файлов
RUN apk del .build-deps && \
    rm -rf /tmp/* /var/cache/apk/*

# Копирование конфигурационного файла Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Удаление стандартной конфигурации
RUN rm /etc/nginx/conf.d/default.conf

# Создание директорий для статических файлов и медиа
RUN mkdir -p /app/staticfiles /app/media

# Изменение владельца директорий на nginx
RUN chown -R nginx:nginx /app /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# Переключение на пользователя nginx
USER nginx

# Экспонирование порта 80
EXPOSE 80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]