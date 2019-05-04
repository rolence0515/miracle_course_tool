//判斷是否為手機的js
var mixinanimate = {
    data:{
        animate_t:null,
        thenfunc:null
    },
    methods: {
        _timeoutfunc(){
            clearTimeout(this.animate_t);
            this.thenfunc();
        },
        bounceout(elmid, thenfunc){
            this.thenfunc = thenfunc;
            var element = document.querySelector(elmid)
            element.classList.remove('animated', 'bounceOutLeft', 'fast')
            element.classList.add('animated', 'bounceOutLeft', 'fast')
            LineIt.loadButton();
            this.animate_t = setTimeout(this._timeoutfunc, 400);
        },
        bouncein(elmid){
            that = this;
            this.animate_t = setTimeout( ()=> {
                //停四百毫秒後做效果
                var element = document.querySelector(elmid)
                element.classList.remove('animated', 'bounceIn' ,'fast')
                element.classList.add('animated', 'bounceIn', 'fast')
                LineIt.loadButton();
                clearTimeout(that.animate_t)
            }, 400);
        },
        
    }
}