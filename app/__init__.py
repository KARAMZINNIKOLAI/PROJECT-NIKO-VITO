from flask import Flask

from .models import db, migrate
from . import views

from .admin import admin

from app.database import db, migrate


def create_app():
    app = Flask(__name__)

    app.config["SECRET_KEY"] = "secret"

    admin.init_app(app)

    #функция представления
    app.add_url_rule("/", view_func=views.index_page)

    app.add_url_rule("/login/", view_func=views.login_page, methods=["GET", "POST"])
    app.add_url_rule("/logout/", view_func=views.logout)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
    db.init_app(app)
    migrate.init_app(app, db)

    return app