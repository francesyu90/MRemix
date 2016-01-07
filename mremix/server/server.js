Meteor.publish("tracks", function(){
    return Tracks.find();
});

/*	Music Machine	*/
Meteor.publish("musicMachine", function(){
    return MusicMachine.find();
});

if(MusicMachine.find().count() === 0) {
	MusicMachine.insert({slide: 50});
}