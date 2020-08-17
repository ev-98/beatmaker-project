//Class setup
class Drumkit{
    constructor(){
    this.pads = document.querySelectorAll('.pad');
    this.playBtn = document.querySelector('.play');
    this.currentKick = './sounds/kick-808.wav';
    this.currentSnare = './sounds/snare-808.wav';
    this.currentHihat = './sounds/hihat-808.wav';
    this.currentClap = './sounds/clap-808.wav';
    this.currentPerc = './sounds/perc-808.wav';
    this.currentTom = './sounds/tom-808.wav';
    this.currentMisc = './sounds/cowbell-808.wav';
    this.kickAudio = document.querySelector('.kick-sound');
    this.snareAudio = document.querySelector('.snare-sound');
    this.hihatAudio = document.querySelector('.hihat-sound');
    this.clapAudio = document.querySelector('.clap-sound');
    this.percAudio = document.querySelector('.perc-sound');
    this.tomAudio = document.querySelector('.tom-sound');
    this.miscAudio = document.querySelector('.misc-sound');
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
    this.selects = document.querySelectorAll('select');
    this.mutes = document.querySelectorAll('.mute');
    this.tempoSlider = document.querySelector('.tempo-slider');
}
    activePad(){ //visual class
        this.classList.toggle('active');
    }

    repeat(){ //update and repeat pad sounds and anims
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        //loops pads
        activeBars.forEach(bar =>{
            bar.style.animation = `playTrack 0.3s alternate ease-in-out`;
           //checks active pads to play sound
            if(bar.classList.contains('active')){
                //check for each sound
                if(bar.classList.contains('kick-pad')){
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                } 
                if(bar.classList.contains('snare-pad')){
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                } 
                if(bar.classList.contains('hihat-pad')){
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                } 
                if(bar.classList.contains('clap-pad')){
                    this.clapAudio.currentTime = 0;
                    this.clapAudio.play();
                } 
                if(bar.classList.contains('perc-pad')){
                    this.percAudio.currentTime = 0;
                    this.percAudio.play();
                } 
                if(bar.classList.contains('tom-pad')){
                    this.tomAudio.currentTime = 0;
                    this.tomAudio.play();
                } 
                if(bar.classList.contains('misc-pad')){
                    this.miscAudio.currentTime = 0;
                    this.miscAudio.play();
                } 

            }
        });

        this.index++;
    }
    start(){//Check if it's playing
        const interval = (60/this.bpm) * 1000;
       if(this.isPlaying){
           clearInterval(this.isPlaying);
           console.log(this.isPlaying);
           this.isPlaying = null;
       }
       else{
           this.isPlaying = setInterval(() => {
               this.repeat();
           }, interval);
       }    
    }

    updatePlay(){ // play/stop
        if(this.isPlaying){
            this.playBtn.innerHTML="Play";
            this.playBtn.classList.remove("active");
        }else{
            this.playBtn.innerHTML="Stop";
            this.playBtn.classList.add("active");
        }
    }

    changeSound(e){ //changes the sound from path of select
        const selectionName = e.target.name;
        const selectionValue = e.target.value;
        console.log(selectionName);
        console.log(selectionValue);
        switch(selectionName){
            case "kick-select":
                this.kickAudio.src = selectionValue;
                break;
            case "snare-select":
                this.snareAudio.src = selectionValue;
                break;
            case "hihat-select":
                this.hihatAudio.src = selectionValue;
                break;
            case "clap-select":
                this.clapAudio.src = selectionValue;
                break;
            case "perc-select":
                this.percAudio.src = selectionValue;
                break;
            case "tom-select":
                this.tomAudio.src = selectionValue;
                break;
            case "misc-select":
                this.miscAudio.src = selectionValue;
                break;
        }
    }

    mute(e){ //mutes from object's number class
        const muteIndex = e.target.getAttribute('data-track');
        e.target.classList.toggle('active');
        if(e.target.classList.contains('active')){ //click to toggle mute
         switch(muteIndex){
        case "0":
            this.kickAudio.volume = 0;
            break;
        case "1":
            this.kickAudio.volume = 0;
            break;
        case "2":
            this.kickAudio.volume = 0;
            break;
        case "3":
            this.kickAudio.volume = 0;
            break;
        case "4":
            this.kickAudio.volume = 0;
            break;
        case "5":
            this.kickAudio.volume = 0;
            break;
        case "6":
            this.kickAudio.volume = 0;
            break;
         }
    }
        else{ //click to untoggle mute
         switch(muteIndex){
            case "0":
                this.kickAudio.volume = 1;
                break;
            case "1":
                this.kickAudio.volume = 1;
                break;
            case "2":
                this.kickAudio.volume = 1;
                break;
            case "3":
                this.kickAudio.volume = 1;
                break;
            case "4":
                this.kickAudio.volume = 1;
                break;
            case "5":
                this.kickAudio.volume = 1;
                break;
            case "6":
                this.kickAudio.volume = 1;
                break;
             }
          }
        }
    changeTempo(e){ //change tempo slider text
        const tempoText = document.querySelector('.tempo-nr');
        tempoText.innerHTML = e.target.value;
     }
     updateTempo(e){ //update interval along w tempo
        clearInterval(this.isPlaying);
        this.bpm = e.target.value;
        this.isPlaying = null;
        const playBtn = document.querySelector('.play');
        if(playBtn.classList.contains('active')){
            this.start();
        }
     }
}

//Object init
const drumkit = new Drumkit();

//Event listeners
drumkit.pads.forEach(pad=>{
    pad.addEventListener('click', drumkit.activePad);
    pad.addEventListener('animationend', function(){
        this.style.animation="";
    })
});

drumkit.playBtn.addEventListener('click', function() {
    drumkit.updatePlay();
    drumkit.start();
  });

  drumkit.selects.forEach(select=>{
select.addEventListener('change', function(e){
    drumkit.changeSound(e);
    });
});

drumkit.mutes.forEach(btn=>{
    btn.addEventListener('click', function(e){
        drumkit.mute(e);
    });
});

drumkit.tempoSlider.addEventListener('input', function(e){
    drumkit.changeTempo(e);
});

drumkit.tempoSlider.addEventListener('change', function(e){
    drumkit.updateTempo(e);
});