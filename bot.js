console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: ['#MAGA'], language: 'en' });
stream.on('tweet', tweetEvent);

var params = {
    q: 'trump',
    count: 5
};

function tweetEvent(tweet) {
    var text = tweet.text;
    var from = tweet.user.screen_name;
    tweetIt(from);

}
//setInterval(tweetIt, 1000 * 60);

function tweetIt(from) {

    //post to twitter with tweet
    var tweet = {
        status: 'Thanks, ' + '@' + from + ',  for keeping it trashy! #TrumpDump'
    };

    T.post('status/update', tweet, tweeted);


    function tweeted(err, data, response) {
        if (err) {
           
        } else {
            console.log('posted');
        }
    }
}