//判斷是否為手機的js
var audioplayer = {
    data:{
        audio:null,
    },
    methods: {
       play_mp3: function(mp3url){
        this.audio = new Audio(mp3url);
        this.audio.loop = true;
        this.audio.play();
       },
       stop_mp3: function(){
        this.audio.pause();
        this.audio.currentTime = 0;
       }
    }
}