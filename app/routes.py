"""
Модуль маршрутов приложения.

Здесь описываются URL-адреса и то,
какие HTML-шаблоны нужно отображать.
"""

from flask import Blueprint, render_template

# Создаем Blueprint для основных страниц сайта
main_bp = Blueprint("main", __name__)


@main_bp.route("/")
def index():
    """
    Главная страница сайта.
    """
    return render_template("index.html")


@main_bp.route("/about")
def about():
    """
    Страница 'Обо мне'.
    """
    return render_template("about.html")


@main_bp.route("/projects")
def projects():
    """
    Страница с проектами.
    """
    return render_template("projects.html")


@main_bp.route("/contact")
def contact():
    """
    Страница контактов.
    """
    return render_template("contact.html")

