var path = require('path');
var compiler = require('cmacc-compiler');
var pdf = require('html-pdf');

var file = path.join(__dirname, 'cmacc/NDA.cmacc');

var contract = compiler.compile('file://' + file);

function generate(data, callback) {
  var document = compiler.merge(contract, compiler.string(data));
  var html = compiler.render(document);
  pdf.create(html).toBuffer(callback);
}

module.exports = generate;

var test = {
  person1: 'Willem',
  person2: 'Axel',
  date: '12-12-2012'
};

generate(test, function(err, res){
  console.log(err, res);
});