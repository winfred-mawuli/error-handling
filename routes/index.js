const express =  require('express')
const router = express.Router()
const TweetController = require('../controllers/tweets')

router.route('/tweet')
.post(TweetController.tweet)

router.route('/profile')
.post(TweetController.profile)

module.exports = router
