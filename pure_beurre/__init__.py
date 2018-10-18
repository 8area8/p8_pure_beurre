"""Django main init."""

from __future__ import absolute_import, unicode_literals

# This will make sure the app is always imported when
# Django starts so that shared_task will use this app.
from .celery import app as celery_app
from django.conf import settings

if settings.DEBUG:
    from .redis import app as redis_app
    __all__ = ('celery_app', 'redis_app')

__all__ = ('celery_app')
