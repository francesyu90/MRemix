Meteor.publish("tracks", function(){
    return Tracks.find();
});

/*	Music Machine	*/