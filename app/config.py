"""
Файл конфигурации проекта.

Здесь хранятся:
- базовые настройки Flask;
- секретный ключ;
- режимы разработки и другие будущие параметры.
"""

import os


class Config:
    """
    Базовый класс конфигурации приложения.
    """

    # Секретный ключ нужен Flask для сессий, форм и защиты
    SECRET_KEY = os.environ.get("SECRET_KEY", "dev-secret-key-change-me")

    # Здесь в будущем можно добавить:
    # DEBUG = True
    # SQLALCHEMY_DATABASE_URI = ...
    # MAIL_SERVER = ...