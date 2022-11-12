const ApiError = require('../error/ApiError')

class TweetController{
    tweet(req,res,next){
        const {msg}= req.body;
        if(!msg){
        next((ApiError.BadRequest('msg is required')))
        return;   
        }
        res.sendStatus(201)
    }

    profile(req,res,next){
        const {msg,id}= req.body;
        if(!msg || !id){
        next((ApiError.BadRequest('msg and id are required')))
        return;   
        }
        res.sendStatus(201)
    }

    
}

module.exports = new TweetController()