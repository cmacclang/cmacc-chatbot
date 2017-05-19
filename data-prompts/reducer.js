var builder = require('botbuilder')

var datalibrary = new builder.Library('dataPrompts')
datalibrary.dialog('reducer',
    new builder.IntentDialog()
        .onBegin(function (session, args,next) {

            session.userData.key = args.prompt.shift()

            session.send('could you please enter the '+ args.prompt.shift());
            if(args.prompt.length > 0){
                datalibrary.reducer(session, {prompt:args.prompt})
            }
            else{
                next()
            }


        })
        .onDefault(function (session) {

            session.userData.value = session.message.text;

            session.endDialogWithResult({ response: session.message.text });

        })
)

exports.createLibrary = function () {
    return datalibrary;
}

exports.reducer= function(session, args) {

    session.beginDialog("dataPrompts:reducer", args)

}