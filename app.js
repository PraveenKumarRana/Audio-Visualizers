var express = require("express");
var app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// routes
app.get("/",function(req, res){
    res.render("show.ejs");
});

// For creating localhost in cloud9 environment
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("App is running ......")
});