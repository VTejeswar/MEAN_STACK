const { connect } = require("net");

rt=exp.Router()
    rt.get('/slidedata',(req,res)=>{
        // conn.tbl_product.find((err,result)=>{
        //     if(err)
        //     res.send(err)
        //     else
        //     res.send(result);
        // })

        conn.tbl_product.find().limit(10,(err,result)=>{
            if(err)
             res.send(err)
             else
            res.send(result);
        })
    })
module.exports=rt;     