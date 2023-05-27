require('dotenv').config();
import nodemailer from 'nodemailer'

let sendSimpleEmail = async (dataSend) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"MEDICARE 👻" <nguyenducquanptvn@gmail.com>', // sender address
        to: dataSend.reciverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh ✔",
        html: getBodyHTMLEmail(dataSend),
    });

}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
        <h3> Xin chào quý khách hàng ${dataSend.patientName}!</h3>
        <p>Bạn đã nhận được email này vì bạn đã đặt lịch khám bệnh online trên website MEDICARE của chúng tôi</p>
        <p>Thông tin đặt lịch khám bệnh của bạn : </p>
        <div><b>Thời gian ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
        <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới
        để xác nhận và hoàn tất các thủ tục đặt lịch khám bệnh.
        </p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>
        <div>Xin chân thành cảm ơn quý khách hàng đã quan tâm đến dịch vụ của chúng tôi </div>
        `
    }
    if (dataSend.language === 'en') {
        result =
            `
        <h3> Welcome customer ${dataSend.patientName}!</h3>
        <p> You received this email because you booked an online medical appointment on our MEDICARE website</p>
        <p>Information for your medical appointment: </p>
        <div><b>Time ${dataSend.time}</b></div>
        <div><b>Doctor : ${dataSend.doctorName}</b></div>
        <p>If the above information is true, please click on the link below
        to confirm and complete the medical appointment booking procedures.
        </p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>
        <div>
        Thank you very much for your interest in our services </div>
        `
    }
    return result;
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail
}