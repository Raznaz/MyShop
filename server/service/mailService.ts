import nodemailer from 'nodemailer';

class MailService {
  transporter: any;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'vitavita384@gmail.com',
        pass: 'slavuti4',
      },
    });
  }

  async sendActivationMail(to, link) {
    console.log('send email ----------', to, link);
    await this.transporter.sendMail({
      from: 'vitavita384@gmail.com',
      to,
      subject: 'Activation email.' + process.env.API_URL,
      text: 'Describe you email here please',
      html: `
      <div>
        <h1>Activation, pleas put this link</h1>
        <a href=${link}">${link}</a>
      </div>
      `,
    });
  }
}

export default new MailService();
