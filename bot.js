console.log('The bot is starting');

//// set up port
//var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000,
//    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//    
//this.listen(port, ip);
//console.log('Server running on http://%s:%s', ip, port);
    
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: '#MAGA', language: 'en' });

stream.on('tweet', function(tweet) {
    tweetEvent(tweet);
});

//var params = {
//    q: 'trump',
//    count: 5
//};

function tweetEvent(tweet) {
    console.log(tweet.text);
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
           console.log('err= ' + err)
        } else {
            console.log('posted: \n\ ' + data);
        }
    }
}