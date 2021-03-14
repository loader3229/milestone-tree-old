displayThings = [
	"本MOD的作者QQ：1010903229",
	function(){
		if(getPointGen().gte(getPointSoftcapStart().sqrt())){
			return "因为软上限，第一个里程碑的效果变为原来的"+format(getPointGen().log(getPointGenBeforeSoftcap()),4)+"次方。<br>第一个里程碑的软上限在"+format(getPointSoftcapStart())+"开始。";
		}
		return "";
	}
]

winText="你暂时已经达到了这个树MOD的残局，但是现在...";

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
	return "基于你的点数，第一个里程碑的效果变得更好。当前：x"+format(tmp.m.milestone3Effect);
}
layers.m.milestones[4-1].effectDescription=function(){
	return "基于你的总里程碑数量，第三个里程碑的效果变得更好。";
}
layers.m.milestones[5-1].effectDescription=function(){
	return "解锁下一个层级。里程碑不会被重置。";
}
layers.m.milestones[6-1].effectDescription=function(){
	return "基于你的总里程碑数量，声望点数的获得变得更好。当前：x"+format(tmp.m.milestone6Effect);
}
layers.m.milestones[7-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的1.5次方。";
}
layers.m.milestones[8-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的1.2次方。";
}
layers.m.milestones[9-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的1.1次方。";
}
layers.m.milestones[10-1].effectDescription=layers.m.milestones[15-1].effectDescription=layers.m.milestones[21-1].effectDescription=function(){
	return "解锁2个新的声望升级。";
}
layers.m.milestones[11-1].effectDescription=function(){
	return "声望升级11的效果变得更好。";
}
layers.m.milestones[12-1].effectDescription=function(){
	return "声望升级12的效果变得更好。";
}
layers.m.milestones[13-1].effectDescription=function(){
	return "声望升级13的效果变得更好。";
}
layers.m.milestones[14-1].effectDescription=function(){
	return "声望升级14的效果变得更好。";
}
layers.m.milestones[16-1].effectDescription=function(){
	return "第三个里程碑的效果变为原来的1.016次方。";
}
layers.m.milestones[17-1].effectDescription=function(){
	return "第三个里程碑的效果变为原来的1.017次方。";
}
layers.m.milestones[18-1].effectDescription=function(){
	return "第三个里程碑的效果变为原来的1.018次方。";
}
layers.m.milestones[19-1].effectDescription=function(){
	return "第三个里程碑的效果变为原来的1.019次方。";
}
layers.m.milestones[20-1].effectDescription=function(){
	return "每秒获得重置可以获得的声望点数的10000%。";
}
layers.m.milestones[22-1].effectDescription=function(){
	return "声望点数的获得乘以22。";
}
layers.m.milestones[23-1].effectDescription=function(){
	return "声望升级23的效果变得更好。";
}
layers.m.milestones[24-1].effectDescription=function(){
	return "声望升级24的效果变得更好。";
}
layers.m.milestones[25-1].effectDescription=function(){
	return "解锁下一个层级。";
}
layers.m.milestones[26-1].effectDescription=function(){
	return "在超级声望时保留声望升级。";
}
layers.m.milestones[27-1].effectDescription=function(){
	return "基于你的总里程碑数量，超级声望点数的获得变得更好。当前：x"+format(tmp.m.milestone27Effect);
}
layers.m.milestones[28-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的1.5次方。";
}
layers.m.milestones[29-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的1.2次方。";
}
layers.m.milestones[30-1].effectDescription=function(){
	return "解锁2个新的超级声望升级。";
}
layers.m.milestones[31-1].effectDescription=function(){
	return "声望升级和超级声望升级11的效果变得更好。";
}
layers.m.milestones[32-1].effectDescription=function(){
	return "声望升级和超级声望升级12的效果变得更好。";
}
layers.m.milestones[33-1].effectDescription=function(){
	return "声望升级和超级声望升级13的效果变得更好。";
}
layers.m.milestones[34-1].effectDescription=function(){
	return "声望升级和超级声望升级14的效果变得更好。";
}
layers.m.milestones[35-1].effectDescription=function(){
	return "解锁2个新的超级声望升级。第六个里程碑的效果变为原来的3.5次方。";
}
layers.m.milestones[36-1].effectDescription=function(){
	return "第三个里程碑的效果变为原来的1.036次方。";
}
layers.m.milestones[37-1].effectDescription=function(){
	return "第三个里程碑的效果变为原来的1.037次方。";
}
layers.m.milestones[38-1].effectDescription=function(){
	return "第三个里程碑的效果变为原来的1.038次方。";
}
layers.m.milestones[39-1].effectDescription=function(){
	return "第三个里程碑的效果变为原来的1.039次方。";
}
layers.m.milestones[40-1].effectDescription=function(){
	return "解锁下一个层级。解锁2个新的超级声望升级。";
}
layers.m.milestones[41-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.003次方。";
}
layers.m.milestones[42-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的(1+元里程碑数量)次方。";
}
layers.m.milestones[43-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[44-1].effectDescription=function(){
	return "第一行声望升级的效果变得更好。";
}
layers.m.milestones[45-1].effectDescription=function(){
	return "解锁4个新的声望升级。";
}
layers.m.milestones[46-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.001次方。";
}
layers.m.milestones[47-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的(1+元里程碑数量的0.25次方)次方。";
}
layers.m.milestones[48-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[49-1].effectDescription=function(){
	return "第一行超级声望升级的效果变得更好。";
}
layers.m.milestones[50-1].effectDescription=function(){
	return "解锁下一个层级。";
}
layers.m.milestones[51-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.00175次方。";
}
layers.m.milestones[52-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的(1+元里程碑数量的0.1次方)次方。";
}
layers.m.milestones[53-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[54-1].effectDescription=function(){
	return "第一行声望升级的效果变得更好。";
}
layers.m.milestones[55-1].effectDescription=function(){
	return "解锁4个新的超级声望升级。";
}
layers.m.milestones[56-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.00078次方。";
}
layers.m.milestones[57-1].effectDescription=function(){
	return "每秒获得重置可以获得的超级声望点数的100%。";
}
layers.m.milestones[58-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[59-1].effectDescription=function(){
	return "第一行超级声望升级的效果变得更好。";
}
layers.m.milestones[60-1].effectDescription=function(){
	return "解锁下一个层级。在获得声望加成时保留声望升级。";
}
layers.m.milestones[61-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.0005次方。";
}
layers.m.milestones[62-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的(元里程碑数量的0.129次方)次方。";
}
layers.m.milestones[63-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[64-1].effectDescription=function(){
	return "第一行声望升级的效果变得更好。";
}
layers.m.milestones[65-1].effectDescription=function(){
	return "在获得声望加成时不会重置。在第三级声望时保留声望升级和超级声望升级。解锁2个新的第三级声望升级。";
}
layers.m.milestones[66-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.0005次方。";
}
layers.m.milestones[67-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的(元里程碑数量的0.147次方)次方。";
}
layers.m.milestones[68-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[69-1].effectDescription=function(){
	return "第一行超级声望升级和第一行第三级声望升级的效果变得更好。";
}
layers.m.milestones[70-1].effectDescription=function(){
	return "在第三级声望时保留声望加成升级。解锁4个新的第三级声望升级。";
}
layers.m.milestones[71-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.001236次方。";
}
layers.m.milestones[72-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的(元里程碑数量的0.1次方)次方。";
}
layers.m.milestones[73-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[74-1].effectDescription=function(){
	return "第一行声望升级的效果变得更好。";
}
layers.m.milestones[75-1].effectDescription=function(){
	return "每秒获得重置可以获得的第三级声望点数的10000%。";
}
layers.m.milestones[76-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.00157次方。";
}
layers.m.milestones[77-1].effectDescription=function(){
	return "解锁一个超级声望可重复购买项。";
}
layers.m.milestones[78-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[79-1].effectDescription=function(){
	return "第一行超级声望升级和第一行第三级声望升级的效果变得更好。";
}
layers.m.milestones[80-1].effectDescription=function(){
	return "解锁下一个层级。自动获得声望加成。";
}
layers.m.milestones[81-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.0005次方。在原子级声望时保留声望升级、超级声望升级和声望加成升级。";
}
layers.m.milestones[82-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的(元里程碑数量的0.2次方)次方。在原子级声望时保留第三级声望升级。";
}
layers.m.milestones[83-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。自动购买第一个超级声望可重复购买项。";
}
layers.m.milestones[84-1].effectDescription=function(){
	return "第一行声望升级和第一行原子级声望升级的效果变得更好。";
}
layers.m.milestones[85-1].effectDescription=function(){
	return "解锁一个第三级声望可重复购买项。解锁4个新的第三级声望升级。";
}
layers.m.milestones[86-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.0005次方。";
}
layers.m.milestones[87-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的(元里程碑数量的0.3次方)次方。";
}
layers.m.milestones[88-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[89-1].effectDescription=function(){
	return "第一行超级声望升级和第一行第三级声望升级的效果变得更好。";
}
layers.m.milestones[90-1].effectDescription=function(){
	return "每秒获得重置可以获得的原子级声望点数的500%。";
}
layers.m.milestones[91-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.0005次方。";
}
layers.m.milestones[92-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的(元里程碑数量的0.3次方)次方。";
}
layers.m.milestones[93-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。";
}
layers.m.milestones[94-1].effectDescription=function(){
	return "第一行声望升级和第一行原子级声望升级的效果变得更好。";
}
layers.m.milestones[95-1].effectDescription=function(){
	return "解锁一个原子级挑战。自动购买第一个第三级声望可重复购买项。";
}
layers.m.milestones[96-1].effectDescription=function(){
	return "第三个里程碑的基础效果指数变为原来的1.0005次方。";
}
layers.m.milestones[97-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的(元里程碑数量的0.4次方)次方。";
}
layers.m.milestones[98-1].effectDescription=function(){
	return "第四个里程碑的效果变得更好。"
}
layers.m.milestones[99-1].effectDescription="解锁下一个层级。";
layers.m.milestones[100-1].effectDescription="在超越时保留声望升级和超级声望升级。";
layers.m.milestones[101-1].effectDescription="在超越时保留第三级声望升级和声望加成升级。";
layers.m.milestones[102-1].effectDescription="在超越时保留原子级声望升级。";
layers.m.milestones[103-1].effectDescription="在超越时自动完成原子级挑战1-5各3次，除非你在一个超越挑战里面。";
layers.m.milestones[104-1].effectDescription="第四个里程碑的效果变得更好。解锁一个层级。解锁4个新的超越升级。";
layers.m.milestones[105-1].effectDescription="基于你的总里程碑数量，第一个里程碑的软上限开始的更迟。解锁一个第三级声望可重复购买项。解锁一个超越挑战。";
layers.m.milestones[106-1].effectDescription="第6个和第27个里程碑的效果变为原来的(元里程碑数量的0.5次方)次方。";
layers.m.milestones[107-1].effectDescription="第三个里程碑的基础效果指数变为原来的1.002次方。自动购买第二个第三级声望可重复购买项。";
layers.m.milestones[108-1].effectDescription="在超越时自动完成原子级挑战1-5各6次，除非你在一个超越挑战里面。";
layers.m.milestones[109-1].effectDescription="第四个里程碑的效果变得更好。解锁一个超越挑战。";
layers.m.milestones[110-1].effectDescription="超越挑战1的基础目标变为x^2。你可以在不退出原子级挑战的情况下完成它。";
layers.m.milestones[111-1].effectDescription="在获得超级加成时不会重置。声望加成变得更便宜了。解锁4个新的声望加成升级。解锁4个新的超越升级。";
layers.m.milestones[112-1].effectDescription="超越挑战2的奖励在进行超越挑战2时生效。";
layers.m.milestones[113-1].effectDescription="第6个和第27个里程碑的效果变为原来的(元里程碑数量的0.3次方)次方。";
layers.m.milestones[114-1].effectDescription="在超越时自动完成原子级挑战1-5各9次，除非你在一个超越挑战里面。";
layers.m.milestones[115-1].effectDescription="每秒获得重置可以获得的超越点数的0.5%。解锁一个超越挑战。";
layers.m.milestones[116-1].effectDescription="每秒额外获得重置可以获得的超越点数的1.5%，总计2%。自动获得超级加成。";
layers.m.milestones[117-1].effectDescription="每秒额外获得重置可以获得的超越点数的3%，总计5%。声望加成变得更便宜了。";
layers.m.milestones[118-1].effectDescription="每秒额外获得重置可以获得的超越点数的5%，总计10%。第四个里程碑的效果变得更好。";
layers.m.milestones[119-1].effectDescription="每秒额外获得重置可以获得的超越点数的10%，总计20%。超级加成变得更便宜了。";
layers.m.milestones[120-1].effectDescription="每秒额外获得重置可以获得的超越点数的20%，总计30%。原子级挑战的目标减少了，并且你完成原子级挑战的次数可以不是整数。";

layers.m.tabFormat[3][1]=function(){
	return "里程碑成本快速增加在"+format(tmp.m.getScalingStart,4)+"开始";
}
layers.m.tabFormat[4][1]=function(){
	return "里程碑成本指数是"+format(tmp.m.exponent,4);
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
layers.mm.milestones[1-1].effectDescription=function(){
	return "自动获得里程碑。";
}
layers.mm.milestones[2-1].effectDescription=layers.mm.milestones[3-1].effectDescription=layers.mm.milestones[4-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的平方。";
}
layers.mm.milestones[5-1].effectDescription=layers.mm.milestones[10-1].effectDescription=layers.mm.milestones[15-1].effectDescription=layers.mm.milestones[20-1].effectDescription=function(){
	return "基于你的元里程碑数量，第三个里程碑的效果变得更好。";
}
layers.mm.milestones[6-1].effectDescription=layers.mm.milestones[7-1].effectDescription=layers.mm.milestones[8-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的1.5次方。";
}
layers.mm.milestones[9-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的1.5次方。";
}
layers.mm.milestones[11-1].effectDescription=layers.mm.milestones[12-1].effectDescription=layers.mm.milestones[16-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的1.2次方。";
}
layers.mm.milestones[13-1].effectDescription=layers.mm.milestones[14-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的1.2次方。";
}
layers.mm.milestones[17-1].effectDescription=function(){
	return "第六个里程碑的效果变为原来的1.7次方。";
}
layers.mm.milestones[18-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的1.8次方。";
}
layers.mm.milestones[19-1].effectDescription=function(){
	return "第27个里程碑的效果变为原来的1.9次方。";
}
layers.mm.milestones[21-1].effectDescription=layers.mm.milestones[22-1].effectDescription=layers.mm.milestones[23-1].effectDescription=layers.mm.milestones[24-1].effectDescription="超越点数的获得变为原来的2倍。";

layers.p.resource="声望点数";
layers.p.effectDescription="";
layers.p.baseResource="点数";
layers.p.resetDescription="重置以获得";

for(i in layers.p.upgrades){
	if(i=="rows"||i=="cols")continue;
	layers.p.upgrades[i].title="声望升级"+i;
}
layers.p.upgrades[11].description=layers.p.upgrades[12].description="基于你的声望点数，第一个里程碑的效果变得更好。";
layers.p.upgrades[13].description=layers.p.upgrades[14].description="基于你的声望点数，声望点数的获得变得更好。";
layers.p.upgrades[21].description=layers.p.upgrades[22].description="第六个里程碑的效果变为原来的1.5次方。";
layers.p.upgrades[23].description=layers.p.upgrades[24].description="基于你的声望点数，第三个里程碑的效果变得更好。";
layers.p.upgrades[31].description="基于你的声望点数，里程碑成本快速增加的效果变得更慢。";
layers.p.upgrades[32].description=layers.p.upgrades[33].description=layers.p.upgrades[34].description="声望升级31的效果变得更好。";
layers.p.upgrades[31].effectDisplay=function(){return format(this.effect(),4)+"x";}
layers.p.upgrades[41].description="这个升级和声望升级23的效果一样，但是你需要通过19.7次原子级挑战4才能购买这个升级。";
layers.p.upgrades[42].description="这个升级和声望升级23的效果一样，但是你需要通过14.1次原子级挑战3才能购买这个升级。";
layers.p.upgrades[43].description="第一个声望可重复购买项的效果更好，你需要在超越挑战2里面购买这个升级。";
layers.p.upgrades[44].description="第一个声望可重复购买项的效果更好，你需要在超越挑战4里面购买这个升级。";
layers.p.upgrades[44].currencyDisplayName="点数";

layers.p.upgrades.cols=5;
layers.p.upgrades[15]={
	title:"声望升级15",
	fullDisplay(){
		return "<h3>声望升级15</h3><br>这是一个只有汉化版才有的彩蛋！<br><br>花费：<作者的QQ> 声望点数";
	},
    cost: new Decimal(1010903229),
    unlocked() { return true}, // The upgrade is only visible when this is true
}
layers.p.upgrades[25]={
	title:"声望升级25",
	fullDisplay(){
		return "<h3>声望升级25</h3><br>这是一个只有汉化版才有的彩蛋！<br><br>花费：1e<作者的QQ> 声望点数";
	},
    cost: new Decimal("1e1010903229"),
    unlocked() { return true}, // The upgrade is only visible when this is true
}

layers.sp.resource="超级声望点数";
layers.sp.effectDescription="";
layers.sp.baseResource="声望点数";
layers.sp.resetDescription="重置以获得";

for(i in layers.sp.upgrades){
	if(i=="rows"||i=="cols")continue;
	layers.sp.upgrades[i].title="超级声望升级"+i;
}
layers.sp.upgrades[11].description=layers.sp.upgrades[12].description="基于你的超级声望点数，第一个里程碑的效果变得更好。";
layers.sp.upgrades[13].description=layers.sp.upgrades[14].description="基于你的超级声望点数，声望点数的获得变得更好。";
layers.sp.upgrades[21].description=layers.sp.upgrades[22].description="基于你的超级声望点数，超级声望点数的获得变得更好。";
layers.sp.upgrades[23].description="第6个里程碑与第27个里程碑的效果分别变为原来的(2+元里程碑数量)次方。";
layers.sp.upgrades[24].description="基于你的超级声望点数，第三个里程碑的效果变得更好。";
layers.sp.upgrades[31].description="基于你的超级声望点数，里程碑成本快速增加的效果变得更慢。";
layers.sp.upgrades[32].description=layers.sp.upgrades[33].description=layers.sp.upgrades[34].description="超级声望升级31的效果变得更好。";
layers.sp.upgrades[31].effectDisplay=function(){return format(this.effect(),4)+"x";}

layers.sp.buyables[11].title="声望点数倍数";
layers.sp.buyables[11].display=function(){
	let data = tmp[this.layer].buyables[this.id];
	return "等级："+format(player[this.layer].buyables[this.id])+"<br>"+
	"声望点数的获得乘以"+format(data.effect)+"。<br>"+
	"花费："+format(data.cost)+"超级声望点数";
};

layers.pb.resource="声望加成";
layers.pb.effectDescription=function(){
	return "声望点数变为原来的"+format(layers.pb.effect(),4)+"次方。";
};
layers.pb.baseResource="声望点数";
layers.pb.resetDescription="重置以获得";

for(i in layers.pb.upgrades){
	if(i=="rows"||i=="cols")continue;
	layers.pb.upgrades[i].title="声望加成升级"+i;
}
layers.pb.upgrades[11].description=layers.pb.upgrades[12].description=layers.pb.upgrades[13].description=layers.pb.upgrades[14].description="声望加成的效果变得更好。";
layers.pb.upgrades[21].description=layers.pb.upgrades[22].description=layers.pb.upgrades[23].description=layers.pb.upgrades[24].description="声望加成的效果变得更好。";
layers.pb.upgrades[31].description="声望加成以较小的程度影响第一个里程碑的软上限。";
layers.pb.upgrades[32].description=layers.pb.upgrades[33].description=layers.pb.upgrades[34].description="声望加成升级31的效果变得更好。";

layers.hp.resource="第三级声望点数";
layers.hp.effectDescription="";
layers.hp.baseResource="超级声望点数";
layers.hp.resetDescription="重置以获得";

for(i in layers.hp.upgrades){
	if(i=="rows"||i=="cols")continue;
	layers.hp.upgrades[i].title="第三级声望升级"+i;
}
layers.hp.upgrades[11].description=layers.hp.upgrades[12].description="基于你的第三级声望点数，第一个里程碑的效果变得更好。";
layers.hp.upgrades[13].description=layers.hp.upgrades[14].description="基于你的第三级声望点数，声望点数的获得变得更好。";
layers.hp.upgrades[21].description="基于你的第三级声望点数，超级声望点数的获得变得更好。";
layers.hp.upgrades[22].description="基于你的第三级声望点数，超级声望点数和第三级声望点数的获得变得更好。";
layers.hp.upgrades[23].description="基于你的第三级声望点数，里程碑成本快速增加的效果变得更慢。";
layers.hp.upgrades[24].description=layers.hp.upgrades[33].description=layers.hp.upgrades[34].description="第三级声望升级23的效果变得更好。";
layers.hp.upgrades[31].description="第一个超级声望可重复购买项的效果变为原来的1.05次方。";
layers.hp.upgrades[32].description="第一个第三级声望可重复购买项的效果变为原来的1.1次方。";
layers.hp.upgrades[23].effectDisplay=function(){return format(this.effect(),4)+"x";}

layers.hp.buyables[11].title="声望点数倍数";
layers.hp.buyables[11].display=function(){
	let data = tmp[this.layer].buyables[this.id];
	return "等级："+format(player[this.layer].buyables[this.id])+"<br>"+
	"声望点数的获得乘以"+format(data.effect)+"。<br>"+
	"花费："+format(data.cost)+"第三级声望点数";
};
layers.hp.buyables[12].title="超级倍数";
layers.hp.buyables[12].display=function(){
	let data = tmp[this.layer].buyables[this.id];
	return "等级："+format(player[this.layer].buyables[this.id])+"<br>"+
	"超级声望点数的获得乘以"+format(data.effect)+"。<br>"+
	"花费："+format(data.cost)+"第三级声望点数";
};

layers.ap.resource="原子级声望点数";
layers.ap.effectDescription="";
layers.ap.baseResource="第三级声望点数";
layers.ap.resetDescription="重置以获得";

for(i in layers.ap.upgrades){
	if(i=="rows"||i=="cols")continue;
	layers.ap.upgrades[i].title="原子级声望升级"+i;
}
layers.ap.upgrades[11].description="基于你的原子级声望点数，第一个里程碑的效果变得更好。";
layers.ap.upgrades[12].description="基于你的原子级声望点数，声望点数的获得变得更好。";
layers.ap.upgrades[13].description="基于你的原子级声望点数，超级声望点数的获得变得更好。";
layers.ap.upgrades[14].description="基于你的原子级声望点数，第三级声望点数的获得变得更好。";
layers.ap.upgrades[21].description="基于你的原子级声望点数，原子级声望点数的获得变得更好。";
layers.ap.upgrades[22].description="每一个第二行原子级声望升级会解锁一个在原子级声望层级下的挑战。";
layers.ap.upgrades[23].description="基于你的原子级声望点数，里程碑成本快速增加的效果变得更慢。";
layers.ap.upgrades[24].description="原子级声望升级23的效果变得更好。";
layers.ap.upgrades[31].description="第二个第三级声望可重复购买项的效果变为原来的1.5次方。";
layers.ap.upgrades[32].description="基于你的原子级声望点数，第一个里程碑的软上限开始的更迟。";
layers.ap.upgrades[33].description=layers.ap.upgrades[34].description="原子级声望升级23和32的效果变得更好。";
layers.ap.upgrades[23].effectDisplay=function(){return format(this.effect(),4)+"x";}

layers.ap.challenges[11].name="无声望加成挑战";
layers.ap.challenges[12].name="无超级声望挑战";
layers.ap.challenges[21].name="无自加成挑战";
layers.ap.challenges[22].name="点数减少挑战";
layers.ap.challenges[31].name="无声望挑战";
layers.ap.challenges[11].challengeDescription=function(){
	return "你不能获得声望加成。<br>已完成"+format(challengeCompletions(this.layer, this.id),4) +"次"
}
layers.ap.challenges[12].challengeDescription=function(){
	return "你不能获得超级声望点数。<br>已完成"+format(challengeCompletions(this.layer, this.id),4) +"次"
}
layers.ap.challenges[21].challengeDescription=function(){
	return "第三个里程碑的效果始终为1。<br>已完成"+format(challengeCompletions(this.layer, this.id),4) +"次"
}
layers.ap.challenges[22].challengeDescription=function(){
	if(player.m.points.gte(122))return "第一个里程碑的效果被替换为其常用对数的(里程碑数量)次方。<br>已完成"+format(challengeCompletions(this.layer, this.id),4) +"次"
	return "第一个里程碑的效果被替换为其常用对数的100次方。<br>已完成"+format(challengeCompletions(this.layer, this.id),4) +"次"
}
layers.ap.challenges[31].challengeDescription=function(){
	return "你不能获得声望点数。<br>已完成"+format(challengeCompletions(this.layer, this.id),4) +"次"
}
layers.ap.challenges[11].currencyDisplayName="点数";
layers.ap.challenges[12].currencyDisplayName="点数";
layers.ap.challenges[21].currencyDisplayName="点数";
layers.ap.challenges[22].currencyDisplayName="点数";
layers.ap.challenges[31].currencyDisplayName="点数";
layers.ap.challenges[11].rewardDescription=layers.ap.challenges[31].rewardDescription="声望加成的效果变得更好。";
layers.ap.challenges[12].rewardDescription="超级声望点数的获得变得更好。";
layers.ap.challenges[12].rewardDisplay=function(){ return "基础超级声望点数变为原来的"+format(this.rewardEffect())+"次方。" },
layers.ap.challenges[21].rewardDescription=layers.ap.challenges[22].rewardDescription="第三个里程碑的效果变得更好。";

layers.t.resource="超越点数";
layers.t.effectDescription="";
layers.t.baseResource="原子级声望点数";
layers.t.resetDescription="重置以获得";

for(i in layers.t.upgrades){
	if(i=="rows"||i=="cols")continue;
	layers.t.upgrades[i].title="超越升级"+i;
}
layers.t.upgrades[11].description=layers.t.upgrades[23].description=layers.t.upgrades[31].description="第三个里程碑的效果变为原来的1.005次方。";
layers.t.upgrades[12].description=layers.t.upgrades[32].description="声望点数的获得变为原来的1.005次方。";
layers.t.upgrades[13].description=layers.t.upgrades[33].description="超级声望点数的获得变为原来的1.005次方。";
layers.t.upgrades[14].description=layers.t.upgrades[34].description="第三级声望点数的获得变为原来的1.005次方。";
layers.t.upgrades[21].description="声望升级31和超级声望升级31的效果变得更好。";
layers.t.upgrades[22].description="原子级声望点数的获得变为原来的1.01次方。";
layers.t.upgrades[24].description="使声望加成变得更便宜。";
layers.t.upgrades[41].description=function(){return "使超级加成的价格除以"+format("1e60000")};
layers.t.upgrades[42].description="获得一个额外的超级加成。";
layers.t.upgrades[43].description="超级加成的效果变得更好。";
layers.t.upgrades[44].description="解锁4个新的原子级声望升级。";
layers.t.upgrades[51].description="第一个第三级声望可重复购买项的效果变为原来的2.1次方。";
layers.t.upgrades[52].description="基于你的超越点数，里程碑成本快速增加开始的更迟。";
layers.t.upgrades[53].description="减小第一个里程碑软上限的效力。";
layers.t.upgrades[54].description="基于你的超越点数，第一个里程碑的软上限开始得更迟。";

layers.t.challenges[11].name="点数膨胀挑战";
layers.t.challenges[12].name="软上限挑战";
layers.t.challenges[21].name="声望膨胀挑战";
layers.t.challenges[22].name="硬上限挑战";
layers.t.challenges[11].challengeDescription=function(){
	return "第一个里程碑的效果变为原来的"+format(tmp.t.dilationEffect)+"次方。<br>已完成"+challengeCompletions(this.layer, this.id) +"/5次"
}
layers.t.challenges[12].challengeDescription=function(){
	return "第一个里程碑的软上限开始得更早。<br>已完成"+challengeCompletions(this.layer, this.id) +"/5次"
}
layers.t.challenges[21].challengeDescription=function(){
	return "在“点数膨胀挑战”的基础上，声望点数的获得变为原来的"+format(tmp.t.dilationEffect)+"次方。<br>已完成"+challengeCompletions(this.layer, this.id) +"/4次"
}
layers.t.challenges[22].challengeDescription=function(){
	return "在“软上限挑战”的基础上，第一个里程碑的软上限变为硬上限。<br>已完成"+challengeCompletions(this.layer, this.id) +"/3次"
}
layers.t.challenges[11].currencyDisplayName="原子级挑战完成数";
layers.t.challenges[12].currencyDisplayName="原子级挑战完成数";
layers.t.challenges[21].currencyDisplayName="原子级挑战完成数";
layers.t.challenges[22].currencyDisplayName="原子级挑战完成数";
layers.t.challenges[11].rewardDescription=layers.t.challenges[21].rewardDescription="第三个里程碑的效果变得更好。";
layers.t.challenges[12].rewardDescription=function(){ 
	if(player.m.points.lt(112))return "第一个里程碑的软上限开始得更迟。当你在这个挑战里面时这个奖励无效。";
	else return "第一个里程碑的软上限开始得更迟。";
}
layers.t.challenges[22].rewardDescription="第一个里程碑的软上限开始得更迟。";
layers.t.tabFormat[3][1]=function(){
	return "超越点数的硬上限为"+format(2e10);
}

layers.hb.resource="超级加成";
layers.hb.effectDescription=function(){
	return "第三级声望点数和声望加成的效果变为原来的"+format(layers.hb.effect(),4)+"次方。";
};
layers.hb.baseResource="第三级声望点数";
layers.hb.resetDescription="重置以获得";

for(i in layers.hb.upgrades){
	if(i=="rows"||i=="cols")continue;
	layers.hb.upgrades[i].title="超级加成升级"+i;
}
layers.hb.upgrades[11].description="超级加成影响第一个里程碑的软上限。";
layers.hb.upgrades[12].description="重置获得的超级加成提供额外的声望加成。";
layers.hb.upgrades[13].description=layers.hb.upgrades[14].description="超级加成的效果变得更好。";

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
	
    'Start': '开始',
    'Exit Early': '提前退出',
    'Completed': '已完成',
    'Finish': '完成挑战',
	
	
	'Hotkeys': '热键',
	'M: Get Milestone': 'M：获得里程碑',
	'P: Reset for prestige points': 'P：重置以获得声望点数',
	'S: Reset for super-prestige points': 'S：重置以获得超级声望点数',
	'Shift+M: Get Meta-Milestone': 'Shift+M：获得元里程碑',
	'B: Reset for prestige boosts': 'B：重置以获得声望加成',
	'H: Reset for hyper-prestige points': 'H：重置以获得第三级声望点数',
	'A: Reset for atomic-prestige points': 'A：重置以获得原子级声望点数',
	'T: Reset for transcend points': 'T：重置以获得超越点数',
	'Shift+B: Reset for hyper boosts': 'Shift+B：重置以获得超级加成',
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
	[/Req:(.+)\/ Infinity(.+)/, '需要：$1/ 无限$2'],
	[/Req:(.+)/, '需要：$1'],
	[/Next at Infinity(.+)/, '下一个需要 无限$1'],
	[/Next at(.+)/, '下一个需要$1'],
	[/(.+)\/ Infinity(.+)/, '$1/ 无限$2'],
	[/You are gaining(.+)per second/, '你正在获得$1每秒'],
	[/\((.+)\/sec\)/, '($1/秒)'],
	[/Cost: Infinity(.+)/, '花费：无限$1'],
	[/Cost:(.+)/, '花费：$1'],
	[/Currently:(.+)/, '当前：$1'],
	[/Reward:(.+)/, '奖励：$1'],
	[/Goal:(.+)/, '目标：$1'],
]);