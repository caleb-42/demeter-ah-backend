require('dotenv').config();

export const resetPasswordMessage = (user, resetToken) => {
  const url = `${process.env.APP_URL}/change-password?resetToken=${resetToken}`;
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,500,700" rel="stylesheet">
        <style>
          * {font-family: 'Montserrat'; font-weight: 200;}
           strong {font-family: 'Montserrat'; font-weight:500;}
          .heading {border: none; border-bottom: 1px solid #d0d0d0;}
          .container {width: 80%;margin: 0 auto; box-shadow: 0px 2px 10px 0px #d0d0d0; background: #ffffff;padding: 30px;}
          .name {font-size: 1.2rem;}
          .message{font-size: 1.2rem;}
          .link-btn {display: inline-block; border:1px solid #835BD8; font-family: 'Montserrat'; font-weight:500; border-radius:50px; padding: 0.5em 1.9em; color: #835BD8 !important;text-decoration: none;font-size: 1rem;}
          .logo {width: 165px; padding-bottom: 20px;}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="heading">
            <img class="logo"
            src="https://res.cloudinary.com/authors-haven-32/image/upload/v1562744256/authorslogo_dkn8nz.png"
            alt="AH-logo"
           />
          </div>
          <p class="message">
            Hello <strong>${user.firstName}</strong> <strong>${user.lastName}</strong>,
            <br>
            Please click on the reset button to reset your password. 
            <br> <br>
            Regards,<br>
            AH-Support Team.
          </p>
          <a class="link-btn" href=${url}>
            Reset
          </a>
        </div>
      </body>
    </html>  
  `;
};

export const activationMessage = (user, token) => {
  const url = `${process.env.APP_URL}/verify?activate=${token}`;
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,500,700" rel="stylesheet">
        <style>
          * {font-family: 'Montserrat'; font-weight: 200;}
           strong {font-family: 'Montserrat'; font-weight:500;}
          .heading {border: none; border-bottom: 1px solid #d0d0d0;}
          .container {width: 80%;margin: 0 auto; box-shadow: 0px 2px 10px 0px #d0d0d0; background: #ffffff;padding: 30px;}
          .name {font-size: 1.2rem;}
          .message{font-size: 1.2rem;}
          .link-btn {display: inline-block; border:1px solid #835BD8; font-family: 'Montserrat'; font-weight:500; border-radius:50px; padding: 0.5em 1.9em; color: #835BD8 !important;text-decoration: none;font-size: 1rem;}
          .logo {width: 165px; padding-bottom: 20px;}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="heading">
            <img class="logo"
            src="https://res.cloudinary.com/authors-haven-32/image/upload/v1562744256/authorslogo_dkn8nz.png"
            alt="AH-logo"
           />
          </div>
          <p class="message">
            Hello <strong>${user.firstName}</strong> <strong>${user.lastName}</strong>,
            <br>
            Welcome to Author's Haven!
            <br>
            Please click on the verify button to verify your Author's haven account. 
            <br> <br>
            Regards,<br>
            AH-Support Team.
          </p>
          <a class="link-btn" href=${url}>
            Verify
          </a>
        </div>
      </body>
    </html>  
    `;
};
