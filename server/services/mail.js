
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: '36214121865@mby.co.il',
        pass: 'Student@264'
    }
});

function sendEmail(to, subject, body) {
    
    const mailOptions = {
        from: '36214121865@mby.co.il',
        to: to,
        subject: subject,
        text: body
    };

    return transporter.sendMail(mailOptions);
}

module.exports = {
    sendEmail
}
