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

Vue.component("v-okr", {
    template: `
    <el-card shadow="never" style="height:150px">
        <div class="mb-2 crop-text-2 reg-text">{{title}}</div>
        <div class="">
            <el-checkbox :value="chk" @change="oncheck_chage">完成</el-checkbox>
        </div>
        <div> 
            <el-button type="text" class="button" @click="oninfoclick">課程內容</el-button> 
            <el-button v-show="!is_playmp3" type="text" class="button" @click="onmp3click">音頻播放</el-button> 
            <el-button type="danger"  v-show="is_playmp3"  class="button" @click="onmp3stop">音頻停止<i class="el-icon-d-arrow-right el-icon--right"></i></el-button> 
        </div>
    </el-card>
    `,
    props:["id", "title", 'body', 'chk'],
    data(){
        return {
            is_playmp3:false
            
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
    }
 });