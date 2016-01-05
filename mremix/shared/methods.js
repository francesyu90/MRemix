Meteor.methods({

	addMusic:function(music){
		Tracks.insert(music);
	},
	updateMusic:function(music){
		var trackId = music._id;
		var track = Tracks.findOne({_id:trackId});
		if(!track){
			return;
		}
		Tracks.update(
			{_id:trackId},
			{$set:
				{
					isAdd:music.isAdd
				}
		});
	}

});