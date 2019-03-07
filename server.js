// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3005;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
      id: "table1",
      
      name: "Yoda",
      eMail: "JediMaster@theforceiswithyou.com",
      Phone: 214-434-5379,
      
    },
    {
        id: "table2",
        name: "Adrian",
        eMail: "TheAdrian@thisismyemail.com ",
        Phone: 867-5309,
        
      },
      {
        id: "table3",
        name: "Sally",
        eMail: "Sally@theforceiswithyou.com",
        Phone: 214-434-8546,
        
      },
  ];
//Basic routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });


app.listen(PORT, function() {
    console.log(`App listening on Port ${PORT}`)
});