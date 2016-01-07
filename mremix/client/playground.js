Meteor.subscribe("musicMachine");

//Create an Audio Context
acontext = new webkitAudioContext() || new AudioContext;

//Now we can create an instance of our waveform generator and play it. 
waveform = new Synth(acontext);

//Or create a sampler and load a sound into it
maxim1 = new Maxim();
player1 = maxim1.loadFile("drums1.wav");
player1.loop

maxim2 = new Maxim();
player2 = maxim2.loadFile("arp.wav");
player2.loop

maxim3 = new Maxim();
player3 = maxim3.loadFile("bassline.wav");
player3.loop

maxim4 = new Maxim();
player4 = maxim4.loadFile("chords.aif");
player4.loop

maxim5 = new Maxim();
player5 = maxim5.loadFile("hihat2.wav");
player5.loop

maxim6 = new Maxim();
player6 = maxim6.loadFile("slowdrums.aif");
player6.loop

maxim7 = new Maxim();
player7 = maxim7.loadFile("snaredrum1.wav");
player7.loop

maxim8 = new Maxim();
player8 = maxim8.loadFile("vibes.aif");
player8.loop

var players = [player1, player2, player3, player4, player5, player6, player7, player8];
playAll = function(){
	for(var i = 0; i < players.length; i++){
		players[i].volume(1);
		players[i].play();
	}
}
stopAll = function(){
	for(var i = 0; i < players.length; i++){
		players[i].stop();
	}
}
// playDrums = function(){
// 	player1.volume(1);
// }
// stopDrums = function(){
// 	player1.volume(0);
// }
// playArp = function(){
// 	player2.volume(1);
// }
// stopArp = function(){
// 	player2.volume(0);
// }
// playBass = function(){
// 	player3.volume(1);
// }
// stopBass = function(){
// 	player3.volume(0);
// }
// playChords = function(){
// 	player4.volume(1);
// }
// stopChords = function(){
// 	player4.volume(0);
// }
// playHihat = function(){
// 	player5.volume(1);
// }
// stopHihat = function(){
// 	player5.volume(0);
// }
// playSlowDrum = function(){
// 	player6.volume(1);
// }
// stopSlowDrum = function(){
// 	player6.volume(0);
// }
// playSnareDrum = function(){
// 	player7.volume(1);
// }
// stopSnareDrum = function(){
// 	player7.volume(0);
// }
// playVibe = function(){
// 	player8.volume(1);
// }
// stopVibe = function(){
// 	player8.volume(0);
// }
playDrums = function(){
	player1.play();
}
stopDrums = function(){
	player1.stop();
}
playArp = function(){
	player2.play();
}
stopArp = function(){
	player2.stop();
}
playBass = function(){
	player3.play();
}
stopBass = function(){
	player3.stop();
}
playChords = function(){
	player4.play();
}
stopChords = function(){
	player4.stop();
}
playHihat = function(){
	player5.play();
}
stopHihat = function(){
	player5.stop();
}
playSlowDrum = function(){
	player6.play();
}
stopSlowDrum = function(){
	player6.stop();
}
playSnareDrum = function(){
	player7.play();
}
stopSnareDrum = function(){
	player7.stop();
}
playVibe = function(){
	player8.play();
}
stopVibe = function(){
	player8.stop();
}


// var musicInstruments = ["Drum", "Arp","Bass", "Chord", "Hihat", "Slow Drum", "Snare Drum", "Vibe"];

var musicInstruments = [
	{
		name:"Drum",
		volume:100,
		speed:50
	},
	{
		name:"Arp",
		volume:100,
		speed:50
	},
	{
		name:"Bass",
		volume:100,
		speed:50
	},
	{
		name:"Chord",
		volume:100,
		speed:50
	},
	{
		name:"Hihat",
		volume:100,
		speed:50
	},
	{
		name:"Slow Drum",
		volume:100,
		speed:50
	},
	{
		name:"Snare Drum",
		volume:100,
		speed:50
	},
	{
		name:"Vibe",
		volume:100,
		speed:50
	}
];

/**	sample.html helpers	*/
Template.sampleStudio.helpers({

	musicInstruments:function(){
		return musicInstruments;
	},
	toOnLC:function(name){
		return "on"+name.toLowerCase().replace(/\s/g, "");
	},
	toOffLC:function(name){
		return "off"+name.toLowerCase().replace(/\s/g, "");
	},
	startdac:function(){
    	var starter = MusicMachine.findOne();
      	if (starter) {
      		if (starter.start==1) {
          		playAll();
          	}
          	else{
          		stopAll();
          	}
      	}
      	return Session.get("startdac");
    },
    drums:function(){
    	var starter = MusicMachine.findOne();
      	if (starter) {
        	if (starter.drums==1){
          		playDrums();
        	} else if (starter.drums==0){
          		stopDrums();
        	}
    	}
    	return Session.get("drums");
    },
    bass: function (){
    	var starter = MusicMachine.findOne();
      	if (starter) {
        	if (starter.bass==1){
          		playBass();
			}else if (starter.bass==0){
          		stopBass();
			}
      	}
      	return Session.get("bass");
    },
    arp:function(){
    	var starter = MusicMachine.findOne();
    	if (starter){
        	if (starter.arp==1){
          		playArp();
			}else if (starter.arp==0){
				stopArp();
			}
      	}
      	return Session.get("arp");
    },
    chords:function(){
    	var starter = MusicMachine.findOne();
    	if(starter){
    		if(starter.chords==1){
    			playChords();
    		}else if(starter.chords==0){
    			stopChords();
    		}
    	}
    	return Session.get("chords");
    },
    hihat:function(){
    	var starter = MusicMachine.findOne();
    	if(starter){
    		if(starter.hihat==1){
    			playHihat();
    		}else if(starter.hihat==0){
    			stopHihat();
    		}
    	}
    	return Session.get("hihat");
    },
    slowdrums:function(){
    	var starter = MusicMachine.findOne();
    	if(starter){
    		if(starter.slowdrums==1){
    			playSlowDrum();
    		}else if(starter.slowdrums==0){
    			stopSlowDrum();
    		}
    	}
    	return Session.get("slowdrums");
    },
    snaredrum:function(){
    	var starter = MusicMachine.findOne();
    	if(starter){
    		if(starter.snaredrum==1){
    			playSnareDrum();
    		}else if(starter.snaredrum==0){
    			stopSnareDrum();
    		}
    	}
    	return Session.get("snaredrum");
    },
    vibes:function(){
    	var starter = MusicMachine.findOne();
    	if(starter){
    		if(starter.vibes==1){
    			playVibe();
    		}else if(starter.vibes==0){
    			stopVibe();
    		}
    	}
    	return Session.get("vibes");
    },
    sliderVal1:function(){
    	var slider = MusicMachine.findOne();
    	if (slider){
    		Template.instance().$('#slider1').data('uiSlider').value(slider.slide);
	        setSpeed(slider.slide/50);
	        return slider.slide;
    	}
    }

});

Template.sampleStudio.events({

	"click .js-startBtn":function(){
		Session.set("startdac", 1);
		Meteor.call("startDac");
	},
	"click .js-stopBtn":function(){
		Session.set("startdac", 0);
		Meteor.call("stopDac");
	},
	"click #ondrum":function(){
		Session.set("drums", 1);
		Meteor.call("onDrum");
	},
	"click #offdrum":function(){
		Session.set("drums", 0);
		Meteor.call("offDrum");
	},
	"click #onarp":function(){
		Session.set("arp", 1);
		Meteor.call("onArp");
	},
	"click #offarp":function(){
		Session.set("arp", 0);
		Meteor.call("offArp");
	},
	"click #onbass":function(){
		Session.set("bass", 1);
		Meteor.call("onBass");
	},
	"click #offbass":function(){
		Session.set("bass", 0);
		Meteor.call("offBass");
	},
	"click #onchord":function(){
		Session.set("chords", 1);
		Meteor.call("onChord");
	},
	"click #offchord":function(){
		Session.set("chords", 0);
		Meteor.call("offChord");
	},
	"click #onhihat":function(){
		Session.set("hihat", 1);
		Meteor.call("onHihat");
	},
	"click #offhihat":function(){
		Session.set("hihat", 0);
		Meteor.call("offHihat");
	},
	"click #onslowdrum":function(){
		Session.set("slowdrums", 1);
		Meteor.call("onSlowDrum");
	},
	"click #offslowdrum":function(){
		Session.set("slowdrums", 0);
		Meteor.call("offSlowDrum");
	},
	"click #onsnaredrum":function(){
		Session.set("snaredrum", 1);
		Meteor.call("onSnareDrum");
	},
	"click #offsnaredrum":function(){
		Session.set("snaredrum", 0);
		Meteor.call("offSnareDrum");
	},
	"click #onvibe":function(){
		Session.set("vibes", 1);
		Meteor.call("onVibe");
	},
	"click #offvibe":function(){
		Session.set("vibes", 0);
		Meteor.call("offVibe");
	},
	"change .js-change-volume":function(event){
		var volume = event.currentTarget.value/100;
		var index = event.currentTarget.id;
		var player = players[index];
		player.volume(volume);
	},
	"change .js-change-speed":function(event){
		var speed = event.currentTarget.value;
		var indexStr = event.currentTarget.id;
		var index = indexStr.substring(1);
		var player = players[index];
		player.speed(speed);
	}

});

















