// const fs = require('fs');
const router = require('express').Router();
const path = require('path');



router.get('/', (req,res)=>{
    const filePath = path.join(__dirname, '../uploads/1695203132788-profile.jpeg')
    res.sendFile(filePath);
    // readFile(filePath, 'utf8', (err, data)=>{
    //     if(!err){
    //         console.log({data})
    //         return res.sendFile(data);
    //     }
    //     else{
            
    //         console.log({err});
    //         return res.render(err);
            
    //     }
    // })
})

module.exports = router;