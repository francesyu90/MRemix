Meteor.publish("musicurls", function(){
    return MusicUrls.find();
});