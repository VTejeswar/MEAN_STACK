
rt=exp.Router();
    nm=require('nodemailer');
    transport=nm.createTransport({
        service:'gmail',
        auth:{
            user:'tejeswarrao000@gmail.com',
            pass:'Sabrishh1@'
        }

    })
    rt.post('/userRegistration',(req,res)=>{
        console.log("syam",req.body);
        // name:this.registrationForm.controls.name.value,
        // mail:this.registrationForm.controls.mail.value,
        // mobile:this.registrationForm.controls.mobile.value,
        // password:this.registrationForm.controls.password.value,
        // active:0
        var obj={
            name:req.body.name,
            mail:req.body.mail,
            mobile:req.body.mobile,
            password:req.body.password,
            active:req.body.active
        }
        var crypto = require('crypto');

        var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
        var mystr = mykey.update(req.body.mail, 'utf8', 'hex')
        mystr += mykey.final('hex');               
        console.log("mail",mystr);

    
        var mykeyy = crypto.createCipher('aes-128-cbc', 'mypassword');
        var mystrr = mykeyy.update(req.body.password, 'utf8', 'hex')
        mystrr += mykeyy.final('hex');               
        console.log("password",mystrr);


        conn.tbl_userdata.save({name:req.body.name,
                                mail:mystr,
                                mobile:req.body.mobile,
                                password:mystrr,
                                active:req.body.active},(err)=>{
            console.log("sending data",obj)
            if(err){
            res.send(err)
        }
            else{
              var  data='Registration success please activate throug email'
              var mailContent="Please click on activation link <a href='http://localhost:4200/user/activate;em="+mystr+"'>click here</a>";
              transport.sendMail({
                  to:req.body.mail,
                  subject:"Activation Link",
                  html:mailContent,
                  from:'tejeswarrao000@gmail.com'
              })
              console.log("MAILCONTENT",mailContent);
            res.send({result:data})
        }
        })
    })   

rt.post('/update_mail',(req,res)=>{
    conn.tbl_userdata.update(req.body,{$set:{active:1}},(err,result)=>{
        if(err)
        res.send(err)
        else
        res.send({result:"Activated"})
    })
})
    rt.post("/checkuser",(req,res)=>{
        var crypto = require('crypto');

        var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
        var mystr = mykey.update(req.body.mail, 'utf8', 'hex')
        mystr += mykey.final('hex');               
        console.log("mail",mystr);

    
        var mykeyy = crypto.createCipher('aes-128-cbc', 'mypassword');
        var mystrr = mykeyy.update(req.body.password, 'utf8', 'hex')
        mystrr += mykeyy.final('hex');               
        console.log("password",mystrr);
      
            obj={mail:mystr,password:mystrr}
            console.log(obj)   
        conn.tbl_userdata.find(obj,(err,result)=>{
                
        if(result.length==0 ){
            res.send({login:'fail'}) 
        }else
        {   
          // console.log("hi",result[0].active,result[0].mobile)
          //  res.send({login:"success",result})
          if(result[0].active==0)
          res.send({result:0})
          else
          res.send({login:"success",result})
        }
        }) 
    })
module.exports=rt;       