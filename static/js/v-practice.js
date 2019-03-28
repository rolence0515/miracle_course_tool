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
    <el-card shadow="never" style="max-height:150px">
        <div class="mb-2 crop-text-2 reg-text">{{title}}</div>
        <div class="">
            <el-checkbox >完成</el-checkbox>
        </div>
        <div> <el-button type="text" class="button" @click="oninfoclick">更多資訊</el-button> </div>
    </el-card>
    `,
    props:["title",'body'],
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
        }
        
    }
 });