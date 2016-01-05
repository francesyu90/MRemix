Meteor.subscribe("tracks");

Template.getFilesFromDatabase.helpers({

	tracksIndex: () => TracksIndex

});

Template.tableHeader.helpers({

	checkAddAll:function(){
		var size = Tracks.find({}).count();
		var count = Tracks.find({isAdd:true}).count();
		if(size == count){
			return true;
		}else{
			return false;
		}
	}

});

Template.showCurrentPlaylist.helpers({

	isPlaylistEmpty:function(){
		var count = Tracks.find({isAdd:true}).count();
		if(count <= 0){
			return true;
		}else{
			return false;
		}
	}

});

Template.playlistAlert.helpers({

	//	precondition: at least one track in the playlist
	currentPlaylist:function(){
		var playlist = Tracks.find({isAdd:true});
		Session.set("playlist", playlist.fetch());
		return playlist;
	}

});


