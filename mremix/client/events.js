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