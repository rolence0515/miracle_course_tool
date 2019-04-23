/*************************************
- 描述: 練習手冊元件
- html:
       id:必填，元件id，要有唯一性
- 屬性:

- 事件：
    　onclicksave
        
- 依賴:
       vue element
       vue materaial
       v-multiselect元件

- 作者:
       Rolence
- 使用範例:
      
- 日期:
      
- 特別注意：
   
*************************************/

Vue.component("v-note", {
    template: `
    <div :id="id" v-show="show">
       
        <el-input class="" style="color:#000000;font-size:1em;background:#F2F6FC" placeholder="筆記" autosize type="textarea" v-model="text"></el-input>
        
    </div>
    `,
    props:["id",  'show'],
    data(){
        return {
            text:''
        }
    },
    mounted() {
        this.load_localStroage();
    },
    watch: {
        text: function(){
            this.save_localStorage()   
        }
        
    },
    methods:{
        onclicksave(ischeck){
            this.$emit('onclicksave',this.id, this.text)
        },
        save_localStorage(){
            //save to local straoge
            localStorage.setItem(this.id, this.text)
        },
        load_localStroage(){
            //載入資料
            if (localStorage.getItem(this.id)) {
                this.text = localStorage.getItem(this.id)
            }
        },
        
    }
 });