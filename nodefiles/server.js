exp=require("express")
app=exp()
app.listen(1000)
oid=require("mongojs").ObjectID
mj=require("mongojs");
console.log("hi sabrish")
jwt=require("jsonwebtoken")
conn=mj("mongodb://localhost:27017/PROJECT");  
        fileupload=require("express-fileupload");
        app.use(fileupload());
crs=require("cors")
app.use(crs())
bp=require("body-parser")
app.use(bp.json())

  

        catref=require("../nodefiles/category");   
        app.use("/catpath",catref)
        
                                      
        catref2=require("../nodefiles/subcategory");
        app.use("/subcatpath",catref2)
                
       catref3=require("../nodefiles/subsubcategory");
       app.use("/subsubcatpath",catref3) 
       

       catref4=require("../nodefiles/adminAuth");
       app.use("/adminpath",catref4)

       catref5=require("../nodefiles/brand");
       app.use("/brandpath",catref5)
                

        catref5=require("../nodefiles/product");
        app.use("/productpath",catref5)       

        catref6=require("../nodefiles/reg&log");
        app.use("/reg",catref6);

        catref7=require('./user_data');
        app.use("/user",catref7);

        catref8=require('./slide');
        app.use('/slide',catref8);

    
        // var crypto = require('crypto');

// var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('voona.sabrish143@gmail.com', 'utf8', 'hex')
// mystr += mykey.final('hex');
       
// console.log("cre",mystr);



// var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('778a2380678322d9d6012d74e77dfff4', 'hex', 'utf8')
// mystr += mykey.final('utf8');

// console.log("de",mystr);
