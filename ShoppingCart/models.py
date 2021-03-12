from django.conf import settings
from django.db import models
from django.utils.text import slugify

'''SIZES = (
    ('XXS', 'Extra Extra Small'),
    ('XS', 'Extra Small'),
    ('S', 'Small'),
    ('M', 'Medium'),
    ('L', 'Large'),
    ('XL', 'Extra Large'),
    ('XXL', 'Extra Extra Large'),
    ('XXXL', 'Triple Extra Large')
)

STORAGES = (
    ('1GB', '1GB'),
    ('4GB', '4GB'),
    ('8GB', '8GB'),
    ('16GB', '16GB'),
    ('32GB', '32GB'),
    ('64GB', '64GB'),
    ('128GB', '128GB'),
    ('256GB', '256GB'),
    ('512GB','512GB')
)'''

class Category(models.Model):
    name = models.CharField(max_length=100)
    #description = models.TextField(nullable=True)
    #image = models.ImageField(upload_to="categories", nullable=True)
    slug = models.SlugField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return "{0}".format(self.name)

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField(upload_to="inventory")
    recently_added = models.BooleanField(default=False)
    reduced_price = models.BooleanField(default=False)
    '''is_apparel = models.BooleanField(default=False)
    size = models.CharField(max_length=4, choices=SIZES, default='', null=True)
    is_electronics = models.BooleanField(default=False)
    storage = models.CharField(max_length=4, choices=STORAGES, default='', null=True)'''
    slug = models.SlugField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return "{0}".format(self.name)

class Rating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    stars = models.FloatField()
    #review = models.TextField()

    def __str__(self):
        return "{0}: {1} Stars".format(self.product.name, self.stars)

class OrderProduct(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    amount = models.IntegerField(default=0)

    def __str__(self):
        return "User {0} Product {1} Amount {2}".format(self.user, self.product.name, self.amount)

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    products = models.ManyToManyField(OrderProduct)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return "User {0} Products {1} Start Date {2} Ordered Date {3} Ordered {4}"\
            .format(self.user, self.products.name, self.start_date, self.ordered_date, self.ordered)