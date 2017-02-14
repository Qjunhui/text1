/**
 * Created by Administrator on 2017/2/5.
 */

function SongManager(parent) {
    //兼容参数的多样性，统一处理为jQuery对象
    var $parent=$(parent);

    this.title="歌曲管理";
    this.init($parent);
}
SongManager.prototype={
    constructor:SongManager,
    //页面初始化
    init:function ($parent) {
        //this,SongManager构造函数的实例
        //1.加载DOM元素
        this.renderDOM($parent);
        //2.事件绑定
        this.bindEvents();
    },
    //加载DOM元素
    //上一级作用域是全局的
    renderDOM:function ($parent) {
        $("<div class='songmanager-container'>des</div>").appendTo($parent);
    },
    //事件绑定
    bindEvents:function () {
        
    },
    addSong:function () {
        
    },
    deleteSong:function () {
        
    }
    
}