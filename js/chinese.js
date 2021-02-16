displayThings = [
	"这个树MOD正在被MOD作者(QQ：1010903229)汉化中。"
]

layers.m.resource="里程碑";
layers.m.effectDescription="";
layers.m.baseResource="点数";
layers.m.resetDescription="获得";

let i=0;
while(layers.m.milestones[i]){
	layers.m.milestones[i].requirementDescription="第"+(i+1)+"个里程碑";
	i++;
}

layers.m.milestones[1-1].effectDescription=function(){
	return "获得"+format(new Decimal(1).max(getPointGen()))+"点数每秒。";
}
layers.m.milestones[2-1].effectDescription=function(){
	return "第一个里程碑的效果变为原来的三倍。";
}
layers.m.milestones[3-1].effectDescription=function(){
	return "基于你的点数，第一个里程碑的效果变得更好。现在：x"+format(tmp.m.milestone3Effect);
}
layers.m.milestones[4-1].effectDescription=function(){
	return "基于你的总里程碑数量，第三个里程碑的效果变得更好。";
}
layers.m.milestones[5-1].effectDescription=function(){
	return "解锁下一个层级。里程碑不会被重置。";
}

layers.mm.resource="元里程碑";
layers.mm.effectDescription="";
layers.mm.baseResource="里程碑";
layers.mm.resetDescription="获得";

i=0;
while(layers.mm.milestones[i]){
	layers.mm.milestones[i].requirementDescription="第"+(i+1)+"个元里程碑";
	i++;
}
layers.p.resource="声望点数";
layers.p.effectDescription="";
layers.p.baseResource="点数";
layers.p.resetDescription="重置以获得";

layers.sp.resource="超级声望点数";
layers.sp.effectDescription="";
layers.sp.baseResource="声望点数";
layers.sp.resetDescription="重置以获得";

/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],


    'You have': '你有',
    'You have ': '你有',
    'points': '点数',
    ' points': '点数',
    'Milestone Gotten!': '获得里程碑！',
    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
}

//需处理的后缀
var cnPostfix = {
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
	[/You have (.+)/, '你有 $1'],
	[/Req:(.+)/, '需要：$1'],
	[/Next at(.+)/, '下一个需要$1'],
	[/You are gaining(.+)per second/, '你正在获得$1每秒'],
	[/\((.+)\/sec\)/, '($1/秒)'],
	[/Reach(.+)to unlock \(You have(.+)\)/, '得到$1以解锁这个层级(你有$2)'],
]);