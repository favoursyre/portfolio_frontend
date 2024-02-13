///This file is for everything email

///Libraries -->
import nodemailer from "nodemailer"
import { IHire } from "./interfaces";
import { companyName, SUPPORT_EMAIL, SUPPORT_PASSWORD, domainName } from "./utils"

///Commencing the code


/**
 * @notice This sends an email, works with gmail account for now
 * @param senderEmail The email address of the sender
 * @param senderPassword The password for the email address of the sender
 * @param recipientEmail The recipient's email address
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
export const sendEmail = (
    senderName: string,
    senderEmail: string, 
    senderPassword: string, 
    recipientEmail: string, 
    subject: string,
    body: string | undefined,
    template: string | undefined,
    context: Object | undefined
    ): string | void => {
        let transporter = nodemailer.createTransport({
          // host: 'smtp.privateemail.com', // Replace with your SMTP host
          // port: 465, // Replace with your SMTP port
          // secure: true, // Set to true if using a secure connection (e.g., port 465)
          host: "smtp.titan.email",
          port: 465,
          secure: true,
            //service: 'gmail',
            //providerAuth
            authMethod: 'PLAIN',
            auth: {
              user: senderEmail,
              pass: senderPassword
            }
          });


        // point to the template folder
        // const handlebarOptions: NodemailerExpressHandlebarsOptions = {
        //   extName: '.hbs',
        //   viewEngine: {
        //       partialsDir: path.resolve('./src/utils/emails/'),
        //       defaultLayout: false,
        //   },
        //   viewPath: path.resolve('./src/utils/emails/'),
        // };
        console.log("Credentials: ", SUPPORT_EMAIL, SUPPORT_PASSWORD)
        // // use a template file with nodemailer
        // transporter.use('compile', hbs(handlebarOptions))

          let mailOptions = {
            from: `${senderName} <${senderEmail}>`,
            to: recipientEmail,
            subject: subject,
            text: body,
            template: template,
            context: context
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              return error.message
            } else {
              console.log('Email sent: ' + info.response);
              return info.response
            }
          });
    }


/**
 * @notice This sends a successful inquiry email to a customer
 * @param recipientEmail The recipient's email address
 * @param recipientName The name of the recipient
 * @param subject The subject of the email to be sent
 * @param body The body message of the email to be sent
 * @returns The status of the sent email, whether successful or not
 */
export const sendInquiryEmail = (hire: IHire): any => {
    const template: string = `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <title></title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=Inter');
        html {
          padding: 0px;
          overflow-x: hidden;
          /* border: 2px solid yellow; */
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          font-family: 'Inter';
        }
  
        body {
          /* align-items: center; */
          position: absolute;
          /* border: 2px solid blue; */
          width: 95%;
          height: 95%;
        }
  
        main {
          /* align-items: center; */
          position: relative;
          border: 2px solid blue;
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 95%;
          height: 100%;
          padding: 1% 2.5%;
        }
  
        .logo {
          position: relative;
          border: 2px solid blue;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 95%;
          height: 7%;
          margin-bottom: 20px;
          top: 5%;
        }
  
        .logo img {
          position: relative;
          object-fit: contain;
          /* border: 2px solid blue; */
          width: 7%;
          height: 60%;
        }
  
        .message {
          border: 2px solid blue;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 5%;
          top: 10%;
          font-size: 16px;
          line-height: 22px;
        }
  
        #salute {
  
        }
  
        #body {
          border: 2px solid blue;
          position: relative;
          display: flex;
          flex-direction: column;
          top: 15%;
        }
  
      /* This is for mobile */
      @media (min-width: 550px) and (max-width: 1024px) {
        .logo img {
          width: 15%;
        }
      }
  
        /* This is for mobile */
        @media (min-width: 0px) and (max-width: 550px) {
  
          .logo {
            margin-bottom: 0px;
          }
  
          .logo img {
              /* border: 1px solid red; */
              width: 25%;
          }
  
          .brief {
            font-size: 18px;
            flex-direction: column;
          }
  
          .message {
            font-size: 16px;
          }
  
          #body {
            top: 5%;
          }
        }
      </style>
    </head>
  
    <body>
      <main>
        <header class="logo">
          <img 
              src="https://drive.google.com/uc?export=download&id=1RbUo9BSAyxfNmzVV_dzjC7E4nT9ZtbnV"
              alt="test"
          />
        </header>
        <div class="message">
          <span id="salute">Dear,</span>
          <span id="body">
              Thank you for reaching out to us. We have received your message and our team will respond to you promptly. 
          <br />
          <br />
          Best regards, <br />
          Dr Ritany Customer Care
          </span>
        </div>
      </main>
      <script>
        
      </script>
    </body>
  </html>
    `
  
    const body = `
  Dear ${hire.clientName},
  
  Thank you for reaching out. I have received your inquiry and appreciate the time you took to contact me. Your questions are important to me and I want to assure you that I'm working on providing you with a comprehensive response.
  
  If you have any further questions or concerns in the meantime, please do not hesitate to contact us. We appreciate your patience and look forward to assisting you.
  
  Warmest regards, 
  
  Customer Support Team
  ${companyName}
    `
    
    const status = sendEmail(`${companyName}`, SUPPORT_EMAIL, SUPPORT_PASSWORD, hire?.emailAddress, ` Acknowledgment of your Inquiry`, body, undefined, undefined)
    return status
  }


  
