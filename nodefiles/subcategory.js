

rt=exp.Router()
rt.get("/getSubCat",function(req,res){
    conn.tbl_subcat.aggregate([
        {$lookup:{
          from:"tbl_category",
          localField:"catid",
          foreignField:"_id",
          as:"catdata"
        }},
        {$unwind:"$catdata"}
    ],(err,result)=>{
        if(err)
        res.send(err)
        else   
        res.send(result)
    })  

    // conn.tbl_subcat.find(function(err,result){
    //     if(err)
    //     res.send(err)
    //     else
    //     res.send(result)
    // })
})  

rt.post("/insertSubCat",function(req,res){
        conn.tbl_subcat.save({subcatname:req.body.subcatname,catid:oid(req.body.catid)})
        res.send({result:"Inserted"})
    })



rt.put("/UpdateSubCat",function(req,res){
    console.log(req.body)
    conn.tbl_subcat.update({_id:oid(req.body.id) },
    {$set:{subcatname:req.body.subcatname,catid:oid(req.body.catid)}},
    (err)=>{
        if(err)
        res.send(err)
        else
        res.send({result:"Data Updated"})
        }
    )
})
module.exports=rt
