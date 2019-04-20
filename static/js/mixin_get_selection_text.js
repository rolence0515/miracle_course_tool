//取得畫面中選取的字串
//on_selectionEnd父元件可以收到事件
var mixinGetSelectionText = {
    data:{
        selectionEndTimeout:null,
        selectedText:"" //透過它就可以讀取選取值
    },
    methods:{
        userSelectionChanged() {
             // wait 500 ms after the last selection change event
            if (this.selectionEndTimeout) {
                clearTimeout(this.selectionEndTimeout);
                
            }
            this.selectionEndTimeout = setTimeout(function () {
                $(window).trigger('selectionEnd');
            }, 1000);
        },
        getSelectionText() {
            var text = "";
            if (window.getSelection) {
                text = window.getSelection().toString();
            } else if (document.selection && document.selection.type != "Control") {
                text = document.selection.createRange().text;
            }
            return text;
        },
        selectionEnd(){
            this.selectionEndTimeout = null;

            // get user selection
            var selectedText = this.getSelectionText();
            // if the selection is not empty show it :)
            if(selectedText != ''){
                
                this.selectedText = selectedText; //預設要有
                if (this.on_selectionEnd){
                    this.on_selectionEnd(selectedText)
                }
            }
        },
        init_getSelectionText(){
            document.onselectionchange = this.userSelectionChanged;
            $(window).bind('selectionEnd', this.selectionEnd);
        }

    }
}