const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rami.ben-maachia@outlook.fr',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rami.ben-maachia@outlook.fr',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Is there anything we could have done to have kept you on board?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}