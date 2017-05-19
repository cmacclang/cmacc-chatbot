var LuisActions = require('../LuisActions/luisactions')

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
    fulfill:function(parameters, callback) { console.log(parameters);callback('success')}
}

module.exports = [createNdaAction]