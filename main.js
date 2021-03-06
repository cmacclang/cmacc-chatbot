const builder = require('botbuilder')

module.exports = function(app) {

    var connector = new builder.ChatConnector({
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    })

    app.use('/', connector.listen())

    var bot = new builder.UniversalBot(connector)
    //var dataPrompt = require('./data-prompts/reducer')
    //bot.library(dataPrompt.createLibrary())
    require('./dialogs/nda')(bot)


}