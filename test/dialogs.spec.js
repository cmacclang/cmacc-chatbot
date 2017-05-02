var assert = require('assert')
var builder = require('botbuilder')
var dataPrompts = require('../data-prompts/text')
describe('the dialogs of the bot', function(){
    var step
    var bot;
    var connector;
    beforeEach(function(){
        step = 0;
        connector = new builder.ConsoleConnector()
        bot = new builder.UniversalBot(connector, {})
        bot.library(dataPrompts.createLibrary())
    })

    it('should run the dialog', function(done){
        this.timeout(50000)
        require('../dialogs/nda')(bot, dataPrompts)
        bot.dialog('/', function(session){session.beginDialog('/nda')})

        bot.on('send', function(message){
            switch(++step){
                case 1:

                    connector.processMessage('')
                    break;
                case 2:
                    connector.processMessage('')
                    break;
                case 3:
                    done()
                    break;

            }

        })
        connector.processMessage('Start')
    })




})