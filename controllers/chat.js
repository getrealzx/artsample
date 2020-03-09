const e = require('express');
const r = e.Router();


r.get('/chat',(req,res) => {

    res.render('chat')
    
})


module.exports = r;