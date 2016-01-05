Meteor.subscribe("musicurls");

Template.getFilesFromDatabase.helpers({

	musicurls:function(){
		return MusicUrls.find({});
	}

});