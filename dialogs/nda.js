var builder = require('botbuilder')

var LuisActions = require('../LuisActions/luisactions')
var createNdaActions = require('./createNdaAction')

module.exports = function(bot){

    var DefaultReplyHandler = function (session) {
        session.endDialog('I didnt understand your question, I can help you create an NDA if you just tell me to');
    };


    var LuisModelUrl = process.env.luisPath
    var recognizer = new builder.LuisRecognizer(process.env.luisPath);
    var intentDialog = bot.dialog('/', new builder.IntentDialog({ recognizers: [recognizer] }).onDefault(DefaultReplyHandler))

    var onContextCreationHandler = function(action, actionModel, next, session){ next()}

    LuisActions.bindToBotDialog(bot, intentDialog, LuisModelUrl, createNdaActions, DefaultReplyHandler, onContextCreationHandler)

}