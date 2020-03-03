const e = require('express');
const app = e();

app.set('view engine','ejs');
app.set('views','views');

app.use(require('./controllers/'));
app.use(require('./controllers/speaker'));


app.use(e.static('public'));


let PORT = 4000;


app.listen(PORT, () => {
    console.log('port 4000 is running');
    
})