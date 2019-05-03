/*************************************
- 描述: okr card
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
    delimiters: ['[[', ']]'],
    template: `
    <!-- okr-card start -->
    <el-card shadow="hover" class="mb-4" :class="{'dark':isdark}">
        <div slot="header" style="" class="clearfix">
            <span >[[ isdark ? "與你分享的" : ""]] OKR</span>
            <el-button v-show="!isdark" size="mini" style="float: right; padding: 3px 0" type="text">刪除 </el-button>  
            <el-button v-show="!isdark" class="mr-1" size="mini" style="float: right; padding: 3px 0" type="text">分享</el-button>
            
        </div>
        <div  class="clearfix">
            <md-field>
                <!-- 目標 -->
                <label>你的目標</label>
                <md-input v-model="o" style="font-size:1.4em"></md-input>
            </md-field>
            <div class="mb-3">
                <!-- 時間 -->
                <md-icon>event</md-icon>
                <label class="mr-2">截止時間</label>
                <el-date-picker v-model="enddt" style="width:300px" class="mr-1" type="date" placeholder="選擇日期"></el-date-picker>
                <a style="font-size:12px" href="http://www.google.com/calendar/event?action=TEMPLATE&text=查看CDP用戶有沒有增長&dates=20190515/20190516&details=做了行銷活動要查看用戶有沒有增長=>http://cdppj.eagleeye.com.tw:8888/report/rebuy&trp=false"
                    target="_blank" rel="nofollow">加入google月曆提醒我</a>
            </div>
            <div class="mb-3">
                <!-- 人員 -->
                <md-icon>person_pin</md-icon>
                <label class="mr-2">協作人員</label>
                <el-select style="width:300px" v-model="member" multiple placeholder="請選擇">
                    <el-option v-for="m in members" :key="m" :label="m" :value="m">
                    </el-option>
                </el-select>
            </div>
            <div>
                <!-- 進度 -->
                <md-icon>motorcycle</md-icon>
                <label>完成進度百分比</label>
                <el-slider v-model="complete"></el-slider>
            </div>
            <div>
                <!-- krs -->
                <el-form ref="form" label-width="80px">
                    <v-kr :all_members="members"></v-kr>
                </el-form>
            </div>
    
        </div>
    </el-card>
    <!-- okr-card end -->
    `,
    props:["id", "isdark", 'members', 'chk'],
    data(){
        return {
            member:[],
            complete:10,
            enddt:'2019-05-15',
            o:""
        }
    },
    mounted() {
        
    },
    watch: {
        
    },
    methods:{
       
    }
 });