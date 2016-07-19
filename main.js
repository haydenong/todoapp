/**
 * Created by HF on 5/7/2016.
 */
var express = require("express");
var app = express();
var public = __dirname + "/public";

app.use(express.static(public));
app.use(express.static(__dirname + "/bower_components"));





app.use(function (req,res) {
    console.info("FILE NOT FOUND IN PUBLIC: %s", req.originalUrl);

    res.redirect("/error.html");
});

var port = process.argv[2] || 3000;
app.set("port", port);
app.listen(app.get("port"), function () {
    console.info("Web server started on port %d", app.get("port"));
});