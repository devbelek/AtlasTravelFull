import os
import sys
import time
import psycopg2
from django.conf import settings
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'atlas_travel.settings')  # Укажите модуль настроек
django.setup()  # Инициализация настроек Django


def wait_for_db():
    db_ready = False
    while not db_ready:
        try:
            conn = psycopg2.connect(
                dbname=settings.DATABASES['default']['NAME'],
                user=settings.DATABASES['default']['USER'],
                password=settings.DATABASES['default']['PASSWORD'],
                host=settings.DATABASES['default']['HOST'],
                port=settings.DATABASES['default']['PORT'],
            )
            conn.close()
            db_ready = True
        except psycopg2.OperationalError:
            print("База данных недоступна, повторная попытка через 1 секунду...")
            time.sleep(1)


if __name__ == '__main__':
    wait_for_db()