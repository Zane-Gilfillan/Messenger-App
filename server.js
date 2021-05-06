// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const sequelize = require('./config/connection');

// const bp = require('body-parser')



// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {

  app.listen(PORT, () => console.log('zane is a dummy'));
  
});
