var assert = require('assert')
var builder = require('botbuilder')
var dataPrompts = require('../data-prompts/reducer')
require('../secret')();
describe('the dialogs of the bot', function(){
    var step
    var bot;
    var connector;
    beforeEach(function(){
        step = 0;
        connector = new builder.ConsoleConnector()
        bot = new builder.UniversalBot(connector)
        bot.library(dataPrompts.createLibrary())
        //var createNDA = new builder.LuisRecognizer(process.env.luisPath)

        //bot.dialog('/', new builder.IntentDialog({recognizers:[createNDA]}).matches('CreateNDA', [function(session, args, next){console.log(args.entities);session.send('hee')}]).onDefault(function(session){session.send('sorry dont get it: ' + session.message.text)}))
    })

    it('should run the dialog', function(done){
        this.timeout(50000)
        require('../dialogs/nda')(bot)
        //bot.dialog('/', function(session){session.beginDialog('/NDA')})

        bot.on('send', function(message){
            switch(++step){
                case 1:

                    connector.processMessage('5-5-2017')
                    break;
                case 2:
                    connector.processMessage('cool')
                    break;
                case 3:
                    done()
                    break;

            }

        })
        console.log('start')
        connector.processMessage('create an NDA between Willem and Axel')
    })




})