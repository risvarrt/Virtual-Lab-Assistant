const Hello = (name,link,staff,date,start,end,testname) => {

    return `
      <!DOCTYPE html>
     <html style="margin: 0; padding: 0;">
     
         <head>
             <title>Hello</title>
         </head>
     
             <body style="margin: 0; padding: 0;">
                <br />
                <br />
                <div><p><b>Hi ${name},</b><br/>
                A new test (${testname}) has been scheduled on <b>${date}</b>,<br/>from <b>${start}</b> to <b>${end}</b>,
                by <b>Mr/Mrs.${staff}</b>. <br/>
                You are kindly requested to attend the test via <br/>${link}
                </p></div>
                <br />
                <br />
             </body>
     
       </html>
      `;
  };
  
  module.exports = { Hello };
  