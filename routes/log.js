/**
 * Created by lenovo1 on 2015/6/7.
 */
module.exports = {
    login : function (req, res, next){
        var username = req.body.username;
        var userage = req.body.userage;
        res.send("login你好");
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