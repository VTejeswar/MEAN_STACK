
rt=exp.Router()
rt.post("/insert",(req,res)=>{
    var record={
        "Brand":req.body.Brand,
        "Category":oid(req.body.Category),
        "Subcategory":oid(req.body.Subcategory),
        "Subsubcategory":oid(req.body.Subsubcategory),      
        "Description" :req.body.Description,
        "Colour" : req.body.Colour,
        "Rating" : req.body. Rating,
        "Offer" : req.body.Offer,
        "Newprice" : req.body.Newprice,
        "Oldprice" : req.body.Oldprice,
        "Size" : req.body.Size,
        "Quantity" : req.body.Quantity,
        "Image":req.body.image
    }    
 console.log(record)
    conn.tbl_product.save(record,(err)=>{
        if(err)
        res.send(err)
        else
        res.send({result:"Insert Success"})
    })        
})
rt.post("/image",(req,res)=>{
    //console.log(req.body);
    var product_images=[]    
    if(req.files.f1.length>1){
        for(var i=0; i<req.files.f1.length; i++){
            file_cont=req.files.f1[i]
            dt=new Date()
            var fname=dt.getTime()+req.files.f1[i].name
            product_images.push(fname) 
            file_cont.mv("../src/product_image/"+fname)
        }
    }
    else{
        var file_cont=req.files.f1
        console.log(req.files)
            dt=new Date() 
            var fname=dt.getTime()+req.files.f1.name
            product_images.push(fname)
            file_cont.mv("../src/product_image/"+fname)
    }

    
        
        conn.tbl_product.find().sort({_id:-1}).limit(1,function(err,result){
            console.log(result[0])
            rwid=result[0]._id
            // var product_images=[fname]
            conn.tbl_product.update({_id:oid(rwid)},{$set:{Image:product_images}})
        })        
            
            res.redirect("http://localhost:4200/admin/products;name="+fname)
      
    
    })       

rt.get("/get",(req,res)=>{
    conn.tbl_product.find(function(err,result){
        if(err){ 
           res.send(err)
        }
        else
        {
            console.log(result);
            res.send(result)
        }
       })
}) 

rt.post("/getproductdata",(req,res)=>{   
    // console.log(req.body.subsubcatid)
    conn.tbl_product.find({Subsubcategory:oid(req.body.subsubcatid)},function(err,result){
        if(err)
        res.send(err)
        else
        res.send(result)
    })
})
      

rt.post("/getprodinfo",(req,res)=>{
    console.log("fbvf",req.body.x)
    conn.tbl_product.find({_id:oid(req.body.x)},(err,result)=>{
        if(err)
        res.send(err)
        else
        res.send(result);
    })
})


rt.post('/getprodinfo_slide',(req,res)=>{
    console.log(req.body);
    console.log(req.body.slide_valuee)
    conn.tbl_product.find({
        Subsubcategory:oid(req.body.subsubcatid),
        Newprice:{$lte: req.body.slide_valuee}
    }).sort({Newprice:1},
        (err,result)=>{
        if(err)
        res.send(err)
        else
        res.send(result)
    })
})

rt.post('/search',(req,res)=>{
    conn.tbl_product.find({Brand:{$regex:req.body.txt}},{_id:1,Brand:1},(err,result)=>{
        if(err)
        res.send(err);
        else
        res.send(result);
    })
    console.log(req.body);
})

module.exports=rt

    

  
  
// rt.post("/image",(req,res)=>{
//     var pro_images=[]
//     if(req.files.f1.length>1)
//     {
//         for(var i=0;i<req.files.f1.length;i++)
//         {
//             file_cont=req.files.f1[i]
//             dt=new Date()
//             var fname=dt.getTime()+req.files.f1[i].name
//             pro_images.push(fname)
//             file_cont.mv("../src/product_image/"+fname)
          
//         }
        
//     }
//     else{
//         var file_cont=req.files.f1
//         console.log(req.files);
//         dt=new Date()
//         var fname=dt.getTime()+req.files.f1.name
//         pro_images.push(fname)
//         file_cont.mv("../src/product_image/"+fname)
//          }
//         conn.tbl_product.find().sort({_id:-1}).limit(1,function(err,result){
//             rwid=result[0]._id
//             conn.tbl_product.update({_id:oid(rwid)},{Image:product_images})
//             res.redirect("http://localhost:4200/admin/product;name="+fname)
//         })
      
    

// })
