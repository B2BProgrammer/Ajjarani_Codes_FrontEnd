var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ajith.jnnce06@gmail.com',
        pass: 'Axe12384!'
    }
});

var mailOptions = {
    from: 'ajith.jnnce06@gmail.com',
    to: 'meghnabhairappa@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});