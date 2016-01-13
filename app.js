var path           = require('path')
    , templatesDir   = path.join(__dirname, 'templates')
    , emailTemplates = require('email-templates')
    , fs = require("fs");

emailTemplates(templatesDir, function(err, template) {

  // Render a single email with one template
  template('resetPin', {token:"768483"}, function(err, html, text) {
    if(err){
        console.log(err)
    }
    createFile("resetPin",html);
  });

});


function createFile(name,content){
  fs.writeFile("./output/"+name+".html", content, function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}