var assert = require('assert');

function validate(input) {
  var props = [
    'person1',
    'address1',
    'person2',
    'address2',
    'date',
  ];

  for (var i in props) {
    var prop = props[i];
    if (!input[prop]) {
      return prop
    }

  }

}

assert.equal('person1', validate({}));
assert.equal('address1', validate({person1: "Willem Veelenturf"}));
assert.equal('address1', validate({person1: "Willem Veelenturf", person2: 'Axel Scheele'}));
assert.equal('person2', validate({person1: "Willem Veelenturf", address1: 'Laan van Engelswier 2, 3551 XV Utrecht'}));

module.exports = validate