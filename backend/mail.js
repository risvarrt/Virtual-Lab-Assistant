const mailer = require("nodemailer");
const { Hello } = require("./hello_template");


const getEmailData = (to, name, link,staff,date,start,end,testname,template) => {
    let data = null;

    switch (template) {
        case "hello":
            data = {
                from: `${staff} <heuristiclabassistant@gmail.com>`,
                to,
                subject: `New announcement from ${staff}, Heuristic Lab Assistant`,
                html: Hello(name,link,staff,date,start,end,testname)
            }
            break;

        
        default:
            data;
    }
    return data;
}


const sendEmail = (to, name,link,staff,date,start,end,testname, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "heuristiclabassistant@gmail.com",
            pass: "qwerty@123"
        }
    })

    const mail = getEmailData(to, name,link,staff,date,start,end,testname, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail }