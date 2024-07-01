const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '226392284994-a109fi7eitjpfhnftnl73ro0q23gfvtq.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04SoGjyme6TKICgYIARAAGAQSNwF-L9IrEdtN9mvs4xOA6s-DjViTPUAsWNL3d_OlT5K7bWB6AG-cOo7PX9N_nENzplOJfJieOxQ'


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN})

async function sendMail(email,token) {
    

    try {
      const accessToken = await oAuth2Client.getAccessToken()
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'Yashrajmishra45@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken
        }
      })
   
      console.log(email);
      console.log(token);
      const mailOptions = {
        from: 'HP 📧 <Yashrajmishra45@gmail.com>',
        to: email,
        subject: 'Hello from gmail using API',
        text: 'Hello from Yashraj mishra',
        html:`
        <p>You requested for password reset</p>
        <h5>click in this <a href="http://localhost:3001/Reset-password/${email}/${token}">Link</a>`
      };

   

      const result = await transport.sendMail(mailOptions)
      return result


        
    } catch (error) {
        return error
    }
}

module.exports={sendMail};