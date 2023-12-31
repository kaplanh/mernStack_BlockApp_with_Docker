"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// node i nodemailer
// sendMail(to:string, subject:string, message:string):

const nodemailer = require("nodemailer");

module.exports = function (to, subject, message) {
    // ?TEST ICIN
    //     // Set Passive:
    //     // return true
    //     // Create Test (Fake) Account:
    //     nodemailer.createTestAccount().then((email) => console.log(email)); //fake email hesabi acmak icin bir defa calisip hesabi aldiktan sonra kapatmalisin
    //     /*
    //     {
    //   user: 'mfevpn3qqbefvkfs@ethereal.email',
    //   pass: 'XPxhwNPgrYvu5HMfGc',
    //   smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
    //   imap: { host: 'imap.ethereal.email', port: 993, secure: true },
    //   pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
    //   web: 'https://ethereal.email'
    // }
    //     */
    //     // Connection to mailServer:
    //     const transporter = nodemailer.createTransport({
    //         host: "smtp.ethereal.email",
    //         port: 587,
    //         auth: {
    //             user: "mfevpn3qqbefvkfs@ethereal.email",
    //             pass: "XPxhwNPgrYvu5HMfGc",
    //         },
    //     });
    //     // SendMail:
    //     transporter.sendMail(
    //         {
    //             from: "mfevpn3qqbefvkfs@ethereal.email",
    //             to: "qadir@clarusway.com", // 'abc@mail.com, def@mail.com'
    //             subject: "Hello",
    //             text: "Hello There...",
    //             html: "<b>Hello There</b>",
    //         },
    //         (error, successInfo) => {
    //             error ? console.log(error) : console.log(successInfo);
    //         }
    //     );

    // ?GFOOGLE MAIL SERVICE
    // Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
    const mailSettings = {
        service: "Gmail",
        user: "kplnhsyn.49@gmail.com",
        pass: "gqtr rxhq njxy vsgi",
    };
    //? YandexMail (yandex) icin :
    // const mailSettings = {
    //     service: "Yandex",
    //     user: "username@yandex.com",
    //     pass: "password", // your emailPassword
    // };
    // Mail Content:
    const emailContent = {
        from: mailSettings.user,
        to: to, // 'qadiradamson@gmail.com',
        subject: subject, // 'Hello',
        text: message, // 'Hello, How are you?',
        html: message, // '<b>Hello</b> How are you?'
    };

    // Connect to mailServer:
    const transporter = nodemailer.createTransport({
        service: mailSettings.service,
        auth: {
            user: mailSettings.user,
            pass: mailSettings.pass,
        },
    });

    //Send Mail
    transporter.sendMail(emailContent, (error, info) => {
        error ? console.log(error) : console.log(info);
    });
};
