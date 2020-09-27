// nm = require("nodemailer");
// transporter= nm.createTransport({
//             service:'gmail',
//             auth:{
//                 user:'voona.sabrish143@gmail.com',
//                 pass:'Sabrishhh1@'
//             }
// });
// transporter.sendMail({
//         to :'tejeswarrao000@gmail.com',
//         subject :'text mails',
//         from : 'voona.sabrish143@gmail.com',
//         html :"<input type='text'><div>SABRISH</div>"
// },function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// });


nm=require("nodemailer");
transporter=nm.createTransport({
        service :'gmail',
        auth :{
                user : 'tejeswarrao000@gmail.com',
                pass : 'Sabrishh1@'
        }
})
transporter.sendMail({
    to :'voona.sabrish143@gmail.com',
    subject : 'hi',
    from : 'tejeswarrao000@gmail.com',
    html : '<span>SABRISH</span>  <input type="text"> <a href="www.fb.com">link</a> <div>SABRISH</div>' 
},function(err,result){
    if(err){
        console.log(err)
    }else{
        console.log(result);
    }
});