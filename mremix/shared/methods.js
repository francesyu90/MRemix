Meteor.methods({

	addMusic:function(music){
		MusicUrls.insert(music);
	}

});