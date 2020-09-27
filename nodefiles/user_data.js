rt=exp.Router();
    rt.post('/userInsr',(req,res)=>{
        var localData=JSON.parse(req.body.cart)
            var arr=[]
            for(var i=0;i<localData.length;i++){
                arr.push((oid(localData[i]._id)),localData[i].Brand,
                          localData[i].Colour,
                          localData[i].Description,
                          localData[i].Offer,
                          localData[i].Oldprice,
                          localData[i].Newprice,
                          localData[i].Size,
                          localData[i].Quantity,
                          localData[i].Rating,
                          localData[i].uqty,
                          localData[i].Image)
                
            }
            console.log(localData)
            console.log("arr"+arr.Brand)
            body_data={
                mail:req.body.mail,
                password:req.body.password,
                localStorageID:arr[0],
                Brand:arr[1],
                Colour:arr[2],
                Description:arr[3],
                Offer:arr[4],
                Oldprice:arr[5],
                Newprice:arr[6],
                Size:arr[7],
                Quantity:arr[8],
                Rating:arr[9],
                uqty:arr[10],
                Image:arr[11]
            }
            
     
        conn.userData_Products.save(body_data,(err)=>{
            console.log(body_data)
            if(err)
            res.send(err);
            else
            res.send({result:'Inserted'});
        })
    })




    
module.exports=rt;

// rt=exp.Router()
// rt.post("/userInsr",(req,res)=>{
//   var data = JSON.parse(req.body.cartDetails);
//   var uid =oid(req.body.userid);
//   var productid = [];
//   var pqty = [];
//  for(var i=0;i<data.length;i++){
//      productid.push((oid(data[i]._id)))
//     pqty.push(data[i].uqty)
//      //console.log(i);
//  }
//   //console.log(productid);
//   body_data={
//       "userid":uid,
//       "productid":productid,
//       "quantity":pqty
//   }
//   //console.log(body_data)
//   conn.tbl_user_product.save(body_data,(err,result)=>{
//       if(err){
//           res.send(err);
//       }
//       else{
//         res.send({result:"Data Inserted"});
//       }
//   })
// })
// module.exports=rt;
