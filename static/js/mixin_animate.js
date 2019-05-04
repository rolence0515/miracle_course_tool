//判斷是否為手機的js
var mixinanimate = {
    methods: {
        bounceout(elmid, thenfunc){
            var element = document.querySelector(elmid)
            element.classList.remove('animated', 'bounceOutLeft', 'fast')
            element.classList.add('animated', 'bounceOutLeft', 'fast')
            LineIt.loadButton();
            setTimeout(thenfunc, 400);
        },

        bouncein(elmid){
            setTimeout( ()=> {
                //停四百毫秒後做效果
                var element = document.querySelector(elmid)
                element.classList.remove('animated', 'bounceIn' ,'fast')
                element.classList.add('animated', 'bounceIn', 'fast')
                LineIt.loadButton();
            }, 400);
        }
    }
}