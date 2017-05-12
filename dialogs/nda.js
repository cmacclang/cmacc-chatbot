var builder = require('botbuilder')
var validate = require('../validate')
module.exports = function(bot, dataPrompts){

    var createNDA = builder.LuisRecognizer(process.env.luisPath)

    var nda = new builder.IntentDialog({recognizers:[createNDA]})


    nda.matches('createNDA', [
        function(session, args, next) {
            var req =  validate(args.entities)
            session.userData.req = req;
            dataPrompts.reducer(session, {prompt:req })

        },
        function(session, args, next) {

            session.send('done')

        },
        function(session, args, next) {

        },
    ])

    nda.onDefault(function(session, args, next){
        session.send("I have no idea");
        next();
    })

    bot.dialog('/nda',nda)
}