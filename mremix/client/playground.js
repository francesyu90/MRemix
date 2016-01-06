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