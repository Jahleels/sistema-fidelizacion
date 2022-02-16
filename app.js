const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')
const apiRouter = require('./routes')
const path = require('path')
// const DB = require('./app.config');

const app = express();

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public'))); 


const urlDB = `mongodb+srv://jhll:JX5gprpKZmjVVNnC@cluster0.05awz.mongodb.net/project-101`;
mongoose.connect(urlDB)
.then(mongoose => console.log("DB conectada"))
.catch(err => console.log(err))

// Manejador de rutas
app.use('/', apiRouter); 



// Ejecucion del server
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
console.log('Corriendo en el puerto '+ app.get('puerto'));
});