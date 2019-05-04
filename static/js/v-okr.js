/*************************************
- 描述: okr card
- html:
       id:必填，元件id，要有唯一性
- 屬性:
    @ okr :okr 物件

- 事件：
    okr_chnage 修改
    okr_del : 使用者點擊刪除okr
    del_kr 刪除某kr
    add_kr 新增某kr
        
- 依賴:
       mixin_date
- 作者:
       Rolence
- 使用範例:
      
- 日期:
      
- 特別注意：
   
*************************************/

Vue.component("v-okr", {
    mixins:[mixindate],
    delimiters: ['[[', ']]'],
    template: `
    <!-- okr-card start -->
    <el-card :id="'okr_'+okr.id" shadow="never" class="mb-4" :class="{'dark':okr.isdark}">
        <div slot="header" style="" class="clearfix">
            <span >[[ !okr.isdark ? "你參與的" : ""]] OKR</span>
            <el-button @click="click_del" v-show="!okr.isdark" size="mini" style="float: right; margin: 3px 2px;padding:4px 6px" >刪除 </el-button>  
            <div style="float: right; margin: 2px">
            <div class="line-it-button" data-lang="zh_Hant" data-type="share-a" data-ver="3" data-url="https://okrcompanytool.herokuapp.com/" data-color="grey" data-size="small" data-count="false" style="display: none;"></div>
            </div>
        </div>
        <div  class="clearfix">
            <md-field>
                <!-- 目標 -->
                <label>你的目標</label>
                <md-input v-model="okr.o" style="font-size:1.4em"></md-input>
            </md-field>
            <div class="mb-3">
                <!-- 時間 -->
                <md-icon>event</md-icon>
                <label class="mr-2">截止時間</label>
                <el-date-picker v-model="okr.enddt" style="width:300px" class="mr-1" type="date" placeholder="選擇日期"></el-date-picker>
                <a style="font-size:12px" 
                    :href="get_event_url()"
                    target="_blank" rel="nofollow">加入google月曆提醒我</a>
            </div>
            <div class="mb-3">
                <!-- 人員 -->
                <md-icon>person_pin</md-icon>
                <label class="mr-2">參與人員</label>
                <el-select style="width:300px" v-model="okr.members" multiple placeholder="請選擇">
                    <el-option v-for="m in allmembers" :key="m" :label="m" :value="m">
                    </el-option>
                </el-select>
                <a style="font-size:12px" :href="get_gmail_url()" target="_blank" rel="nofollow">傳送gmail</a>
            </div>
            <div>
                <!-- 進度 -->
                <md-icon>motorcycle</md-icon>
                <label>完成進度百分比</label>
                <el-slider v-model="okr.complete"></el-slider>
            </div>
            <div>
                <!-- krs -->
                <el-form ref="form" label-width="80px">
                    <v-kr v-for="kr in okr.krs" @kr_chnage="kr_chnage" @on_add="add_kr" @on_del="del_kr"  v-bind:key="kr.id" :kr="kr" :all_members="allmembers"></v-kr>
                </el-form>
            </div>
    
        </div>
    </el-card>
    <!-- okr-card end -->
    `,
    props:
    //["id", "isdark", 'allmembers', 'data'],
    {
        allmembers:{type:Array, default:[]},
        okr:{
            type:Object, 
            default: function () {
                return {
                    id:-1,
                    isdark:false,
                    members: [],
                    complete: 10,
                    enddt: Date.now(),
                    o: "",
                    krs: [
                        { id: 0, text: "你與目標的距離就只剩下三百六十五天", ishelp: false, rate: 3, members: ['八戒'] },
                    ]
                };
            }
        }
    },
    data(){
        return {
           
        }
    },
    mounted() {
        
    },
    watch: {
        'okr.members': function () {
            this.$emit("okr_chnage", this.okr)
        },
        'okr.complete': function () {
            this.$emit("okr_chnage", this.okr)
        },
        'okr.enddt': function () {
            this.$emit("okr_chnage", this.okr)
        },
        'okr.o': function () {
            this.$emit("okr_chnage", this.okr)
        },
    },
    methods:{
        get_google_cld_text(){
            var text = "O:" + this.okr.o + "(" + this.dt_2_str_dash(this.okr.enddt)  + ")%0A" + (_.map(this.okr.krs, (kr)=>{
                return "- KR:" + kr.text  + "=>" + ( kr.members.join(",")) + "%0A"
            }).join(''))
            return text;
        },

        get_gmail_url(){
            var url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to={to}&su={su}&body={body}&bcc=&tf=1";
            url = url.replace("{su}", this.okr.o).replace("{body}", this.get_google_cld_text())
                .replace("{to}", _.map(this.okr.members, (m)=> m).join(";"))
            return url;
        },
        
        get_event_url(){
            var url = 'http://www.google.com/calendar/event?action=TEMPLATE'
            url += '&text='+ this.okr.o;
            url += '&dates=' + this.dt_2_str_dash(this.okr.enddt).replace(/-/g,"") + '/'  + 
                this.dt_2_str_dash(this.dt_sub_day(this.okr.enddt,1)).replace(/-/g,"");
            url += '&details=' + this.get_google_cld_text()
            url += '&trp=false'
            return url; 
        },
        kr_chnage(changekr){
            this.okr.krs[changekr.id] = changekr;
            this.$emit("okr_chnage", this.okr)
        },
        //==============以下為觸發事件================
        click_del(){
            this.$emit("okr_del", this.okr.id)
        },

        del_kr(krid){
            if(this.okr.krs.length == 1){
                this.$message({
                type: 'warning',
                message: '只剩下一筆KR了，不能刪除!'
                });
                return;
            }
            this.okr.krs = _.filter(this.okr.krs, function(kr){
                return kr.id != krid;
            })
            this.$emit("okr_chnage", this.okr)
        },
        add_kr() {
            if(this.okr.krs.length > 4){
                this.$message({
                type: 'warning',
                message: '不能超過5個KR!'
                });
                return;
            }
            this.okr.krs.push(
                { id:this.okr.krs.length, text:"", ishelp:false, rate:0, members:[] }
            )
            this.$emit("okr_chnage", this.okr)
        }
       
    }
 });