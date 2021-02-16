addLayer("m", {
    name: "milestone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#793784",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "milestones", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
	base: new Decimal(1.5),
	exponent: function(){
		var base=new Decimal(2);
		var firstScaling=player.m.points.sub(14).max(0);
		if(firstScaling.gte(11)){
			firstScaling=Decimal.pow(1.03,firstScaling.sub(11)).sub(1).mul(100).add(11);
		}
		firstScaling=firstScaling.div(100);
		if(hasUpgrade("p",31))firstScaling=firstScaling.div(upgradeEffect("p",31));
		if(hasUpgrade("sp",31))firstScaling=firstScaling.div(upgradeEffect("sp",31));
		return new Decimal(2).add(firstScaling);
	},
    hotkeys: [
        {key: "m", description: "M: Get Milestone", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	resetsNothing(){return true},
	autoPrestige(){return player.mm.points.gte(1)},
	milestones: [
		{
			requirementDescription: "1st Milestone",
            unlocked() {return player[this.layer].best.gte(0)},
            done() {return player[this.layer].best.gte(1)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Gain +"+format(new Decimal(1).max(getPointGen()))+" points per second."
			},
        },
		{
			requirementDescription: "2nd Milestone",
            unlocked() {return player[this.layer].best.gte(1)},
            done() {return player[this.layer].best.gte(2)}, // Used to determine when to give the milestone
            effectDescription: "Triple the first Milestone's effect."
        },
		{
			requirementDescription: "3rd Milestone",
            unlocked() {return player[this.layer].best.gte(2)},
            done() {return player[this.layer].best.gte(3)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First Milestone's effect is boosted by your points. Currently: x"+format(tmp.m.milestone3Effect);
			},
        },
		{
			requirementDescription: "4th Milestone",
            unlocked() {return player[this.layer].best.gte(3)},
            done() {return player[this.layer].best.gte(4)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Third Milestone's effect is better based on your milestones.";
			},
        },
		{
			requirementDescription: "5th Milestone",
            unlocked() {return player[this.layer].best.gte(4)},
            done() {return player[this.layer].best.gte(5)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock the next layer. Milestones doesn't reset on all resets.";
			},
        },
		{
			requirementDescription: "6th Milestone",
            unlocked() {return player[this.layer].best.gte(5)},
            done() {return player[this.layer].best.gte(6)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Point gain is boosted by your milestones. Currently: x"+format(tmp.m.milestone6Effect);
			},
        },
		{
			requirementDescription: "7th Milestone",
            unlocked() {return player[this.layer].best.gte(6)},
            done() {return player[this.layer].best.gte(7)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect is powered by 1.5";
			},
        },
		{
			requirementDescription: "8th Milestone",
            unlocked() {return player[this.layer].best.gte(7)},
            done() {return player[this.layer].best.gte(8)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect is powered by 1.2";
			},
        },
		{
			requirementDescription: "9th Milestone",
            unlocked() {return player[this.layer].best.gte(8)},
            done() {return player[this.layer].best.gte(9)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect is powered by 1.1";
			},
        },
		{
			requirementDescription: "10th Milestone",
            unlocked() {return player[this.layer].best.gte(9)},
            done() {return player[this.layer].best.gte(10)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock 2 new Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "11th Milestone",
            unlocked() {return player[this.layer].best.gte(10)},
            done() {return player[this.layer].best.gte(11)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Upgrade 11's effect is better.";
			},
        },
		{
			requirementDescription: "12th Milestone",
            unlocked() {return player[this.layer].best.gte(11)},
            done() {return player[this.layer].best.gte(12)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Upgrade 12's effect is better.";
			},
        },
		{
			requirementDescription: "13th Milestone",
            unlocked() {return player[this.layer].best.gte(12)},
            done() {return player[this.layer].best.gte(13)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Upgrade 13's effect is better.";
			},
        },
		{
			requirementDescription: "14th Milestone",
            unlocked() {return player[this.layer].best.gte(13)},
            done() {return player[this.layer].best.gte(14)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Upgrade 14's effect is better.";
			},
        },
		{
			requirementDescription: "15th Milestone",
            unlocked() {return player[this.layer].best.gte(14)},
            done() {return player[this.layer].best.gte(15)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock 2 new Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "16th Milestone",
            unlocked() {return player[this.layer].best.gte(15)},
            done() {return player[this.layer].best.gte(16)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's effect ^1.016";
			},
        },
		{
			requirementDescription: "17th Milestone",
            unlocked() {return player[this.layer].best.gte(16)},
            done() {return player[this.layer].best.gte(17)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's effect ^1.017";
			},
        },
		{
			requirementDescription: "18th Milestone",
            unlocked() {return player[this.layer].best.gte(17)},
            done() {return player[this.layer].best.gte(18)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's effect ^1.018";
			},
        },
		{
			requirementDescription: "19th Milestone",
            unlocked() {return player[this.layer].best.gte(18)},
            done() {return player[this.layer].best.gte(19)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's effect ^1.019";
			},
        },
		{
			requirementDescription: "20th Milestone",
            unlocked() {return player[this.layer].best.gte(19)},
            done() {return player[this.layer].best.gte(20)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain 10000% of Prestige Point gain per second.";
			},
        },
		{
			requirementDescription: "21st Milestone",
            unlocked() {return player[this.layer].best.gte(20)},
            done() {return player[this.layer].best.gte(21)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock 2 new Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "22nd Milestone",
            unlocked() {return player[this.layer].best.gte(21)},
            done() {return player[this.layer].best.gte(22)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Point Gain is multiplied by 22";
			},
        },
		{
			requirementDescription: "23rd Milestone",
            unlocked() {return player[this.layer].best.gte(22)},
            done() {return player[this.layer].best.gte(23)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Upgrade 23's effect is better.";
			},
        },
		{
			requirementDescription: "24th Milestone",
            unlocked() {return player[this.layer].best.gte(23)},
            done() {return player[this.layer].best.gte(24)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Upgrade 24's effect is better.";
			},
        },
		{
			requirementDescription: "25th Milestone",
            unlocked() {return player[this.layer].best.gte(24)},
            done() {return player[this.layer].best.gte(25)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer.";
			},
        },
		{
			requirementDescription: "26th Milestone",
            unlocked() {return player[this.layer].best.gte(25)},
            done() {return player[this.layer].best.gte(26)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Prestige upgrades on Super-Prestige.";
			},
        },
		{
			requirementDescription: "27th Milestone",
            unlocked() {return player[this.layer].best.gte(26)},
            done() {return player[this.layer].best.gte(27)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Super-Prestige Point gain is boosted by your milestones. Currently: x"+format(tmp.m.milestone27Effect);
			},
        },
		{
			requirementDescription: "28th Milestone",
            unlocked() {return player[this.layer].best.gte(27)},
            done() {return player[this.layer].best.gte(28)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect is powered by 1.5";
			},
        },
		{
			requirementDescription: "29th Milestone",
            unlocked() {return player[this.layer].best.gte(28)},
            done() {return player[this.layer].best.gte(29)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect is powered by 1.2";
			},
        },
		{
			requirementDescription: "30th Milestone",
            unlocked() {return player[this.layer].best.gte(29)},
            done() {return player[this.layer].best.gte(30)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock 2 new Super-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "31st Milestone",
            unlocked() {return player[this.layer].best.gte(30)},
            done() {return player[this.layer].best.gte(31)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige and Super-Prestige Upgrade 11's effect is better.";
			},
        },
		{
			requirementDescription: "32nd Milestone",
            unlocked() {return player[this.layer].best.gte(31)},
            done() {return player[this.layer].best.gte(32)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige and Super-Prestige Upgrade 12's effect is better.";
			},
        },
		{
			requirementDescription: "33rd Milestone",
            unlocked() {return player[this.layer].best.gte(32)},
            done() {return player[this.layer].best.gte(33)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige and Super-Prestige Upgrade 13's effect is better.";
			},
        },
		{
			requirementDescription: "34th Milestone",
            unlocked() {return player[this.layer].best.gte(33)},
            done() {return player[this.layer].best.gte(34)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige and Super-Prestige Upgrade 14's effect is better.";
			},
        },
		{
			requirementDescription: "35th Milestone",
            unlocked() {return player[this.layer].best.gte(34)},
            done() {return player[this.layer].best.gte(35)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock 2 new Super-Prestige Upgrades, 6th Milestone's effect ^3.5.";
			},
        },
		{
			requirementDescription: "36th Milestone",
            unlocked() {return player[this.layer].best.gte(35)},
            done() {return player[this.layer].best.gte(36)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's effect ^1.036";
			},
        },
		{
			requirementDescription: "37th Milestone",
            unlocked() {return player[this.layer].best.gte(36)},
            done() {return player[this.layer].best.gte(37)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's effect ^1.037";
			},
        },
		{
			requirementDescription: "38th Milestone",
            unlocked() {return player[this.layer].best.gte(37)},
            done() {return player[this.layer].best.gte(38)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's effect ^1.038";
			},
        },
		{
			requirementDescription: "39th Milestone",
            unlocked() {return player[this.layer].best.gte(38)},
            done() {return player[this.layer].best.gte(39)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's effect ^1.039";
			},
        },
		{
			requirementDescription: "40th Milestone",
            unlocked() {return player[this.layer].best.gte(39)},
            done() {return player[this.layer].best.gte(40)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer. Unlock 2 new Super-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "41st Milestone",
            unlocked() {return player[this.layer].best.gte(40)},
            done() {return player[this.layer].best.gte(41)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.003";
			},
        },
		{
			requirementDescription: "42nd Milestone",
            unlocked() {return player[this.layer].best.gte(41)},
            done() {return player[this.layer].best.gte(42)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(1+(meta-milestones)).";
			},
        },
		{
			requirementDescription: "43rd Milestone",
            unlocked() {return player[this.layer].best.gte(42)},
            done() {return player[this.layer].best.gte(43)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "44th Milestone",
            unlocked() {return player[this.layer].best.gte(43)},
            done() {return player[this.layer].best.gte(44)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "45th Milestone",
            unlocked() {return player[this.layer].best.gte(44)},
            done() {return player[this.layer].best.gte(45)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new row of Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "46th Milestone",
            unlocked() {return player[this.layer].best.gte(45)},
            done() {return player[this.layer].best.gte(46)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.001";
			},
        },
		{
			requirementDescription: "47th Milestone",
            unlocked() {return player[this.layer].best.gte(46)},
            done() {return player[this.layer].best.gte(47)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect ^(1+(meta-milestones^0.25)).";
			},
        },
		{
			requirementDescription: "48th Milestone",
            unlocked() {return player[this.layer].best.gte(47)},
            done() {return player[this.layer].best.gte(48)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "49th Milestone",
            unlocked() {return player[this.layer].best.gte(48)},
            done() {return player[this.layer].best.gte(49)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Super-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "50th Milestone",
            unlocked() {return player[this.layer].best.gte(49)},
            done() {return player[this.layer].best.gte(50)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer.";
			},
        },
		{
			requirementDescription: "51st Milestone",
            unlocked() {return player[this.layer].best.gte(50)},
            done() {return player[this.layer].best.gte(51)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.00175";
			},
        },
		{
			requirementDescription: "52nd Milestone",
            unlocked() {return player[this.layer].best.gte(51)},
            done() {return player[this.layer].best.gte(52)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(1+(meta-milestones^0.1)).";
			},
        },
		{
			requirementDescription: "53rd Milestone",
            unlocked() {return player[this.layer].best.gte(52)},
            done() {return player[this.layer].best.gte(53)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "54th Milestone",
            unlocked() {return player[this.layer].best.gte(53)},
            done() {return player[this.layer].best.gte(54)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "55th Milestone",
            unlocked() {return player[this.layer].best.gte(54)},
            done() {return player[this.layer].best.gte(55)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new row of Super-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "56th Milestone",
            unlocked() {return player[this.layer].best.gte(55)},
            done() {return player[this.layer].best.gte(56)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.00078";
			},
        },
		{
			requirementDescription: "57th Milestone",
            unlocked() {return player[this.layer].best.gte(56)},
            done() {return player[this.layer].best.gte(57)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain 100% of Super-Prestige Point gain per second.";
			},
        },
		{
			requirementDescription: "58th Milestone",
            unlocked() {return player[this.layer].best.gte(57)},
            done() {return player[this.layer].best.gte(58)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "59th Milestone",
            unlocked() {return player[this.layer].best.gte(58)},
            done() {return player[this.layer].best.gte(59)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Super-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "60th Milestone",
            unlocked() {return player[this.layer].best.gte(59)},
            done() {return player[this.layer].best.gte(60)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer.";
			},
        },
		{
			requirementDescription: "61st Milestone",
            unlocked() {return player[this.layer].best.gte(60)},
            done() {return player[this.layer].best.gte(61)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005";
			},
        },
		{
			requirementDescription: "62nd Milestone",
            unlocked() {return player[this.layer].best.gte(61)},
            done() {return player[this.layer].best.gte(62)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(meta-milestones^0.129).";
			},
        },
		{
			requirementDescription: "63rd Milestone",
            unlocked() {return player[this.layer].best.gte(62)},
            done() {return player[this.layer].best.gte(63)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "64th Milestone",
            unlocked() {return player[this.layer].best.gte(63)},
            done() {return player[this.layer].best.gte(64)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "65th Milestone",
            unlocked() {return player[this.layer].best.gte(64)},
            done() {return player[this.layer].best.gte(65)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Boost doesn't reset anything. Unlock 2 new Hyper-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "66th Milestone",
            unlocked() {return player[this.layer].best.gte(65)},
            done() {return player[this.layer].best.gte(66)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005";
			},
        },
		{
			requirementDescription: "67th Milestone",
            unlocked() {return player[this.layer].best.gte(66)},
            done() {return player[this.layer].best.gte(67)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect ^(meta-milestones^0.147).";
			},
        },
		{
			requirementDescription: "68th Milestone",
            unlocked() {return player[this.layer].best.gte(67)},
            done() {return player[this.layer].best.gte(68)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "69th Milestone lol",
            unlocked() {return player[this.layer].best.gte(68)},
            done() {return player[this.layer].best.gte(69)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Current Endgame lol";
			},
        },
	],
	effectDescription: " some of them have a special effect!",
	milestone3Effect(){
		var m=Decimal.log10(player.points.add(20)).pow(0.9);
		if(player.m.best.gte(41))m=m.pow(1.003);
		if(player.m.best.gte(46))m=m.pow(1.001);
		if(player.m.best.gte(51))m=m.pow(1.00175);
		if(player.m.best.gte(56))m=m.pow(1.00078);
		if(player.m.best.gte(61))m=m.pow(1.0005);
		if(player.m.best.gte(66))m=m.pow(1.0005);
		var b=new Decimal(2).plus(player.m.best.sub(2).max(1).pow(player.m.best.gte(68)?0.61:player.m.best.gte(63)?0.5875:player.m.best.gte(58)?0.57:player.m.best.gte(53)?0.5687:player.m.best.gte(48)?0.55:player.m.best.gte(43)?0.533:0.5));
		if(player.m.best.gte(16))m=m.mul(1.016);
		if(player.m.best.gte(17))m=m.mul(1.017);
		if(player.m.best.gte(18))m=m.mul(1.018);
		if(player.m.best.gte(19))m=m.mul(1.019);
		if(player.m.best.gte(36))m=m.mul(1.036);
		if(player.m.best.gte(37))m=m.mul(1.037);
		if(player.m.best.gte(38))m=m.mul(1.038);
		if(player.m.best.gte(39))m=m.mul(1.039);
		if(hasUpgrade("p",23)){
			b=b.mul(player.p.points.add(1e20).log10().log10().div(player.m.best.gte(23)?28:30).add(1));
		}
		if(hasUpgrade("p",24)){
			b=b.mul(player.p.points.add(1e20).log10().log10().div(player.m.best.gte(24)?20:30).add(1));
		}
		if(hasUpgrade("sp",24)){
			b=b.mul(player.sp.points.add(1e20).log10().log10().div(30).add(1));
		}
		if(player.mm.best.gte(5)){
			b=b.mul(player.mm.points.sub(2).max(1).pow(0.5).div(75).add(1));
		}
		if(player.mm.best.gte(10)){
			b=b.mul(player.mm.points.sub(2).max(1).pow(0.5).div(100).add(1));
		}
		return Decimal.pow(b,m);
	},
	milestone6Effect(){
		var p=player.m.best;
		if(player.m.best.gte(7))p=p.pow(1.5);
		if(player.m.best.gte(8))p=p.pow(1.2);
		if(player.m.best.gte(9))p=p.pow(1.1);
		if(hasUpgrade("p",21))p=p.pow(1.5);
		if(hasUpgrade("p",22))p=p.pow(1.5);
		if(player.m.best.gte(35))p=p.pow(3.5);
		if(hasUpgrade("sp",23))p=p.pow(player.mm.points.add(2));
		if(player.m.best.gte(42))p=p.pow(player.mm.points.add(1));
		if(player.m.best.gte(52))p=p.pow(player.mm.points.pow(0.1).add(1));
		if(player.mm.best.gte(9))p=p.pow(1.5);
		if(player.m.best.gte(62))p=p.pow(player.mm.points.pow(0.129));
		return p;
	},
	milestone27Effect(){
		var p=player.m.best;
		if(player.m.best.gte(28))p=p.pow(1.5);
		if(player.m.best.gte(29))p=p.pow(1.2);
		if(hasUpgrade("sp",23))p=p.pow(player.mm.points.add(2));
		if(player.mm.best.gte(2))p=p.pow(2);
		if(player.mm.best.gte(3))p=p.pow(2);
		if(player.mm.best.gte(4))p=p.pow(2);
		if(player.m.best.gte(47))p=p.pow(player.mm.points.pow(0.25).add(1));
		if(player.mm.best.gte(6))p=p.pow(1.5);
		if(player.mm.best.gte(7))p=p.pow(1.5);
		if(player.mm.best.gte(8))p=p.pow(1.5);
		if(player.mm.best.gte(11))p=p.pow(1.2);
		if(player.mm.best.gte(12))p=p.pow(1.2);
		if(player.m.best.gte(67))p=p.pow(player.mm.points.pow(0.147));
		return p;
	},
    resetDescription: "Get ",
	doReset(){},
})

addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#658091",
    requires: new Decimal(10000), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if(player.m.points.gte(6))mult=mult.mul(tmp.m.milestone6Effect);
		if(hasUpgrade("p",13))mult=mult.mul(upgradeEffect("p",13));
		if(hasUpgrade("p",14))mult=mult.mul(upgradeEffect("p",14));
		if(player.m.points.gte(22))mult=mult.mul(22);
		if(hasUpgrade("sp",13))mult=mult.mul(upgradeEffect("sp",13));
		if(hasUpgrade("sp",14))mult=mult.mul(upgradeEffect("sp",14));
		if(hasUpgrade("hp",13))mult=mult.mul(upgradeEffect("hp",13));
		if(hasUpgrade("hp",14))mult=mult.mul(upgradeEffect("hp",14));
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return layers.pb.effect()
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
	exponent: 0.5,
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(5)},
	upgrades: {
        rows: 3,
        cols: 4,
		11: {
			title: "Prestige Upgrade 11",
            description: "First Milestone's effect is boosted by your prestige points.",
            cost: new Decimal(1),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=3;
				if(player.m.points.gte(11))base+=0.5;
				if(player.m.points.gte(31))base+=0.5;
				if(player.m.points.gte(44))base+=0.2;
				if(player.m.points.gte(54))base+=0.3;
				if(player.m.points.gte(64))base+=0.1;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		12: {
			title: "Prestige Upgrade 12",
            description: "First Milestone's effect is boosted by your prestige points.",
            cost: new Decimal(4),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=2;
				if(player.m.points.gte(12))base+=0.4;
				if(player.m.points.gte(32))base+=0.2;
				if(player.m.points.gte(44))base+=0.2;
				if(player.m.points.gte(54))base+=0.2;
				if(player.m.points.gte(64))base+=0.1;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		13: {
			title: "Prestige Upgrade 13",
            description: "Prestige Point gain is boosted by your prestige points.",
            cost: new Decimal(100000000),
            unlocked() { return player.m.points.gte(10)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.4;
				if(player.m.points.gte(13))base+=0.1;
				if(player.m.points.gte(33))base+=0.05;
				if(player.m.points.gte(44))base+=0.05;
				if(player.m.points.gte(54))base+=0.1;
				if(player.m.points.gte(64))base+=0.05;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		14: {
			title: "Prestige Upgrade 14",
            description: "Prestige Point gain is boosted by your prestige points.",
            cost: new Decimal(1e11),
            unlocked() { return player.m.points.gte(10)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.2;
				if(player.m.points.gte(14))base+=0.05;
				if(player.m.points.gte(34))base+=0.1;
				if(player.m.points.gte(44))base+=0.05;
				if(player.m.points.gte(54))base+=0.1;
				if(player.m.points.gte(64))base+=0.05;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		21: {
			title: "Prestige Upgrade 21",
            description: "6th Milestone's effect ^1.5",
            cost: new Decimal(1e25),
            unlocked() { return player.m.points.gte(15)}, // The upgrade is only visible when this is true
        },
		22: {
			title: "Prestige Upgrade 22",
            description: "6th Milestone's effect ^1.5",
            cost: new Decimal(1e33),
            unlocked() { return player.m.points.gte(15)}, // The upgrade is only visible when this is true
        },
		23: {
			title: "Prestige Upgrade 23",
            description: "Third Milestone's effect is boosted by your prestige points.",
            cost: new Decimal(1e63),
            unlocked() { return player.m.points.gte(21)}, // The upgrade is only visible when this is true
        },
		24: {
			title: "Prestige Upgrade 24",
            description: "Third Milestone's effect is boosted by your prestige points.",
            cost: new Decimal(1e80),
            unlocked() { return player.m.points.gte(21)}, // The upgrade is only visible when this is true
        },
		31: {
			title: "Prestige Upgrade 31",
            description: "First Milestone Cost Scaling is weaker based on your prestige points.",
            cost: new Decimal("1e6810"),
			effect(){
				let p=player.p.points.add(1e20).log10().log10().div(77);
				if(hasUpgrade("p",32))p=p.mul(2);
				if(hasUpgrade("p",33))p=p.mul(1.5);
				if(hasUpgrade("p",34))p=p.mul(1.2);
				return p.add(1);
			},
            unlocked() { return player.m.points.gte(45)}, // The upgrade is only visible when this is true
            effectDisplay() { return format(this.effect(),4)+"x weaker" }, // Add formatting to the effect
        },
		32: {
			title: "Prestige Upgrade 32",
            description: "Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e8740"),
            unlocked() { return player.m.points.gte(45)}, // The upgrade is only visible when this is true
        },
		33: {
			title: "Prestige Upgrade 33",
            description: "Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e10927"),
            unlocked() { return player.m.points.gte(45)}, // The upgrade is only visible when this is true
        },
		34: {
			title: "Prestige Upgrade 34",
            description: "Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e16335"),
            unlocked() { return player.m.points.gte(45)}, // The upgrade is only visible when this is true
        },
	},
	branches: ["m"],
	passiveGeneration(){
		if(player.m.points.gte(20))return 100;
		return 0;
	},
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
		doReset(l){
			if(l=="p"){return;}
			if(l=="sp")if(player.m.points.gte(26))layerDataReset("p",["upgrades"]);else layerDataReset("p",[]);
			if(l=="pb")if(player.m.points.gte(999))layerDataReset("p",["upgrades"]);else layerDataReset("p",[]);
			if(l=="hp")if(player.m.points.gte(999))layerDataReset("p",["upgrades"]);else layerDataReset("p",[]);
		},
})

addLayer("sp", {
    name: "super-prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#65A0B0",
    requires: new Decimal(1e98), // Can be a function that takes requirement increases into account
    resource: "super-prestige points", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if(player.m.points.gte(27))mult=mult.mul(tmp.m.milestone27Effect);
		if(hasUpgrade("sp",21))mult=mult.mul(upgradeEffect("sp",21));
		if(hasUpgrade("sp",22))mult=mult.mul(upgradeEffect("sp",22));
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
	exponent: 0.1,
    hotkeys: [
        {key: "s", description: "S: Reset for super-prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(25)},
	upgrades: {
        rows: 3,
        cols: 4,
		11: {
			title: "Super-Prestige Upgrade 11",
            description: "First Milestone's effect is boosted by your super-prestige points.",
            cost: new Decimal(1),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=50;
				if(player.m.points.gte(31))base+=5;
				if(player.m.points.gte(49))base+=5;
				if(player.m.points.gte(59))base+=5;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		12: {
			title: "Super-Prestige Upgrade 12",
            description: "First Milestone's effect is boosted by your super-prestige points.",
            cost: new Decimal(4),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=10;
				if(player.m.points.gte(32))base+=1;
				if(player.m.points.gte(49))base+=1;
				if(player.m.points.gte(59))base+=2;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		13: {
			title: "Super-Prestige Upgrade 13",
            description: "Prestige Point gain is boosted by your super-prestige points.",
            cost: new Decimal(1e15),
            unlocked() { return player.m.points.gte(30)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=3;
				if(player.m.points.gte(33))base+=0.5;
				if(player.m.points.gte(49))base+=0.5;
				if(player.m.points.gte(59))base+=0.92;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		14: {
			title: "Super-Prestige Upgrade 14",
            description: "Prestige Point gain is boosted by your super-prestige points.",
            cost: new Decimal(1e37),
            unlocked() { return player.m.points.gte(30)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.5;
				if(player.m.points.gte(34))base+=0.5;
				if(player.m.points.gte(49))base+=0.5;
				if(player.m.points.gte(59))base+=0.5;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		21: {
			title: "Super-Prestige Upgrade 21",
            description: "Super-Prestige Point gain is boosted by your super-prestige points.",
            cost: new Decimal(1e63),
            unlocked() { return player.m.points.gte(35)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.3;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		22: {
			title: "Super-Prestige Upgrade 22",
            description: "Super-Prestige Point gain is boosted by your super-prestige points.",
            cost: new Decimal(1e110),
            unlocked() { return player.m.points.gte(35)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.1;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		23: {
			title: "Super-Prestige Upgrade 23",
            description: "6th and 27th Milestone's effect ^(2+(meta-milestones))",
            cost: new Decimal(1e185),
            unlocked() { return player.m.points.gte(40)}, // The upgrade is only visible when this is true、
        },
		24: {
			title: "Super-Prestige Upgrade 24",
            description: "Third Milestone's effect is boosted by your super-prestige points.",
            cost: new Decimal(1e227),
            unlocked() { return player.m.points.gte(40)}, // The upgrade is only visible when this is true、
        },
		31: {
			title: "Super-Prestige Upgrade 31",
            description: "First Milestone Cost Scaling is weaker based on your super-prestige points.",
            cost: new Decimal("1e6864"),
			effect(){
				let p=player.sp.points.add(1e20).log10().log10().div(65);
				if(hasUpgrade("sp",32))p=p.mul(2);
				if(hasUpgrade("sp",33))p=p.mul(1.5);
				if(hasUpgrade("sp",34))p=p.mul(1.2);
				return p.add(1);
			},
            unlocked() { return player.m.points.gte(55)}, // The upgrade is only visible when this is true
            effectDisplay() { return format(this.effect(),4)+"x weaker" }, // Add formatting to the effect
        },
		32: {
			title: "Super-Prestige Upgrade 32",
            description: "Super-Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e9617"),
            unlocked() { return player.m.points.gte(55)}, // The upgrade is only visible when this is true
        },
		33: {
			title: "Super-Prestige Upgrade 33",
            description: "Super-Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e13713"),
            unlocked() { return player.m.points.gte(55)}, // The upgrade is only visible when this is true
        },
		34: {
			title: "Super-Prestige Upgrade 34",
            description: "Super-Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e13843"),
            unlocked() { return player.m.points.gte(55)}, // The upgrade is only visible when this is true
        },
	},
	branches: ["p"],
	passiveGeneration(){
		if(player.m.points.gte(57))return 1;
		return 0;
	},
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1)
})

addLayer("mm", {
    name: "meta-milestone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: -1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A057B0",
    requires: new Decimal(40), // Can be a function that takes requirement increases into account
    resource: "meta-milestones", // Name of prestige currency
    baseResource: "milestones", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
	base: new Decimal(1.047),
	exponent: function(){
		return new Decimal(1)
	},
    hotkeys: [
        {key: "M", description: "Shift+M: Get Meta-Milestone", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(40)},
	resetsNothing(){return true},
	autoPrestige(){return false},
	milestones: [
		{
			requirementDescription: "1st Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(0)},
            done() {return player[this.layer].best.gte(1)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Autoget Milestones."
			},
        },
		{
			requirementDescription: "2nd Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(1)},
            done() {return player[this.layer].best.gte(2)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^2"
			},
        },
		{
			requirementDescription: "3rd Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(2)},
            done() {return player[this.layer].best.gte(3)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^2"
			},
        },
		{
			requirementDescription: "4th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(3)},
            done() {return player[this.layer].best.gte(4)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^2"
			},
        },
		{
			requirementDescription: "5th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(4)},
            done() {return player[this.layer].best.gte(5)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Third Milestone's effect is better based on your meta-milestones.";
			},
        },
		{
			requirementDescription: "6th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(5)},
            done() {return player[this.layer].best.gte(6)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^1.5"
			},
        },
		{
			requirementDescription: "7th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(6)},
            done() {return player[this.layer].best.gte(7)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^1.5"
			},
        },
		{
			requirementDescription: "8th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(7)},
            done() {return player[this.layer].best.gte(8)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^1.5"
			},
        },
		{
			requirementDescription: "9th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(8)},
            done() {return player[this.layer].best.gte(9)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "6th Milestone's effect ^1.5"
			},
        },
		{
			requirementDescription: "10th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(9)},
            done() {return player[this.layer].best.gte(10)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Third Milestone's effect is better based on your meta-milestones."
			},
        },
		{
			requirementDescription: "11th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(10)},
            done() {return player[this.layer].best.gte(11)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^1.2"
			},
        },
		{
			requirementDescription: "12th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(11)},
            done() {return player[this.layer].best.gte(12)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^1.2"
			},
        },
	],
	effectDescription: " some of them have a special effect!",
    resetDescription: "Get ",
		doReset(l){
			if(l=="sp"){return;}
			if(l=="hp")if(player.m.points.gte(999))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
		},
	branches:["m"]
})

addLayer("pb", {
    name: "prestige boost", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "PB", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#70C0A0",
    requires: new Decimal("1e13760"), // Can be a function that takes requirement increases into account
    resource: "prestige boosts", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for prestige boosts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(50)},
	branches: ["p"],
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
	base: new Decimal("1e13630"),
	exponent: function(){
		let p=new Decimal(1.1311);
		if(player.pb.points.gte(15)){
			p=p.add(player.pb.points.sub(15).pow(2).div(2600));
		}
		return p;
	},
	effect(){
		let p=0.5;
		let m=0.05;
		if(hasUpgrade("pb",11)){
			p+=0.1;
			m+=0.011;
		}
		if(hasUpgrade("pb",12)){
			p+=0.05;
			m+=0.005;
		}
		if(hasUpgrade("pb",13)){
			p+=0.01;
			m+=0.00251;
		}
		if(hasUpgrade("pb",14)){
			p+=0.005;
			m+=0.001;
		}
		if(hasUpgrade("pb",21)){
			p+=0.005;
		}
		return new Decimal(1).add(player.pb.points.pow(p).mul(m));
	},
	effectDescription(){
		return "prestige points is powered by "+format(layers.pb.effect())
	},
	
	upgrades: {
        rows: 2,
        cols: 4,
		11: {
			title: "Prestige Boost Upgrade 11",
            description: "Prestige Boost's effect is better.",
            cost: new Decimal(3),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		12: {
			title: "Prestige Boost Upgrade 12",
            description: "Prestige Boost's effect is better.",
            cost: new Decimal(7),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		13: {
			title: "Prestige Boost Upgrade 13",
            description: "Prestige Boost's effect is better.",
            cost: new Decimal(11),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		14: {
			title: "Prestige Boost Upgrade 14",
            description: "Prestige Boost's effect is better.",
            cost: new Decimal(22),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		21: {
			title: "Prestige Boost Upgrade 21",
            description: "Prestige Boost's effect is better.",
            cost: new Decimal(31),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
	},
	
	resetsNothing(){return player.m.points.gte(65)},
})

addLayer("hp", {
    name: "hyper-prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "HP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#80C0D0",
    requires: new Decimal("1e13820"), // Can be a function that takes requirement increases into account
    resource: "hyper-prestige points", // Name of prestige currency
    baseResource: "super-prestige points", // Name of resource prestige is based on
    baseAmount() {return player.sp.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
	exponent: 0.001,
    hotkeys: [
        {key: "h", description: "H: Reset for hyper-prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(60)},
	branches: ["sp"],
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
	
	upgrades: {
        rows: 1,
		cols: 4,
		11: {
			title: "Hyper-Prestige Upgrade 11",
            description: "First Milestone's effect is boosted by your hyper-prestige points.",
            cost: new Decimal(1),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1e20;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		12: {
			title: "Hyper-Prestige Upgrade 12",
            description: "First Milestone's effect is boosted by your hyper-prestige points.",
            cost: new Decimal(4),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1e10;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		13: {
			title: "Hyper-Prestige Upgrade 13",
            description: "Prestige Point gain is boosted by your hyper-prestige points.",
            cost: new Decimal(3e38),
            unlocked() { return player.m.points.gte(65)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1e15;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret.mul("1e450");
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		14: {
			title: "Hyper-Prestige Upgrade 14",
            description: "Prestige Point gain is boosted by your hyper-prestige points.",
            cost: new Decimal(1e93),
            unlocked() { return player.m.points.gte(65)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1e12;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
	}
})
