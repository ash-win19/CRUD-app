const express = require('express');
const router = express.Router();
const infoRouter = require('./infoSchema');

//Create
router.post('/',async(req,res) => {
    
    var data = new infoRouter ({
        Product:req.body.Product,
        Price:req.body.Price,
        Id:req.body.Id
    });

    await data.save()
    res.json(data)

})

//getAll

router.get('/',async(req,res) =>{
    var findData= await infoRouter.find();
    res.json(findData);
})

//Update
router.put('/update',async(req,res) =>{
    var update = await infoRouter.update({_id:req.body._id},{$set:{
        Product:req.body.Product,
        Price:req.body.Price,
        Id:req.body.Id

    }});

    res.json(update);
})

//Delete
router.delete('/del/:id', async(req,res) =>{
    var delData = await infoRouter.findByIdAndRemove(req.params.id).then( e=>{
        res.json({message : 'Deleted SuccessFully'})
    })
})

router.get('/',(req,res) =>{
    res.json('This is from router file');
})
 module.exports=router;