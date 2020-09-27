
rt=exp.Router();
rt.get("/get",(req,res)=>{
    conn.tbl_brand.find((err,result)=>{
        if(err)
        res.send(err);
        else
        res.send(result);
    })
})


rt.post("/insert",(req,res)=>{
    console.log(req.body);
    conn.tbl_brand.save(req.body,(err)=>{
            if(err)
            res.send(err)
            else
            res.send({result:"Data Inserted"})
    })
})
      
rt.put("/update",(req,res)=>{
 console.log(req.body);
 conn.tbl_brand.update({_id:oid(req.body.id)},
                    {$set:{brandname:req.body.brandname,active:req.body.active}},(err)=>{
                    if(err)
                    res.send(err);
                    else
                    res.send({result:"Data Updated Sabrish"})
            })
})

   



module.exports=rt;