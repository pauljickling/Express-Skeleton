const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(app.get("port"), function() {
  console.log("Express served ad http://localhost:" +
          app.get("port") + "; press ctrl+c to terminate.");
});
