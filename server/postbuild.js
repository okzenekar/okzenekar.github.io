var globby = require('globby');
var fs = require('fs-extra');
var path = require('path');
var beautifyHtml = require('js-beautify').html;

var fileList = globby.sync([
      'dist/**/*.html'
    ]);

fileList.forEach(file => {
  var content = fs.readFileSync(file, 'utf8');
  var pattern = /<script(.*?)async=""(.*?)(><\/script>)/gm;
  var scripts;
  var result = '';
  var outputFilePath = file.replace(/(dist\/)(.*?)\/index.html/, '$1$2.html');
  content = beautifyHtml(content, {"indent_size": 2});

  while ((scripts = pattern.exec(content)) !== null){
    //console.log(scripts[0]);
    result += scripts[0].replace('async=""', '') + '\n';
  }

  content = content
    .replace(pattern, '')
    .replace('vendor.js"></script>', 'vendor.js"></script>\n  ' +  result);

  fs.removeSync(outputFilePath.split('.html')[0]);
  fs.outputFileSync(outputFilePath, content);

});
fs.copySync('src/assets/img', 'dist/src/assets/img')