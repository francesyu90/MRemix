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
	},
	/*	Music Machine	*/
	startDac:function(){
		var val = MusicMachine.findOne({});
      	MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
	},
	stopDac:function(){
		var val = MusicMachine.findOne({});
      	MusicMachine.update({ _id: val._id }, {$set: {start: 0}});
	},
	onDrum:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {drums: 1}});
	},
	offDrum:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {drums: 0}});
	},
	onArp:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {arp: 1}});
	},
	offArp:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {arp: 0}});
	},
	onBass:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {bass: 1}});
	},
	offBass:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {bass: 0}});
	},
	onChord:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {chords: 1}});
	},
	offChord:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {chords: 0}});
	},
	onHihat:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {hihat: 1}});
	},
	offHihat:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {hihat: 0}});
	},

	onSlowDrum:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {slowdrums: 1}});
	},
	offSlowDrum:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {slowdrums: 0}});
	},

	onSnareDrum:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {snaredrum: 1}});
	},
	offSnareDrum:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {snaredrum: 0}});
	},
	onVibe:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {vibes: 1}});
	},
	offVibe:function(){
		var val = MusicMachine.findOne({});
		MusicMachine.update({ _id: val._id }, {$set: {vibes: 0}});
	}

});

