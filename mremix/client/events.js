var playlist = [];

Template.AddMusicModal.events({

	"submit .js-add-music":function(event){
		// event.preventDefault();
		var musicName = event.target.musicName.value;
		var musicUrl = event.target.musicUrl.value;
		var music = {
			musicName:musicName,
			musicUrl:musicUrl
		}
		Meteor.call("addMusic", music);
	}

});

Template.getFilesFromDatabase.events({

	"click .js-tog-addAll":function(event){
		var isAddAll = event.target.checked;
		var tracks = Tracks.find({}).fetch();
		var count = Tracks.find({}).count();
		if(count <= 0){
			return;
		}
		for(var i = 0; i < tracks.length; i++){
			var track = tracks[i];
			track.isAdd = isAddAll;
			Meteor.call("updateMusic", track);
		}
	},
	"click .js-tog-add":function(event){
		var isAdd = event.target.checked;
		var trackId = event.target.id;
		var track = Tracks.findOne({_id:trackId});
		if(!track){
			return;
		}
		if(isAdd){
			track.isAdd = true;
		}else{
			track.isAdd = false;
		}
		Meteor.call("updateMusic", track);
	}

});

