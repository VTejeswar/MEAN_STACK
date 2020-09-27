// module.exports=require("express").Router().get("/getCategory",function(req,res){
//         conn.tbl_category.find(function(err,result){
//             if(err)
//             res.send(err)
//             else
//             res.send(result)
//         })
// }) 
// module.exports=require("express").Router().post("/insertCategory",function(req,res){
//                console.log(req.body)
//                 conn.tbl_category.save(req.body,function(err){
//                     if(err)
//                     res.send(err)
//                     else
//                     res.send({result:"Data Inserted"});
//                 })    
// })
      rt=exp.Router()
rt.get("/getCategory",function(req,res){
  conn.tbl_category.find(function(err,result){
   if(err)
   res.send(err)
   else
   res.send(result)
  })
})


rt.post("/insertCategory",function(req,res){
console.log(req.body)
conn.tbl_category.save(req.body,function(err){
if(err)
res.send(err)
else
res.send({result:"Data Inserted"})
})   
})


rt.put("/updateCategory",function(req,res){
console.log(req.body)
conn.tbl_category.update({_id:oid(req.body.id)},
  {$set:{catname:req.body.catname,active:req.body.active}},
  (err)=>{
    if(err)
    res.send(err)
    else
    res.send({result:"Data Updated"})
  })
})
module.exports=rt



        