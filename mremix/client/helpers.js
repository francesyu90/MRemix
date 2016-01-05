Meteor.subscribe("musicurls");

Template.getFilesFromDatabase.helpers({
	musicUrlsIndex: () => MusicUrlsIndex
});