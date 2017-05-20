var LuisActions = require('../LuisActions/luisactions')

var cmaccApi = require('cmacc-api')
var cmacc = require('cmacc-compiler')
var pdf = require('html-pdf')
var uuidV4 = require('uuid/v4')

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
            var name = uuidV4() + '.pdf'
            var filepath = __dirname + '/pdf/' +name
            var ast = cmacc.compile("file://" + __dirname + '/cmacc/simple_nda.cmacc');
            console.log(ast)
            var data = cmacc.string(parameters);
            var comb = cmacc.merge(ast, data);
            var doc = cmacc.render(comb);
            pdf.create(doc).toFile(filepath, function(err, res){

                callback({
                    text: "Here is your NDA",
                    attachments: [
                        {
                            contentType: 'application/pdf',
                            contentUrl: 'https://cmacc-bot.herokuapp.com/'+name,

                        }
                    ]});
            })


        } catch (e) {callback('fail:'+ e.toString())}
    }
}

module.exports = [createNdaAction]