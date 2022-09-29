
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const demo=require('../template')
// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
// console.log(CLIENT_ID);

// const CLIENT_ID='219562312695-b5u7ib7u6top4fiq3ulj4s80cdnq5pr4.apps.googleusercontent.com';
// const CLIENT_SECRET='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';
// const REDIRECT_URI='https://developers.google.com/oauthplayground';
// const REFRESH_TOKEN='1//04qksY_vdVjJ8CgYIARAAGAQSNwF-L9IrALO_zveroZH-wkM12yfDXyMHVDGZFcI7vxJXKN-rfxsArE8rhETrgth_F4lJ-Ryd3d4';


const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(email) {
  try {
    // console.log(CLIENT_ID,CLIENT_SECRET,REFRESH_TOKEN);
    const accessToken = await oAuth2Client.getAccessToken();
    // console.log(email);
    console.log(accessToken);
    const transport = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'aadishjain360@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    
    const mailOptions = {
      from: 'AadishJain <aadishjain360@gmail.com>',
      to: email,
      subject: 'Mail Api',
      text: 'Welcome here!',
      html: demo(email),
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));
  module.exports = {
    sendMail
  };