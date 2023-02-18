const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require('path');

module.exports = (data) => {
  async function main() {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIN_EMAIL,
        pass: process.env.MAIN_EMAIL_PWD,
      },
    });

    const welcomeTML = fs.readFileSync(path.dirname(__filename)+`/templates/welcome.html`).toString();

    try{
      let info = await transporter.sendMail({
        from: '"Jira Doop! 📋" <foo@example.com>',
        to: data.email,
        subject: "Welcome!",
        text: "Hello world?",
        html: welcomeTML,
      });
    
      if(info.messageId) { 
        console.log("Message sent!")
      }

    } catch (err) {
      console.log(err.message)
    }
  }
  
  main().catch(console.error);
}
// async..await is not allowed in global scope, must use a wrapper
