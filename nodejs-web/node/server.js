const express = require('express');
let app = express();
app.use(express.static(__dirname+'/public'));
app.get('/',(req,resp) =>{
    resp.send(
        {name:'u i u aa',
        itermuri: [{a:1,b:2},{a:2,b:3}]
        }
        // '<h1>Hello Express!</h1>'

        );
});
app.get('/abaut',(req,res)=>{
    res.send('abaut');
})

app.get('/bad',(req,res)=>{
    res.send({error:"Unable to reach request"});
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});