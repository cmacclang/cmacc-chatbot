var LuisActions = require('../LuisActions/luisactions')

var cmaccApi = require('cmacc-api')
var cmacc = require('cmacc-compiler')

var createNdaAction = {
    intentName:'CreateNDA',
    friendlyName:'create a very simple NDA',
    confirmOnContextSwitch:true,
    schema:{
        NDA:{
            type:'string',
            message:'Do you want to create an NDA?'
        },
        Person1:{
            type:'string',
            message:'What is the name of the first person?'
        },
        Person2:{
            type:'string',
            message:'What is the name of the second person?'
        },
        Date:{
            type:'date',
            builtInType: LuisActions.BuiltInTypes.DateTime.Date,
            validDate: true,
            message: 'Please provide the date of the agreement'
        }
    },
    fulfill:function(parameters, callback) {
        parameters.Date = parameters.Date.toDateString()
        try {
            console.log(__dirname)
            var ast = cmacc.compile("file://" + __dirname + '/cmacc/simple_nda.cmacc');
            console.log(ast)
            var data = cmacc.string(parameters);
            var comb = cmacc.merge(ast, data);
            var doc = cmacc.render(comb);
            callback(doc);
        } catch (e) {callback('fail')}
    }
}

module.exports = [createNdaAction]