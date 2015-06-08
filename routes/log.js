/**
 * Created by lenovo1 on 2015/6/7.
 */
module.exports = {
    login : function (req, res, next){
        var username = req.body.username;
        var userage = req.body.userage;
<<<<<<< HEAD
        //console.log(username + userage);
        res.send("login你好");
        //res.redirect("/loginOk.html");
=======
        console.log(username + userage);
        //res.send("login:" + username +"<br/>userage:" + userage);
        res.redirect("/loginOk.html");
>>>>>>> c63dad16969a7a305a219bea0fcaba8f44135dbd
    },
    logup : function (req, res, next){
        res.send("log-logup");
    },
    logout : function (req, res, next){
        res.send("log-logout");
    },
    search : function (req, res, next){
        res.send("log-search");
    }
}