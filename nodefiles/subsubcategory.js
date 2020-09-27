

rt=exp.Router()
         
rt.get("/getSubSubCat",function(req,res){                       
    conn.tbl_subsubcat.aggregate([
        {$lookup:{
            from:"tbl_subcat",
            foreignField:"_id",
            localField:"subcatid",
            as:"subcatdata"
        }},
        {$unwind:"$subcatdata"}
        ],(err,result)=>{
            if(err)
            res.send(err)
            else
            res.send(result)
        })
   
})


rt.post('/insertSubSubCat',function(req,res){
    conn.tbl_subsubcat.insert({subsubcatname:req.body.subsubcatname,subcatid:oid(req.body.subcatid)})
    res.send({result:"Inserted"})
})



rt.put('/updateSubSubCat',function(req,res){
    conn.tbl_subsubcat.update({_id:oid(req.body.id)},
    {$set:{subsubcatname:req.body.subsubcatname,subcatid:oid(req.body.subcatid)}},
    (err)=>{
        if(err)
        res.send(err)
        else
        res.send({result:"Updated"})
    }
    )
})
module.exports=rt;





