"""Products models."""

from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    """Categorie model."""

    name = models.CharField(max_length=150, unique=True)

    def __str__(self):
        """Nicer str."""
        return self.name


class Product(models.Model):
    """Product model."""

    categories = models.ManyToManyField(Category)

    name = models.CharField(max_length=150, unique=True)
    description = models.TextField()
    stores = models.TextField()

    open_food_fact_url = models.URLField(max_length=250)
    personal_url = models.URLField(max_length=250)
    photo_url = models.URLField(max_length=250)
    image_nutrition = models.URLField(max_length=300)

    nutriscore = models.CharField(max_length=1)

    def __str__(self):
        """Nicer str."""
        return self.name


class Substitute(models.Model):
    """Substitute model."""

    user = models.ForeignKey(User, on_delete=True)
    base_product = models.ForeignKey(
        Product, on_delete=True, related_name='base_product')
    substituted = models.ForeignKey(
        Product, on_delete=True, related_name='substituted')

    def __str__(self):
        """Nicer str."""
        return f"substitut de {self.user.username} : {self.substituted.name}"
