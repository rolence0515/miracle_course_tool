//自動儲存指定的資料
// 初始化，呼叫init_ls來自動載入上次儲存的資料，如果裏面有資料的話
// 初始化後，此元件會自動監控初始化傳入的資料名稱，如果有變動的話，自動儲存到localstroage
// ↓以下為範例, key在全站要有唯一性
// this.init_ls("key_", ["your_data1", "your_data2"])
//----------------------
// this.is_init_ls 用來判斷是否已經呼叫過init_ls方法了
//=====================
//以下是完整範例
// if(this.is_init_ls == false){
//     //使用mixinLocalStorge來載入資料快取
//     this.init_ls("rpt_newreturn", ["chartdata","datalist"]);
//     if(this.chartdata.length!=0 && this.datalist.length!=0){
//         return;
//     }
// }
var mixinLocalStorge = {
    data:{
        ls_dataset:[], //陣列，要自動儲存的data
        is_init_ls:false //是否已初始化, 如果已經叫用了init_ls()就會是true
    },
    methods: {
        clear_all(){
            localStorage.clear();
        },
        init_ls(key, save_props){
            // localStorage.clear();
            //傳入要自動儲存data名稱陣列["data1", "data2"]
            this.is_init_ls = true;
            var _this = this
            this.ls_dataset = save_props;
            var hasData = false;
            this.ls_dataset.forEach(function(p) {
                if(localStorage[key+"_"+p]){
                    // if ls has data , reload value to prop
                    _this[p]= JSON.parse(localStorage[key+"_"+p])
                    hasData = true;
                }

                _this.$watch(p, function(newv, oldv){
                    //watch prop change then save to ls
                    localStorage[key+"_"+p] = JSON.stringify(newv)
                });
            });
            return hasData;
        }
    }
}