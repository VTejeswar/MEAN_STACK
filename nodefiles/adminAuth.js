

rt=exp.Router()
rt.post("/admin",function(req,res){
    
    conn.tbl_admin.find(req.body,(err,results)=>{
        
        if(results.length==0){
            res.send({login:"fail"})
        }else{
            payload={
                un:results[0].uname,
                role:results[0].role,
                auth:1
            }
            key="@##$%"
           var token=jwt.sign(payload,key)
            console.log(token)
            console.log(jwt.decode(token))
            res.send({login:"Success",data:token})
        }
    })
})
module.exports=rt;      
   
