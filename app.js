const express = require('express');
const app = express();
const path = require('path');


// Mıddlewares
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'temp/index.html'))
})
const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} unda başlatıldı.`);
})