/**
 * Created by Administrator on 2017/2/5.
 */

function SongManager(parent,songData) {
    this.songData=songData;

    //兼容参数的多样性，统一处理为jQuery对象
    this.$parent=$(parent);

    this.title="歌曲管理";
    this.init();
}
SongManager.prototype={
    constructor:SongManager,
    //页面初始化
    init:function () {
        //this,SongManager构造函数的实例
        //1.加载DOM元素
        this.renderDOM();
        //2.事件绑定
        this.bindEvents();
    },
    //加载DOM元素
    //上一级作用域是全局的
    renderDOM:function () {
        var containerString= ("<div class='songmanager-container'>" +
            "<h3>{{title}}</h3>" +
            "<div>" +
                "<span>歌曲名称：</span><input type='text' id='txtSongName'/>" +
                "<span>歌手名：</span><input type='text' id='txtSingerName'/>" +
                "<input type='button' value='添加' id='btnAddSong'/>"+
            "</div>"+
            "<div class='songmanager-table'>" +
                "<div class='table-header'>" +
                    "<div class='table-header-colsongname'>歌曲名称</div>"+
                    "<div class='table-header-colsingername'>歌手名</div>"+
                    "<div class='table-header-coloperate'>操作</div>"+
                "</div>"+
                "<div class='table-body'></div>"+
            "</div>"+
            "</div>").replace("{{title}}",this.title);
        
        var $containerString=$(containerString);
        
        this.songData.forEach(function (songData) {
            $containerString.find(".table-body").append(
                "<div>" +
                    "<div class='table-header-colsongname'>"+songData.songName+"</div>"+
                    "<div class='table-header-colsingername'>"+songData.singerName+"</div>"+
                    "<div class='table-header-coloperate'><input type='button' value='删除'class='btn-delete'></div>"+
                "</div>");
        })

        $containerString.appendTo(this.$parent);
        this.$containerString=$containerString;

    },
    //事件绑定
    bindEvents:function () {
        var self=this;

        $("#btnAddSong").click(function () {
            //1.获取用户输入的歌曲信息
            var songName=$("#txtSongName").val();
            var singerName=$("#txtSingerName").val();
            //2.在表格中添加一行
            self.$containerString.find(".table-body").append(
                "<div>" +
                "<div class='table-header-colsongname'>"+songName+"</div>"+
                "<div class='table-header-colsingername'>"+singerName+"</div>"+
                "<div class='table-header-coloperate'><input type='button' value='删除'class='btn-delete'></div>"+
                "</div>");
        });
    },
    addSong:function () {
        
    },
    deleteSong:function () {
        
    }
    
}