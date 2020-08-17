//Class init
class Drumkit{
    constructor(){
    this.pads = document.querySelectorAll('.pad');
    this.playBtn = document.querySelector('.play');
    this.kickAudio = document.querySelector('.kick-sound');
    this.snareAudio = document.querySelector('.snare-sound');
    this.hihatAudio = document.querySelector('.hihat-sound');
    this.clapAudio = document.querySelector('.clap-sound');
    this.percAudio = document.querySelector('.perc-sound');
    this.tomAudio = document.querySelector('.tom-sound');
    this.miscAudio = document.querySelector('.misc-sound');
    this.index = 0;
    this.bpm = 150;
}
    activePad(){
        this.classList.toggle('active');
    }

    repeat(){
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
    start(){
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
}

const drumkit = new Drumkit();

//Event listeners
drumkit.pads.forEach(pad=>{
    pad.addEventListener("click", drumkit.activePad);
    pad.addEventListener("animationend", function(){
        this.style.animation="";
    })
});

drumkit.playBtn.addEventListener("click", function() {
    drumkit.start();
  });