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
		if(isAddAll){
			var musicurls = MusicUrls.find({}).fetch();
			playlist = [];
			for(var i = 0; i < musicurls.length; i++){
				playlist.push(musicurls[i]._id);
			}
		} else {
			playlist = [];
		}
		Session.set("playlist", playlist);
	}

});