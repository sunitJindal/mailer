## mailer
Transactional mail templatization

Easy to use templatization framework that allows you to create new templates for your mailers and best part is you do not need to write the style sheets inline. Just add CSS classes to the JADE and when you compile those jade files, you get plain HTML files with CSS classes replaced with inline styles.

## How the codebase is structured
All the templates are placed under directory `templates`. This directory contains a folder for each mail template you want to create. For example if you want to create a `resetPin template`, all you need to do is create a `sub-directory` and name it `resetPin` and create 2 files under that sub-directory:    
  1.  `resetPin.html.jade` - This file contains the code that will be converted to HTML. CSS file path is not required in the body of jade file.  
  2.  `resetPin.style.css` - This file contains the CSS that is required in `resetPin.jade`. The CSS file must be of same name as the html file.
  
## Generating HTML files from templates
Generating HTML files from jade based templates is super-easy. All you need to do is add a method in `app.js` and your HTML will be generated.
```javascript
template(templateName, data, function(err, html, text) {
    console.log(err)
    createFile("resetPin",html);
  });
```

* `templateName` - This is the name of the directory which contains the template html and css. HTML file generated using the template is store with same name as that of template file.  
* `data` - It can be any valid JS object eg {key1:'value1',key2:'value2'}. The values to a key can be accessed by specifying the key name directly eg. `#{key1}`.

## Where are the newly created files stored
Files are created under `output` directory
