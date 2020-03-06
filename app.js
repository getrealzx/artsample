const e = require('express');
const app = e();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require('./controllers/index.js'));
// app.use(require('./controllers/albums.js'));

app.use(e.static('public'));

app.listen(1000, () => {
    console.log('port 1000 is running');

})