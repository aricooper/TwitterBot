console.log('The bot is starting');
    
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: '#MAGA', language: 'en' });

stream.on('tweet', function(tweet) {
    tweetEvent(tweet);
});

function tweetEvent(tweet) {
    console.log(tweet.text);
    var from = tweet.user.screen_name;
    tweetIt(from);

}
//setInterval(tweetIt, 1000 * 60);

function tweetIt(from) {

    //post to twitter with tweet
    var post = 'Thanks, ' + '@' + from + ',  for keeping it trashy! #TrumpDump';
    var other = 'covfefe';
    T.post('statuses/update', { status: post }, function(err, data, response) {
        if (err) {
           console.log('***** '+err+' *****');
        } else {
            console.log('***** posted: \n\ ' + data);
        }
    });


}