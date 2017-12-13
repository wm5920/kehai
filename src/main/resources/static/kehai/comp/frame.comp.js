var menu=[
    {name:"首页",url:"html/index.html"},
    {name:"检测项目",url:"html/detection-gas.html",
        childs:[{name:"气体检测",url:"html/detection-gas.html"},
            {name:"油品检测",url:"html/detection-oil.html"},
            {name:"化工品检测",url:"html/detection-chemical.html"},
            {name:"金属检测",url:"html/detection-metal.html"},
            {name:"矿产类检测",url:"html/detection-mine.html"},
            {name:"食品及农产品检测",url:"html/detection-food.html"},
            {name:"限量物质检测",url:"html/detection-limit.html"},
            {name:"高分子材料检测",url:"html/detection-polymer.html"},
            {name:"阻燃测试",url:"html/detection-flammability.html"},
            {name:"纺织品类测试",url:"html/detection-spin.html"},
            {name:"电子货物跟踪单办理",url:"html/detection-elec.html"},
            {name:"环境监测",url:"html/detection-env.html"}]},
    {name:"送检流程",url:"html/flow.html"},
    {name:"新闻资讯",url:"html/news1.html",
    childs:[{name:"关于科海",url:"html/news1.html"},
            {name:"工业CT服务",url:"html/news2.html"},
            {name:"气体检测资讯",url:"html/news3.html"}]},
    {name:"招贤纳士",url:"html/recruit.html"},
    {name:"关于我们",url:"html/about.html"}
]

function log(){
    console.log.apply(console, arguments);
}

Vue.component('top-head', {
    template:
    '<div class="row clearfix">'+
        '<div class="top-head">'+
        '    <div class="col-md-9 column">'+
        '        <img class="top-logo" src="images/top.logo.png">'+
        '    </div>'+
        '    <div class="col-md-3 column">'+
        '        <div class="top-hot">'+
        '           <img src="images/top.phone.jpg">'+
        '           <i>服务热线</i>'+
        '           <b>18921293596</b>'+
        '       </div>'+
        '   </div>'+
        '</div>'+
    '</div>'
})
Vue.component('nav-head', {
    props:['menu'],
    template:
        '<div class="row">'+
        '   <div class="nav-head col-md-12 column">'+
        '        <ul class="nav">'+
        '            <li v-for="item in menu">'+
        '                <a v-bind:href="item.url" class="nava">{{item.name}}<img v-if="item.childs !== undefined" src="images/nav.pic.png"></a>'+
        '                <div class="navv" v-if="item.childs !== undefined">'+
        '                    <a v-for="child in item.childs" v-bind:href="child.url" >{{child.name}}</a>'+
        '                </div>'+
        '            </li>'+
        '        </ul>'+
        '    </div>'+
        '</div>'
})
Vue.component('pic-head', {
    props:['picHeadBanner'],
    computed: {
        // 计算属性的 getter
        headBanner: function () {
            // `this` 指向 vm 实例
            return "background: url('"+this.picHeadBanner+"') no-repeat center center"
        }
    },
    template:
        '<div class="row clearfix">'+
        '    <div class="pic-head col-md-12 column" v-bind:style="headBanner">'+
        '    </div>'+
        '</div>'
})
Vue.component('content-location', {
    props:['locations'],
    computed: {
        // 计算属性的 getter
        location: function () {
            var loca="您所在的位置：";
            for(var lo in this.locations){
                loca=loca+this.locations[lo]+" > ";
            }
            if(this.locations!=undefined){
                var y=loca.lastIndexOf(" > ");
                loca=loca.substr(0,y);
            }
            return loca;
        }
    },
    template:
        '<div class="row clearfix content-location">'+
        '        <div class="col-md-3 column">'+
        '        </div>'+
        '        <div class="col-md-9 column ">'+
        '            <p>{{location}}</p>'+
        '        </div>'+
        '</div>'
})

Vue.component('left-body', {
    props:['leftBodyName','leftBodyEnglish','leftBodyNavs'],
    template:
        '<div class="col-md-3 column left-body">'+
        '    <div class="nei-left-tit">'+
        '        <b>{{leftBodyName}}</b>'+
        '        <i>{{leftBodyEnglish}}</i>'+
        '    </div>'+
        '    <div class="nei-nav">'+
        '        <a v-for="nav in leftBodyNavs" v-bind:href="nav.url" >{{nav.name}}</a>'+
        '    </div>'+
        '</div>'
})
Vue.component('content-page', {
    template: '<div class="pager"><span class="disabled"> &lt;&lt; </span> <span class="disabled"> &lt; </span>  <span class="current">1</span> <span class="disabled"> &gt; </span> <span class="disabled"> &gt;&gt; </span></div>'
})
Vue.component('footer-body', {
    props:['menu'],
    template:
        '<div class="row clearfix">'+
        '    <div class="col-md-12 column footer-body">'+
        '        <div class="footer clearfix">'+
        '            <ul>'+
        '                <li v-for="item in menu" v-if="item.name !== \'首页\'">'+
        '                <em><a v-bind:href="item.url" >{{item.name}}</a></em>'+
        // '                <a v-if="item.childs !== undefined" v-for="child in item.childs" v-bind:href="child.url" >{{child.name}}</a>'+
        '                </li>'+
        '            </ul>'+
        '            <div class="footer-right">'+
        '                <em>联系我们</em>'+
        '                <b>18921293596</b>'+
        '                <span>无锡市梁溪区西新街8号</span>'+
        '                <div class="clearfix">'+
        '                    <div class="erwei">'+
        '                        <img src="images/weixin.jpg" style="width: 80px;height: 80px">'+
        '                        <p>官  网  微  信</p>'+
        '                    </div>'+
        '                </div>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</div>'
})
Vue.component('footer-bottom', {
    template:
        '<div class="row clearfix">'+
        '    <div class="col-md-12 column bbtom">'+
        '        <p>'+
        '        Copyright ©  江苏科海检验有限公司 版权所有&nbsp;&nbsp;备案号： <a href="http://www.miitbeian.gov.cn" target="_blank">苏ICP备17073831号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;技术支持：<a href="http://blog.csdn.net/wm5920" target="_blank">球球之家</a>'+
        '        </p>'+
        '    </div>'+
        '</div>'
})