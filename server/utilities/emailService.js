const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const smtpAuth = require("../config").smtpAuth;

const sendEmail = (mailDetails) => {
  const transporter = nodemailer.createTransport({
    host: "send.one.com",
    port: 465,
    secure: true,
    auth: smtpAuth,
  });
  // Open template file
  var source = fs.readFileSync(
    path.join(__dirname, "../templates/email.hbs"),
    "utf8"
  );
  // Create email generator
  var template = Handlebars.compile(source);
  transporter.sendMail(
    { ...mailDetails, 
      html: template(mailDetails.templateObj)
    },
    function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent", info);
      }
    }
  );
};

const sendEmailVerificationOTP = async (user) => {
  sendEmail({
    from: " ",
    to: user.email,
    subject: "",
    templateObj: {
      ...user,
      emailText: `</p>`,
    },
  });
};

const sendSimpleEmail = async (details) => {
  sendEmail({
    from: "",
    to: '',
    subject: "",
    templateObj: {
      emailText: ` `,
    },
  });
}


const sendEmailVerificationSuccess = async (user) => {
  sendEmail({
    from: "",
    to: user.email,
    subject: "",
    templateObj: {
      ...user,
      emailText: `
     
      `,
    },
  });
};
const sendEmailOTP = async (user) => {
  sendEmail({
    from: " ",
    to: user.email,
    subject: "",
    templateObj: {
      ...user,
      emailText: `
      
      `,
    },
  });
};

const sendEmailForgotPasswordSuccess = async (user) => {
  sendEmail({
    from: " ",
    to: user.email,
    subject: "",
    templateObj: {
      ...user,
      emailText: `
      `,
    },
  });
};

const sendEmailCreateAdmin = async (user) => {
  sendEmail({
    from: "",
    to: user.email,
    subject: "",
    templateObj: {
      ...user,
      emailText: `
      
      `,
    },
  });
};
module.exports = {
  sendEmailVerificationOTP,
  sendEmailVerificationSuccess,
  sendEmailOTP,
  sendEmailForgotPasswordSuccess,
  sendEmailCreateAdmin,
  sendSimpleEmail
  // sendEmailForgotPasswordOTP,
};
