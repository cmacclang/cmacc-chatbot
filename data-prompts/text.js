var builder = require('botbuilder')

var datalibrary = new builder.Library('dataPrompts')
datalibrary.dialog('text',
    new builder.IntentDialog()
        .onBegin(function (session, args,next) {
            session.userData.key = args.key;
            session.send(args.prompt);
            next()
        })
        .onDefault(function (session) {

            session.userData.value = session.message.text;

            session.endDialogWithResult({ response: session.message.text });

        })
)

exports.createLibrary = function () {
    return datalibrary;
}

exports.text= function(session, args) {

    session.beginDialog("dataPrompts:text", args)

}