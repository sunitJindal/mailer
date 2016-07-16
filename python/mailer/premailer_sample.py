from premailer import transform
from jinja2 import PackageLoader, Environment, Template
env = Environment(loader=PackageLoader('mailer', 'template'),extensions=['pyjade.ext.jinja.PyJadeExtension'])

template = env.get_template('test.jade')
email_body = template.render({"data":"custom text"})

print(transform(email_body))