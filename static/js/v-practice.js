/*************************************
- 描述: 練習手冊元件
- html:
       id:必填，元件id，要有唯一性
- 屬性:

- 事件：
    　oninfoclick
        
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

Vue.component("v-practice", {
    template: `
    <el-card shadow="never" style="height:150px">
        <div class="mb-2 crop-text-2 reg-text">{{title}}</div>
        <div class="">
            <el-checkbox v-model="chk" @change="oncheck_chage">完成</el-checkbox>
        </div>
        <div> <el-button type="text" class="button" @click="oninfoclick">課程內容</el-button> 
            <el-button type="text" class="button" @click="onmp3click">播放音頻</el-button>
        </div>
    </el-card>
    `,
    props:["id", "title", 'body', 'chk'],
    data(){
        return {
            
        }
    },
    mounted() {
        
    },
    watch: {
        
    },
    methods:{
        oninfoclick(){
            this.$emit('oninfoclick','nothing'); 
        },
        onmp3click(){
            this.$emit('onmp3click','nothing'); 
        },
        oncheck_chage(ischeck){
            this.$emit('onchangecheck',this.id, ischeck)
        }
        
    }
 });