/*************************************
- 描述: v-kr
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

Vue.component("v-kr", {
    template: `
    
    <el-form-item class="mt-4" label="KR">
    <el-input v-model="text" type="textarea" :autosize="true" :rows="2" placeholder="請輸入具體、可衡量、好記憶的關鍵成果">
    </el-input>
    <el-row class="mt-2">
        <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
                <el-button @click="ishelp = !ishelp" class="mr-2 mt-1" size="mini" style="float:left;margin-top: 6px;" :type="ishelp ? 'danger' :''"
                    icon="el-icon-s-help" round>要救援</el-button>
                <el-select v-model="members" class="mr-2" size="mini" style="float:left" multiple placeholder="負責人">
                    <el-option v-for="m in all_members" :key="m" :label="m" :value="m">
                    </el-option>
                </el-select>
                <el-rate v-model="rate" class="mt-2" style="float:left" :show-text="true" :texts="['準備中','剛開始','進行中','快完成了','順利完成']" show-text>
                </el-rate>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                <el-button @click="ishelp = !ishelp" class="mr-2 mt-1" size="mini" style="float:right;margin-top: 6px;" 
                icon="el-icon-plus" round></el-button>
                <el-button @click="ishelp = !ishelp" class="mr-2 mt-1" size="mini" style="float:right;margin-top: 6px;" 
                icon="el-icon-delete" round></el-button>
        </el-col>
    </el-row>
    </el-form-item>
    `,
    props:{
        textarea:{type:String, default:""},
        all_members:{type:Array, default: function () {
            return ['唐僧']
          }},
        
        
    },
    data(){
        return {
            members:[],
            ishelp:false,
            rate:0,
            text:""
        }
    },
    mounted() {
        
    },
    watch: {
        
    },
    methods:{
       
    }
 });