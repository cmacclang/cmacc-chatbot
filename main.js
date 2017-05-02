const builder = require('botbuilder')

module.exports = function(app) {

    var connector = new builder.ChatConnector({})

    app.use('/', connector.listen())

    var bot = new builder.UniversalBot(connector)
    var dataPrompt = require('./data-prompts/text')
    bot.Library(dataPrompt.createLibrary())




    bot.dialog('/', [
        function (session) {
            session.beginDialog('/')
        },
        function (session, args, next) {

        },
        function (session, args, next) {

        },
        function (session, args, next) {

        },
        function (session, args, next) {

        },
        function (session, args, next) {

        },
    ])
}