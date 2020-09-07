console.log('The bot is starting');
    
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

var stream = T.stream('statuses/filter', { from: 'TuckerCarlson', lang: 'en'});

stream.on('tweet', function(tweet) {
    tweetEvent(tweet);
});

function tweetEvent(tweet) {
    var reply = {
    status: "Hi, I'm @" + tweet.user.screen_name + " and I have used my elite privilege to consistently divide Americans, weaponizing fear and racism to divert the accumulated frustration of the working class from the systemic and pernicious effects of unfettered capitalism and white supremacy. Don't believe me? Just look at my most recent deceit above.",
    in_reply_to_status_id: '' + tweet.id_str
    };

    T.post('statuses/update', reply, function(err, data, response) {
        if (err) {
           console.log('***** '+err+' *****');
        } else {
            console.log('***** posted: \n\ ' + data);
        }
    });
}