//判斷是否為手機的js
var mixindate = {
    methods: {
        dt_2_str_dash: function (dt) {
            // 日期轉字串有dash
            var d = new Date(dt),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [year, month, day].join('-');
        },

        dt_2_str_nodash: function (dt) {
             // 日期轉字串沒有dash
            var d = new Date(dt),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [year, month, day].join('');
        },

        dt_sub_day: function(dt, subday){
            //日期減幾天
            var d = new Date(dt);
            dnew = d.setDate(d.getDate()-subday);
            return dnew
        }
    }
}
