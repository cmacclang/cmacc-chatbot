var builder = require('botbuilder')

module.exports = function(bot, dataPrompts){

    var nda = new builder.IntentDialog({})
    nda.onBegin(
        function(session, args, next) {
            session.send('hi I can help you create an NDA, please provide your information');
            next()
        }
    )

    nda.onDefault(function(session, args, next){
        session.send("seems that's it");
        next();
    })

    bot.dialog('/nda',nda)
}