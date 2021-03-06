addLayer("m", {
    name: "milestone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#793784",
    requires(){
		//if(player.m.points.gte(99))return new Decimal(Infinity);
		return new Decimal(10);
	},
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
		var firstScaling=player.m.points.sub(tmp.m.getScalingStart).max(0);
		if(tmp.m.getScalingStart.lte(25)){
			if(firstScaling.gte(Decimal.sub(25,tmp.m.getScalingStart))){
				firstScaling=Decimal.pow(1.03,firstScaling.sub(Decimal.sub(25,tmp.m.getScalingStart))).sub(1).mul(100).add(Decimal.sub(25,tmp.m.getScalingStart));
			}
			firstScaling=firstScaling.div(100);
		}else{
			firstScaling=Decimal.pow(1.03,firstScaling).sub(1);
		}
		if(hasUpgrade("p",31))firstScaling=firstScaling.div(upgradeEffect("p",31));
		if(hasUpgrade("sp",31))firstScaling=firstScaling.div(upgradeEffect("sp",31));
		if(hasUpgrade("hp",23))firstScaling=firstScaling.div(upgradeEffect("hp",23));
		if(hasUpgrade("ap",23))firstScaling=firstScaling.div(upgradeEffect("ap",23));
		return new Decimal(2).add(firstScaling);
	},
    getScalingStart(){
        let start=new Decimal(14);
		if(hasUpgrade("t",52))start=start.add(upgradeEffect("t",52));
		return start;
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
				return "Unlock a new layer. Keep Prestige upgrades on Prestige Boost.";
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
				return "Prestige Boost doesn't reset anything. Keep Prestige and Super-Prestige upgrades on Hyper-Prestige. Unlock 2 new Hyper-Prestige Upgrades.";
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
				return "First row of Super-Prestige and Hyper-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "70th Milestone",
            unlocked() {return player[this.layer].best.gte(69)},
            done() {return player[this.layer].best.gte(70)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Prestige Boost upgrades on Hyper-Prestige. Unlock a new row of Hyper-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "71st Milestone",
            unlocked() {return player[this.layer].best.gte(70)},
            done() {return player[this.layer].best.gte(71)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.001236";
			},
        },
		{
			requirementDescription: "72nd Milestone",
            unlocked() {return player[this.layer].best.gte(71)},
            done() {return player[this.layer].best.gte(72)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(meta-milestones^0.1).";
			},
        },
		{
			requirementDescription: "73rd Milestone",
            unlocked() {return player[this.layer].best.gte(72)},
            done() {return player[this.layer].best.gte(73)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "74th Milestone",
            unlocked() {return player[this.layer].best.gte(73)},
            done() {return player[this.layer].best.gte(74)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "75th Milestone",
            unlocked() {return player[this.layer].best.gte(74)},
            done() {return player[this.layer].best.gte(75)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain 10000% of Hyper-Prestige Point gain per second.";
			},
        },
		{
			requirementDescription: "76th Milestone",
            unlocked() {return player[this.layer].best.gte(75)},
            done() {return player[this.layer].best.gte(76)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.00157";
			},
        },
		{
			requirementDescription: "77th Milestone",
            unlocked() {return player[this.layer].best.gte(76)},
            done() {return player[this.layer].best.gte(77)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a Super-Prestige buyable.";
			},
        },
		{
			requirementDescription: "78th Milestone",
            unlocked() {return player[this.layer].best.gte(77)},
            done() {return player[this.layer].best.gte(78)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "79th Milestone",
            unlocked() {return player[this.layer].best.gte(78)},
            done() {return player[this.layer].best.gte(79)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Super-Prestige and Hyper-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "80th Milestone",
            unlocked() {return player[this.layer].best.gte(79)},
            done() {return player[this.layer].best.gte(80)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer. Autoget Prestige Boosts.";
			},
        },
		{
			requirementDescription: "81st Milestone",
            unlocked() {return player[this.layer].best.gte(80)},
            done() {return player[this.layer].best.gte(81)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005. You keep Prestige, Super-Prestige and Prestige Boost Upgrades on Atomic-Prestige.";
			},
        },
		{
			requirementDescription: "82nd Milestone",
            unlocked() {return player[this.layer].best.gte(81)},
            done() {return player[this.layer].best.gte(82)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(meta-milestones^0.2). You keep Hyper-Prestige Upgrades on Atomic-Prestige.";
			},
        },
		{
			requirementDescription: "83rd Milestone",
            unlocked() {return player[this.layer].best.gte(82)},
            done() {return player[this.layer].best.gte(83)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted. Autobuy the first Super-Prestige buyable.";
			},
        },
		{
			requirementDescription: "84th Milestone",
            unlocked() {return player[this.layer].best.gte(83)},
            done() {return player[this.layer].best.gte(84)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige and Atomic-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "85th Milestone",
            unlocked() {return player[this.layer].best.gte(84)},
            done() {return player[this.layer].best.gte(85)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a Hyper-Prestige buyable. Unlock a new row of Hyper-Prestige upgrades.";
			},
        },
		{
			requirementDescription: "86th Milestone",
            unlocked() {return player[this.layer].best.gte(85)},
            done() {return player[this.layer].best.gte(86)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005.";
			},
        },
		{
			requirementDescription: "87th Milestone",
            unlocked() {return player[this.layer].best.gte(86)},
            done() {return player[this.layer].best.gte(87)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect ^(meta-milestones^0.3).";
			},
        },
		{
			requirementDescription: "88th Milestone",
            unlocked() {return player[this.layer].best.gte(87)},
            done() {return player[this.layer].best.gte(88)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "89th Milestone",
            unlocked() {return player[this.layer].best.gte(88)},
            done() {return player[this.layer].best.gte(89)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Super-Prestige and Hyper-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "90th Milestone",
            unlocked() {return player[this.layer].best.gte(89)},
            done() {return player[this.layer].best.gte(90)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain 500% of Atomic-Prestige Point gain per second.";
			},
        },
		{
			requirementDescription: "91st Milestone",
            unlocked() {return player[this.layer].best.gte(90)},
            done() {return player[this.layer].best.gte(91)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005.";
			},
        },
		{
			requirementDescription: "92nd Milestone",
            unlocked() {return player[this.layer].best.gte(91)},
            done() {return player[this.layer].best.gte(92)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(meta-milestones^0.3).";
			},
        },
		{
			requirementDescription: "93rd Milestone",
            unlocked() {return player[this.layer].best.gte(92)},
            done() {return player[this.layer].best.gte(93)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "94th Milestone",
            unlocked() {return player[this.layer].best.gte(93)},
            done() {return player[this.layer].best.gte(94)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige and Atomic-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "95th Milestone",
            unlocked() {return player[this.layer].best.gte(94)},
            done() {return player[this.layer].best.gte(95)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock an Atomic-Prestige Challenge. Autobuy the first Hyper-Prestige buyable.";
			},
        },
		{
			requirementDescription: "96th Milestone",
            unlocked() {return player[this.layer].best.gte(95)},
            done() {return player[this.layer].best.gte(96)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005.";
			},
        },
		{
			requirementDescription: "97th Milestone",
            unlocked() {return player[this.layer].best.gte(96)},
            done() {return player[this.layer].best.gte(97)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect ^(meta-milestones^0.4).";
			},
        },
		{
			requirementDescription: "98th Milestone",
            unlocked() {return player[this.layer].best.gte(97)},
            done() {return player[this.layer].best.gte(98)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "99th Milestone",
            unlocked() {return player[this.layer].best.gte(98)},
            done() {return player[this.layer].best.gte(99)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer.";
			},
        },
		{
			requirementDescription: "100th Milestone",
            unlocked() {return player[this.layer].best.gte(99)},
            done() {return player[this.layer].best.gte(100)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Prestige and Super-Prestige upgrades on Transcend";
			},
        },
		{
			requirementDescription: "101st Milestone",
            unlocked() {return player[this.layer].best.gte(100)},
            done() {return player[this.layer].best.gte(101)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Hyper-Prestige and Prestige Boost upgrades on Transcend";
			},
        },
		{
			requirementDescription: "102nd Milestone",
            unlocked() {return player[this.layer].best.gte(101)},
            done() {return player[this.layer].best.gte(102)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Atomic-Prestige upgrades on Transcend";
			},
        },
		{
			requirementDescription: "103rd Milestone",
            unlocked() {return player[this.layer].best.gte(102)},
            done() {return player[this.layer].best.gte(103)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Autocomplete AP challenge 1-5 3 times on Transcend. This milestone is disabled when you're in a Transcend challenge.";
			},
        },
		{
			requirementDescription: "104th Milestone",
            unlocked() {return player[this.layer].best.gte(103)},
            done() {return player[this.layer].best.gte(104)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted. Unlock a new layer. Unlock 4 new Transcend upgrades.";
			},
        },
		{
			requirementDescription: "105th Milestone",
            unlocked() {return player[this.layer].best.gte(104)},
            done() {return player[this.layer].best.gte(105)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "1st milestone's softcap starts later based on your milestones. Unlock a Hyper-Prestige buyable. Unlock a Transcend challenge.";
			},
        },
		{
			requirementDescription: "106th Milestone",
            unlocked() {return player[this.layer].best.gte(105)},
            done() {return player[this.layer].best.gte(106)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th and 27th milestone's effect ^(meta-milestones^0.5).";
			},
        },
		{
			requirementDescription: "107th Milestone",
            unlocked() {return player[this.layer].best.gte(106)},
            done() {return player[this.layer].best.gte(107)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.002. Autobuy the second Hyper-Prestige buyable.";
			},
        },
		{
			requirementDescription: "108th Milestone",
            unlocked() {return player[this.layer].best.gte(107)},
            done() {return player[this.layer].best.gte(108)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Autocomplete AP challenge 1-5 6 times on Transcend. This milestone is disabled when you're in a Transcend challenge.";
			},
        },
		{
			requirementDescription: "109th Milestone",
            unlocked() {return player[this.layer].best.gte(108)},
            done() {return player[this.layer].best.gte(109)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted. Unlock a Transcend challenge.";
			},
        },
		{
			requirementDescription: "110th Milestone",
            unlocked() {return player[this.layer].best.gte(109)},
            done() {return player[this.layer].best.gte(110)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Transcend challenge 1's base goal is decreased to x^2. You can complete an AP challenge without exiting it.";
			},
        },
		{
			requirementDescription: "111th Milestone",
            unlocked() {return player[this.layer].best.gte(110)},
            done() {return player[this.layer].best.gte(111)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Hyper Boost doesn't reset anything. Prestige boost is cheaper, and Unlock a new row of Prestige Boost upgrades. Unlock a new row of Transcend upgrades.";
			},
        },
		{
			requirementDescription: "112th Milestone",
            unlocked() {return player[this.layer].best.gte(111)},
            done() {return player[this.layer].best.gte(112)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Transcend Challenge 2's reward is enabled while you're in Transcend Challenge 2.";
			},
        },
		{
			requirementDescription: "113th Milestone",
            unlocked() {return player[this.layer].best.gte(112)},
            done() {return player[this.layer].best.gte(113)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th and 27th milestone's effect ^(meta-milestones^0.3).";
			},
        },
		{
			requirementDescription: "114th Milestone",
            unlocked() {return player[this.layer].best.gte(113)},
            done() {return player[this.layer].best.gte(114)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Autocomplete AP challenge 1-5 9 times on Transcend. This milestone is disabled when you're in a Transcend challenge.";
			},
        },
		{
			requirementDescription: "115th Milestone",
            unlocked() {return player[this.layer].best.gte(114)},
            done() {return player[this.layer].best.gte(115)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain 0.5% of Transcend Point gain per second. Unlock a Transcend challenge.";
			},
        },
		{
			requirementDescription: "116th Milestone",
            unlocked() {return player[this.layer].best.gte(115)},
            done() {return player[this.layer].best.gte(116)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain additional 1.5% of Transcend Point gain per second (total 2%). Autoget Hyper Boosts.";
			},
        },
		{
			requirementDescription: "117th Milestone",
            unlocked() {return player[this.layer].best.gte(116)},
            done() {return player[this.layer].best.gte(117)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain additional 3% of Transcend Point gain per second (total 5%). Prestige boost is cheaper.";
			},
        },
		{
			requirementDescription: "118th Milestone",
            unlocked() {return player[this.layer].best.gte(117)},
            done() {return player[this.layer].best.gte(118)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain additional 5% of Transcend Point gain per second (total 10%). 4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "119th Milestone",
            unlocked() {return player[this.layer].best.gte(118)},
            done() {return player[this.layer].best.gte(119)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Gain additional 10% of Transcend Point gain per second (total 20%). Hyper boost is cheaper.";
			},
        },
		{
			requirementDescription: "120th Milestone",
            unlocked() {return player[this.layer].best.gte(119)},
            done() {return player[this.layer].best.gte(120)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Current Endgame";
			},
        },
	],
	milestone3Effect(){
		if(player.ap.activeChallenge==21)return new Decimal(1);
		var m=Decimal.log10(player.points.add(20)).pow(0.9);
		if(player.m.best.gte(41))m=m.pow(1.003);
		if(player.m.best.gte(46))m=m.pow(1.001);
		if(player.m.best.gte(51))m=m.pow(1.00175);
		if(player.m.best.gte(56))m=m.pow(1.00078);
		if(player.m.best.gte(61))m=m.pow(1.0005);
		if(player.m.best.gte(66))m=m.pow(1.0005);
		if(player.m.best.gte(71))m=m.pow(1.001236);
		if(player.m.best.gte(76))m=m.pow(1.00157);
		if(player.m.best.gte(81))m=m.pow(1.0005);
		if(player.m.best.gte(86))m=m.pow(1.0005);
		if(player.m.best.gte(91))m=m.pow(1.0005);
		if(player.m.best.gte(96))m=m.pow(1.0005);
		if(player.m.best.gte(107))m=m.pow(1.002);//0.91298476860857272607902105461039
		var b=new Decimal(2).plus(player.m.best.sub(2).max(1).pow(player.m.best.gte(118)?0.8:player.m.best.gte(109)?0.76:player.m.best.gte(104)?0.75:player.m.best.gte(98)?0.72:player.m.best.gte(93)?0.7:player.m.best.gte(88)?0.67:player.m.best.gte(83)?0.66:player.m.best.gte(78)?0.6426:player.m.best.gte(73)?0.62:player.m.best.gte(68)?0.61:player.m.best.gte(63)?0.5875:player.m.best.gte(58)?0.57:player.m.best.gte(53)?0.5687:player.m.best.gte(48)?0.55:player.m.best.gte(43)?0.533:0.5));
		if(player.m.best.gte(16))m=m.mul(1.016);
		if(player.m.best.gte(17))m=m.mul(1.017);
		if(player.m.best.gte(18))m=m.mul(1.018);
		if(player.m.best.gte(19))m=m.mul(1.019);
		if(player.m.best.gte(36))m=m.mul(1.036);
		if(player.m.best.gte(37))m=m.mul(1.037);
		if(player.m.best.gte(38))m=m.mul(1.038);
		if(player.m.best.gte(39))m=m.mul(1.039);
		if(hasUpgrade("t",11))m=m.mul(1.005);
		if(hasUpgrade("t",23))m=m.mul(1.005);
		if(hasUpgrade("t",31))m=m.mul(1.005);
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
		if(player.mm.best.gte(15)){
			b=b.mul(player.mm.points.sub(2).max(1).pow(0.5).div(125).add(1));
		}
		if(player.mm.best.gte(20)){
			b=b.mul(player.mm.points.sub(2).max(1).pow(0.5).div(150).add(1));
		}
		b=b.mul(Decimal.pow(1.05,player.ap.challenges[21]+player.ap.challenges[22]+player.t.challenges[11]+player.t.challenges[21]));
		if(player.ap.challenges[21]>=1)b=b.mul(1.1/1.05);
		if(player.ap.challenges[22]>=1)b=b.mul(1.06/1.05);
		if(player.ap.challenges[21]>=5)b=b.mul(1.1/1.05);
		if(player.t.challenges[11]>=3)b=b.mul(1.05);
		if(player.ap.challenges[21]>=10)b=b.mul(1.1);
		if(player.ap.challenges[22]>=9)b=b.mul(1.1);
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
		if(player.mm.best.gte(13))p=p.pow(1.2);
		if(player.m.best.gte(72))p=p.pow(player.mm.points.pow(0.1));
		if(player.mm.best.gte(14))p=p.pow(1.2);
		if(player.m.best.gte(82))p=p.pow(player.mm.points.pow(0.2));
		if(player.mm.best.gte(17))p=p.pow(1.7);
		if(player.m.best.gte(92))p=p.pow(player.mm.points.pow(0.3));
		if(player.m.best.gte(106))p=p.pow(player.mm.points.pow(0.5));
		if(player.m.best.gte(113))p=p.pow(player.mm.points.pow(0.3));
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
		if(player.mm.best.gte(16))p=p.pow(1.2);
		if(player.m.best.gte(87))p=p.pow(player.mm.points.pow(0.3));
		if(player.mm.best.gte(18))p=p.pow(1.8);
		if(player.mm.best.gte(19))p=p.pow(1.9);
		if(player.m.best.gte(97))p=p.pow(player.mm.points.pow(0.4));
		if(player.m.best.gte(106))p=p.pow(player.mm.points.pow(0.5));
		if(player.m.best.gte(113))p=p.pow(player.mm.points.pow(0.3));
		return p;
	},
    resetDescription: "Get ",
	doReset(){},
	tabFormat: ["main-display","prestige-button","resource-display",
				["display-text",function(){return "Milestone cost scaling starts at "+format(tmp.m.getScalingStart,4)}],
				["display-text",function(){return "Milestone cost exponent is "+format(tmp.m.exponent,4)}],
				"milestones"
				],
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
    requires(){
		if(player.ap.activeChallenge==31)return new Decimal(Infinity);
		return new Decimal(10000);
	},
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
		if(hasUpgrade("ap",12))mult=mult.mul(upgradeEffect("ap",12));
		mult=mult.mul(tmp.sp.buyables[11].effect);
		mult=mult.mul(tmp.hp.buyables[11].effect);
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
		let m=layers.pb.effect();
		if(hasUpgrade("t",12))m=m.mul(1.005);
		if(hasUpgrade("t",32))m=m.mul(1.005);
		if(player.t.activeChallenge==21)m=m.mul(0.45);
		return m;
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
				if(player.m.points.gte(74))base+=0.244;
				if(player.m.points.gte(84))base+=0.156;
				if(player.m.points.gte(94))base+=0.1;
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
				if(player.m.points.gte(74))base+=0.1;
				if(player.m.points.gte(84))base+=0.1;
				if(player.m.points.gte(94))base+=0.1;
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
				if(player.m.points.gte(74))base+=0.1;
				if(player.m.points.gte(84))base+=0.05;
				if(player.m.points.gte(94))base+=0.05;
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
				if(player.m.points.gte(74))base+=0.1;
				if(player.m.points.gte(84))base+=0.05;
				if(player.m.points.gte(94))base+=0.05;
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
            description: "Milestone Cost Scaling is weaker based on your prestige points.",
            cost: new Decimal("1e6810"),
			effect(){
				let p=player.p.points.add(1e20).log10().log10().div(77);
				if(hasUpgrade("p",32))p=p.mul(2);
				if(hasUpgrade("p",33))p=p.mul(1.5);
				if(hasUpgrade("p",34))p=p.mul(1.2);
				if(hasUpgrade("t",21))p=p.mul(1.1);
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
			if(l=="pb")if(player.m.points.gte(60))layerDataReset("p",["upgrades"]);else layerDataReset("p",[]);
			if(l=="hp")if(player.m.points.gte(65))layerDataReset("p",["upgrades"]);else layerDataReset("p",[]);
			if(l=="ap")if(player.m.points.gte(81))layerDataReset("p",["upgrades"]);else layerDataReset("p",[]);
			if(l=="t")if(player.m.points.gte(100))layerDataReset("p",["upgrades"]);else layerDataReset("p",[]);
			if(l=="hb")if(player.m.points.gte(104))layerDataReset("p",["upgrades"]);else layerDataReset("p",[]);
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
    requires(){
		if(player.ap.activeChallenge==12)return new Decimal(Infinity);
		return new Decimal(1e98);
	}, // Can be a function that takes requirement increases into account
    resource: "super-prestige points", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if(player.m.points.gte(27))mult=mult.mul(tmp.m.milestone27Effect);
		if(hasUpgrade("sp",21))mult=mult.mul(upgradeEffect("sp",21));
		if(hasUpgrade("sp",22))mult=mult.mul(upgradeEffect("sp",22));
		if(hasUpgrade("hp",21))mult=mult.mul(upgradeEffect("hp",21));
		if(hasUpgrade("hp",22))mult=mult.mul(upgradeEffect("hp",22));
		if(hasUpgrade("ap",13))mult=mult.mul(upgradeEffect("ap",13));
		mult=mult.mul(tmp.hp.buyables[12].effect);
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        mult = new Decimal(1)
		if(player.m.points.gte(27))mult=mult.mul(tmp.ap.challenges[12].rewardEffect);
		if(hasUpgrade("t",13))mult=mult.mul(1.005);
		if(hasUpgrade("t",33))mult=mult.mul(1.005);
        return mult
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
				if(player.m.points.gte(69))base+=5;
				if(player.m.points.gte(79))base+=10;
				if(player.m.points.gte(89))base+=5;
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
				if(player.m.points.gte(69))base+=1;
				if(player.m.points.gte(79))base+=2;
				if(player.m.points.gte(89))base+=1;
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
				if(player.m.points.gte(69))base+=0.58;
				if(player.m.points.gte(79))base+=1;
				if(player.m.points.gte(89))base+=0.5;
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
				if(player.m.points.gte(69))base+=0.5;
				if(player.m.points.gte(79))base+=0.766;
				if(player.m.points.gte(89))base+=0.234;
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
            description: "Milestone Cost Scaling is weaker based on your super-prestige points.",
            cost: new Decimal("1e6864"),
			effect(){
				let p=player.sp.points.add(1e20).log10().log10().div(65);
				if(hasUpgrade("sp",32))p=p.mul(2);
				if(hasUpgrade("sp",33))p=p.mul(1.5);
				if(hasUpgrade("sp",34))p=p.mul(1.2);
				if(hasUpgrade("t",21))p=p.mul(1.1);
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
            cost: new Decimal("1e13839"),
            unlocked() { return player.m.points.gte(55)}, // The upgrade is only visible when this is true
        },
	},
	buyables: {
		rows: 1,
		cols: 1,
		11:{
			title(){
				return "Prestige Multiplier";
			},
			display(){
				let data = tmp[this.layer].buyables[this.id];
				return "Level: "+format(player[this.layer].buyables[this.id])+"<br>"+
				"Prestige Point is multiplied by "+format(data.effect)+"<br>"+
				"Cost for Next Level: "+format(data.cost)+" Super-Prestige points";
			},
			cost(){
				let a=player[this.layer].buyables[this.id];
				if(a.gte(3))a=a.div(3).pow(1.309).mul(3);
				return new Decimal("1e652955").mul(Decimal.pow("1e12345",a));
			},
			canAfford() {
                   return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)
			},
               buy() { 
                   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
               },
			  effect(){
				  let eff=new Decimal("1e10000").pow(player[this.layer].buyables[this.id]);
				  if(hasUpgrade("hp",31))eff=eff.pow(1.05);
				  return eff;
			  },
			  unlocked(){
				  return player.m.points.gte(77);
			  }
		},
	},
	branches: ["p"],
	passiveGeneration(){
		if(player.m.points.gte(57))return 1;
		return 0;
	},
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
		doReset(l){
			if(l=="sp"){return;}
			if(l=="hp")if(player.m.points.gte(65))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
			if(l=="ap")if(player.m.points.gte(81))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
			if(l=="t")if(player.m.points.gte(100))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
			if(l=="hb")if(player.m.points.gte(104))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
		},
	update(){
		if(player.m.points.gte(83)){
			var target=player.sp.points.add(1).div("1e652955").log("1e12345");
			if(target.gte(3))target=target.div(3).pow(1/1.309).mul(3);
			target=target.add(1).floor();
			if(target.gt(player.sp.buyables[11])){
				player.sp.buyables[11]=target;
			}
		}
	}
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
    requires(){
		//if(player.mm.points.gte(20))return new Decimal(Infinity);
		return new Decimal(40);
	}, // Can be a function that takes requirement increases into account
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
		{
			requirementDescription: "13th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(12)},
            done() {return player[this.layer].best.gte(13)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "6th Milestone's effect ^1.2"
			},
        },
		{
			requirementDescription: "14th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(13)},
            done() {return player[this.layer].best.gte(14)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "6th Milestone's effect ^1.2"
			},
        },
		{
			requirementDescription: "15th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(14)},
            done() {return player[this.layer].best.gte(15)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Third Milestone's effect is better based on your meta-milestones."
			},
        },
		{
			requirementDescription: "16th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(15)},
            done() {return player[this.layer].best.gte(16)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^1.2"
			},
        },
		{
			requirementDescription: "17th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(16)},
            done() {return player[this.layer].best.gte(17)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "6th Milestone's effect ^1.7"
			},
        },
		{
			requirementDescription: "18th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(17)},
            done() {return player[this.layer].best.gte(18)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^1.8"
			},
        },
		{
			requirementDescription: "19th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(18)},
            done() {return player[this.layer].best.gte(19)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "27th Milestone's effect ^1.9"
			},
        },
		{
			requirementDescription: "20th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(19)},
            done() {return player[this.layer].best.gte(20)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Third Milestone's effect is better based on your meta-milestones."
			},
        },
		{
			requirementDescription: "21st Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(20)},
            done() {return player[this.layer].best.gte(21)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Transcend Point gain is doubled"
			},
        },
		{
			requirementDescription: "22nd Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(21)},
            done() {return player[this.layer].best.gte(22)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Transcend Point gain is doubled"
			},
        },
		{
			requirementDescription: "23rd Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(22)},
            done() {return player[this.layer].best.gte(23)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Transcend Point gain is doubled"
			},
        },
		{
			requirementDescription: "24th Meta-Milestone",
            unlocked() {return player[this.layer].best.gte(23)},
            done() {return player[this.layer].best.gte(24)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Transcend Point gain is doubled"
			},
        },
	],
    resetDescription: "Get ",
	branches:["m"],
	doReset(){},
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
    requires(){
		if(player.ap.activeChallenge==11)return new Decimal(Infinity);
		return new Decimal("1e13760");
	}, // Can be a function that takes requirement increases into account
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
	exponent: function(x){
		if(x===undefined)x=player.pb.points;
		let p=new Decimal(1.1311);
		if(x.gte(15)){
			let scaling=x.sub(15).pow(2).div(2600);
			if(hasUpgrade("t",24))scaling=scaling.div(1.1);
			if(player.m.points.gte(111))scaling=scaling.div(1.048);
			if(player.m.points.gte(117))scaling=scaling.div(1.02);
			p=p.add(scaling);
		}
		return p;
	},
	effect(){
		let p=0.5;
		let m=0.05;
		let e=new Decimal(0);
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
		if(hasUpgrade("pb",22)){
			m+=0.00275;
		}
		if(hasUpgrade("pb",23)){
			p+=0.01;
			m+=0.001004;
		}
		if(hasUpgrade("pb",24)){
			m+=0.00201;
		}
		if(player.ap.challenges[11]>=1){
			p+=0.01;
		}
		if(player.ap.challenges[11]>=2){
			m+=0.001;
		}
		if(player.ap.challenges[11]>=3){
			p+=0.01;
		}
		if(player.ap.challenges[11]>=4){
			m+=0.002*(player.ap.challenges[11]-3);
		}
		if(player.ap.challenges[31]>=1){
			m+=0.002*(player.ap.challenges[31]-0);
		}
		if(hasUpgrade("hb",12)){
			e=e.add(upgradeEffect("hb",12));
		}
		return new Decimal(1).add(player.pb.points.add(e).pow(p).mul(m)).pow(layers.hb.effect());
	},
	effectDescription(){
		return "prestige points is powered by "+format(layers.pb.effect(),4)
	},
	
	upgrades: {
        rows: 3,
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
		22: {
			title: "Prestige Boost Upgrade 22",
            description: "Prestige Boost's effect is better.",
            cost: new Decimal(34),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		23: {
			title: "Prestige Boost Upgrade 23",
            description: "Prestige Boost's effect is better.",
            cost: new Decimal(40),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		24: {
			title: "Prestige Boost Upgrade 24",
            description: "Prestige Boost's effect is better.",
            cost: new Decimal(48),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		31: {
			title: "Prestige Boost Upgrade 31",
            description: "Prestige Boost affects the 1st Milestone's softcap at a reduced rate.",
            cost: new Decimal(90),
            unlocked() { return player.m.points.gte(111)}, // The upgrade is only visible when this is true
			effect() {
				let e=0.1;
				if(hasUpgrade("pb",32))e+=0.1;
				if(hasUpgrade("pb",33))e+=0.1;
				if(hasUpgrade("pb",34))e+=0.1;
				let p=tmp.pb.effect.pow(e);
				return p;
            },
            effectDisplay() { return format(this.effect(),4)+"x later" },
        },
		32: {
			title: "Prestige Boost Upgrade 32",
            description: "Prestige Boost Upgrade 31 is boosted.",
            cost: new Decimal(92),
            unlocked() { return player.m.points.gte(111)}, // The upgrade is only visible when this is true
        },
		33: {
			title: "Prestige Boost Upgrade 33",
            description: "Prestige Boost Upgrade 31 is boosted.",
            cost: new Decimal(95),
            unlocked() { return player.m.points.gte(111)}, // The upgrade is only visible when this is true
        },
		34: {
			title: "Prestige Boost Upgrade 34",
            description: "Prestige Boost Upgrade 31 is boosted.",
            cost: new Decimal(98),
            unlocked() { return player.m.points.gte(111)}, // The upgrade is only visible when this is true
        },
	},
	
	resetsNothing(){return player.m.points.gte(65)},
		doReset(l){
			if(l=="pb"){return;}
			if(l=="hp")if(player.m.points.gte(70))layerDataReset("pb",["upgrades"]);else layerDataReset("pb",[]);
			if(l=="ap")if(player.m.points.gte(81))layerDataReset("pb",["upgrades"]);else layerDataReset("pb",[]);
			if(l=="t")if(player.m.points.gte(101))layerDataReset("pb",["upgrades"]);else layerDataReset("pb",[]);
			if(l=="hb")if(player.m.points.gte(104))layerDataReset("pb",["upgrades"]);else layerDataReset("pb",[]);
		},
	//autoPrestige(){return player.m.points.gte(80)},
	update(){
		if(player.m.points.gte(80)&&player.ap.activeChallenge!=11){//quick autobuy
			while(true){
				let req=layers.pb.requires().mul(layers.pb.base.pow(Decimal.pow(player.pb.points,layers.pb.exponent())));
				if(player.p.points.gt(req))player.pb.points=player.pb.points.add(1);
				else break;
			}
		}
	}
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
		if(hasUpgrade("hp",22))mult=mult.mul(upgradeEffect("hp",22));
		if(hasUpgrade("ap",14))mult=mult.mul(upgradeEffect("ap",14));
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        mult = layers.hb.effect()
		if(hasUpgrade("t",14))mult=mult.mul(1.005);
		if(hasUpgrade("t",34))mult=mult.mul(1.005);
        return mult
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
        rows: 3,
		cols: 4,
		11: {
			title: "Hyper-Prestige Upgrade 11",
            description: "First Milestone's effect is boosted by your hyper-prestige points.",
            cost: new Decimal(1),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1e20;
				if(player.m.points.gte(69))base+=1e30;
				if(player.m.points.gte(79))base+=1e45;
				if(player.m.points.gte(89))base+=1e60;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		12: {
			title: "Hyper-Prestige Upgrade 12",
            description: "First Milestone's effect is boosted by your hyper-prestige points.",
            cost: new Decimal(2),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1e10;
				if(player.m.points.gte(69))base+=3e20;
				if(player.m.points.gte(79))base+=1e35;
				if(player.m.points.gte(89))base+=1e50;
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
				if(player.m.points.gte(69))base+=1e20;
				if(player.m.points.gte(79))base+=1e30;
				if(player.m.points.gte(89))base+=1e40;
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
				if(player.m.points.gte(69))base+=1e15;
				if(player.m.points.gte(79))base+=1e25;
				if(player.m.points.gte(89))base+=1e30;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		21: {
			title: "Hyper-Prestige Upgrade 21",
            description: "Super-Prestige Point gain is boosted by your hyper-prestige points.",
            cost: new Decimal(1e160),
            unlocked() { return player.m.points.gte(70)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1e18;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret.mul("1e965");
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		22: {
			title: "Hyper-Prestige Upgrade 22",
            description: "Super-Prestige Point and Hyper-Prestige Point gain is boosted by your hyper-prestige points.",
            cost: new Decimal(1e173),
            unlocked() { return player.m.points.gte(70)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=3;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret.mul("1e91");
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		23: {
			title: "Hyper-Prestige Upgrade 23",
            description: "Milestone Cost Scaling is weaker based on your hyper-prestige points.",
            cost: new Decimal("1e496"),
            unlocked() { return player.m.points.gte(70)}, // The upgrade is only visible when this is true
			effect() {
				let p=player.hp.points.add(1e20).log10().log10().div(56.17);
				if(hasUpgrade("hp",24))p=p.mul(2);
				if(hasUpgrade("hp",33))p=p.mul(1.5);
				if(hasUpgrade("hp",34))p=p.mul(1.2);
				return p.add(1);
            },
            effectDisplay() { return format(this.effect(),4)+"x weaker" }, // Add formatting to the effect
        },
		24: {
			title: "Hyper-Prestige Upgrade 24",
            description: "Hyper-Prestige Upgrade 23 is boosted.",
            cost: new Decimal("1e751"),
            unlocked() { return player.m.points.gte(70)}, // The upgrade is only visible when this is true
        },
		31: {
			title: "Hyper-Prestige Upgrade 31",
            description: "The first Super-Prestige buyable's effect ^1.05",
            cost: new Decimal("1e11540"),
            unlocked() { return player.m.points.gte(85)}, // The upgrade is only visible when this is true
        },
		32: {
			title: "Hyper-Prestige Upgrade 32",
            description: "The first Hyper-Prestige buyable's effect ^1.1",
            cost: new Decimal("1e12800"),
            unlocked() { return player.m.points.gte(85)}, // The upgrade is only visible when this is true
        },
		33: {
			title: "Hyper-Prestige Upgrade 33",
            description: "Hyper-Prestige Upgrade 23 is boosted.",
            cost: new Decimal("1e20000"),
            unlocked() { return player.m.points.gte(85)}, // The upgrade is only visible when this is true
        },
		34: {
			title: "Hyper-Prestige Upgrade 34",
            description: "Hyper-Prestige Upgrade 23 is boosted.",
            cost: new Decimal("1e27000"),
            unlocked() { return player.m.points.gte(85)}, // The upgrade is only visible when this is true
        },
	},
	
	buyables: {
		rows: 1,
		cols: 2,
		11:{
			title(){
				return "Prestige Multiplier";
			},
			display(){
				let data = tmp[this.layer].buyables[this.id];
				return "Level: "+format(player[this.layer].buyables[this.id])+"<br>"+
				"Prestige Point is multiplied by "+format(data.effect)+"<br>"+
				"Cost for Next Level: "+format(data.cost)+" Hyper-Prestige points";
			},
			cost(){
				let a=player[this.layer].buyables[this.id];
				if(a.gte(3))a=a.div(3).pow(1.5).mul(3);
				return new Decimal("1e8150").mul(Decimal.pow("1e500",a));
			},
			canAfford() {
                   return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)
			},
               buy() { 
                   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
               },
			  effect(){
				  let eff=new Decimal("1e50000").pow(player[this.layer].buyables[this.id]);
				  if(hasUpgrade("hp",32))eff=eff.pow(1.1);
				  if(hasUpgrade("t",51))eff=eff.pow(2.1);
				  return eff;
			  },
			  unlocked(){
				  return player.m.points.gte(85);
			  }
		},
		12:{
			title(){
				return "Super-Multiplier";
			},
			display(){
				let data = tmp[this.layer].buyables[this.id];
				return "Level: "+format(player[this.layer].buyables[this.id])+"<br>"+
				"Super-Prestige Point is multiplied by "+format(data.effect)+"<br>"+
				"Cost for Next Level: "+format(data.cost)+" Hyper-Prestige points";
			},
			cost(){
				let a=player[this.layer].buyables[this.id];
				if(a.gte(3))a=a.div(3).pow(1.5).mul(3);
				return new Decimal("1e690000").mul(Decimal.pow("1e10000",a));
			},
			canAfford() {
                   return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)
			},
               buy() { 
                   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
               },
			  effect(){
				  let eff=new Decimal("1e1000000").pow(player[this.layer].buyables[this.id]);
				  if(hasUpgrade("ap",31))eff=eff.pow(1.5);
				  return eff;
			  },
			  unlocked(){
				  return player.m.points.gte(105);
			  }
		},
	},
	passiveGeneration(){
		if(player.m.points.gte(75))return 100;
		return 0;
	},
		doReset(l){
			if(l=="hp"){return;}
			if(l=="ap")if(player.m.points.gte(82))layerDataReset("hp",["upgrades"]);else layerDataReset("hp",[]);
			if(l=="t")if(player.m.points.gte(101))layerDataReset("hp",["upgrades"]);else layerDataReset("hp",[]);
			if(l=="hb")if(player.m.points.gte(104))layerDataReset("hp",["upgrades"]);else layerDataReset("hp",[]);
		},
	update(){
		if(player.m.points.gte(95)){
			var target=player.hp.points.add(1).div("1e8150").log("1e500");
			if(target.gte(3))target=target.div(3).pow(1/1.5).mul(3);
			target=target.add(1).floor();
			if(target.gt(player.hp.buyables[11])){
				player.hp.buyables[11]=target;
			}
		}
		if(player.m.points.gte(107)){
			var target=player.hp.points.add(1).div("1e690000").log("1e10000");
			if(target.gte(3))target=target.div(3).pow(1/1.5).mul(3);
			target=target.add(1).floor();
			if(target.gt(player.hp.buyables[12])){
				player.hp.buyables[12]=target;
			}
		}
	}
})

addLayer("ap", {
    name: "atomic-prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "AP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#A0E0E0",
    requires: new Decimal("1e1997"), // Can be a function that takes requirement increases into account
    resource: "atomic-prestige points", // Name of prestige currency
    baseResource: "hyper-prestige points", // Name of resource prestige is based on
    baseAmount() {return player.hp.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if(hasUpgrade("ap",21))mult=mult.mul(upgradeEffect("ap",21));
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        m = new Decimal(1)
		if(hasUpgrade("t",22))m=m.mul(1.01);
		return m;
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
	exponent: 0.005,
    hotkeys: [
        {key: "a", description: "A: Reset for atomic-prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(80)},
	branches: ["hp"],
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
	
	upgrades: {
        rows: 3,
		cols: 4,
		11: {
			title: "Atomic-Prestige Upgrade 11",
            description: "First Milestone's effect is boosted by your atomic-prestige points.",
            cost: new Decimal(1),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=new Decimal("1e2000");
				if(player.m.points.gte(84))base=base.mul("1e4000");
				if(player.m.points.gte(94))base=base.mul("1e4000");
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret.mul("1e48000").mul(Decimal.pow("1e500",player[this.layer].points.min(140)));
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		12: {
			title: "Atomic-Prestige Upgrade 12",
            description: "Prestige Point gain is boosted by your atomic-prestige points.",
            cost: new Decimal(4),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=new Decimal("1e1000");
				if(player.m.points.gte(84))base=base.mul("1e2000");
				if(player.m.points.gte(94))base=base.mul("1e2000");
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret.mul("1e39000").mul(Decimal.pow("1e150",player[this.layer].points.min(500)));
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		13: {
			title: "Atomic-Prestige Upgrade 13",
            description: "Super-Prestige Point gain is boosted by your atomic-prestige points.",
            cost: new Decimal(5000),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=new Decimal("1e5000");
				if(player.m.points.gte(84))base=base.mul("1e1000");
				if(player.m.points.gte(94))base=base.mul("1e1000");
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret.mul("1e20000").mul(Decimal.pow("1e30",player[this.layer].points.sqrt().min(2300)));
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		14: {
			title: "Atomic-Prestige Upgrade 14",
            description: "Hyper-Prestige Point gain is boosted by your atomic-prestige points.",
            cost: new Decimal(50000),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=new Decimal("1e15");
				if(player.m.points.gte(84))base=base.mul("1e10");
				if(player.m.points.gte(94))base=base.mul("1e10");
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
				return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		21: {
			title: "Atomic-Prestige Upgrade 21",
            description: "Atomic-Prestige Point gain is boosted by your atomic-prestige points.",
            cost: new Decimal(200000),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.4;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
				return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		22: {
			title: "Atomic-Prestige Upgrade 22",
            description: "Each upgrade in this row unlocks an Atomic-Prestige challenge.",
            cost: new Decimal(2e9),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		23: {
			title: "Atomic-Prestige Upgrade 23",
            description: "Milestone Cost Scaling is weaker based on your atomic-prestige points.",
            cost: new Decimal(3e18),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() {
				let p=player.ap.points.add(1e20).log10().log10().div(200);
				if(hasUpgrade("ap",24))p=p.mul(4);
				if(hasUpgrade("ap",33))p=p.mul(2);
				if(hasUpgrade("ap",34))p=p.mul(1.2);
				return p.add(1);
            },
            effectDisplay() { return format(this.effect(),4)+"x weaker" }, // Add formatting to the effect
        },
		24: {
			title: "Atomic-Prestige Upgrade 24",
            description: "Atomic-Prestige Upgrade 23 is boosted.",
            cost: new Decimal(2e35),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		31: {
			title: "Atomic-Prestige Upgrade 31",
            description: "The Second Hyper-Prestige buyable's effect ^1.5.",
            cost: new Decimal("1e5470"),
            unlocked() { return hasUpgrade("t",44);}, // The upgrade is only visible when this is true
        },
		32: {
			title: "Atomic-Prestige Upgrade 32",
            description: "1st Milestone's softcap starts later based on your atomic-prestige points.",
            cost: new Decimal("1e5613"),
            unlocked() { return hasUpgrade("t",44);}, // The upgrade is only visible when this is true
			effect() {
				let p=player.ap.points.add(1e20).log10().log10().div(57);
				if(hasUpgrade("ap",33))p=p.mul(2);
				if(hasUpgrade("ap",34))p=p.mul(1.2);
				return p.add(1);
            },
            effectDisplay() { return format(this.effect(),4)+"x later" },
        },
		33: {
			title: "Atomic-Prestige Upgrade 33",
            description: "Atomic-Prestige Upgrade 23 and 32 are boosted.",
            cost: new Decimal("3e6045"),
            unlocked() { return hasUpgrade("t",44);}, // The upgrade is only visible when this is true
        },
		34: {
			title: "Atomic-Prestige Upgrade 34",
            description: "Atomic-Prestige Upgrade 23 and 32 are boosted.",
            cost: new Decimal("3e6951"),
            unlocked() { return hasUpgrade("t",44);}, // The upgrade is only visible when this is true
        },
	},
	
	challenges: {
        rows: 3,
		cols: 2,
		11:{
                name: "No Prestige Boost",
                completionLimit: 15,
			    challengeDescription() {return "You can't gain prestige boosts.<br>"+challengeCompletions(this.layer, this.id) +"/15 completions"},
                unlocked() { return hasUpgrade("ap",22) && hasUpgrade("ap",21) },
                goal: function(){
					if(player.ap.challenges[11]>=5)return new Decimal("1e46730000").pow(Decimal.pow(1.3,Decimal.pow(player.ap.challenges[11]-5,1.5)));
					return [new Decimal("1e1960000"),new Decimal("1e3550000"),new Decimal("1e4950000"),new Decimal("1e8150000"),new Decimal("e21640000")][player.ap.challenges[11]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
                rewardDescription() { return "Prestige Boost's effect is better." },
		},
		12:{
                name: "No Super-Prestige",
                completionLimit: 15,
			    challengeDescription() {return "You can't gain super-prestige points.<br>"+challengeCompletions(this.layer, this.id) +"/15 completions"},
                unlocked() { return hasUpgrade("ap",22) && hasUpgrade("ap",22) },
                goal: function(){
					if(player.ap.challenges[12]>=5)return new Decimal("1e60560000").pow(Decimal.pow(1.3,Decimal.pow(player.ap.challenges[12]-5,1.5)));
					return [new Decimal("1e2300000"),new Decimal("1e4870000"),new Decimal("1e7000000"),new Decimal("e12500000"),new Decimal("e28880000")][player.ap.challenges[12]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
				rewardEffect() {
                    let ret = 1+player.ap.challenges[12]*0.05;
					if(player.ap.challenges[12]>=5)ret=1.2+player.ap.challenges[12]*0.01;
                    return ret;
                },
                rewardDisplay() { return "Super-Prestige points ^"+format(this.rewardEffect()) },
                rewardDescription() { return "Super-Prestige points is boosted based on this challenge's completions." },
		},
		21:{
                name: "No Self-Boost",
                completionLimit: 15,
			    challengeDescription() {return "3rd milestone's effect is always 1.<br>"+challengeCompletions(this.layer, this.id) +"/15 completions"},
                unlocked() { return hasUpgrade("ap",22) && hasUpgrade("ap",23) },
                goal: function(){
					if(player.ap.challenges[21]>=5)return new Decimal("1e57090000").pow(Decimal.pow(1.3,Decimal.pow(player.ap.challenges[21]-5,1.5)));
					return [new Decimal("1e1615000"),new Decimal("1e4130000"),new Decimal("1e7150000"),new Decimal("e18060000"),new Decimal("e34850000")][player.ap.challenges[21]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
                rewardDescription() { return "3rd milestone's effect is better." },
		},
		22:{
                name: "Reduced Points",
                completionLimit: 15,
			    challengeDescription() {return "1st milestone's effect is replaced by (log10(1st milestone's effect+1))^100<br>"+challengeCompletions(this.layer, this.id) +"/15 completions"},
                unlocked() { return hasUpgrade("ap",22) && hasUpgrade("ap",24) },
                goal: function(){
					if(player.ap.challenges[22]>=5)return new Decimal("1e740").pow(Decimal.pow(1.035,player.ap.challenges[22]-5));
					return [new Decimal("1e614"),new Decimal("1e627"),new Decimal("1e671"),new Decimal("1e713"),new Decimal("1e725")][player.ap.challenges[22]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
                rewardDescription() { return "3rd milestone's effect is better, again." },
		},
		31:{
                name: "No Prestige",
                completionLimit: 15,
			    challengeDescription() {return "You can't gain prestige points.<br>"+challengeCompletions(this.layer, this.id) +"/15 completions"},
                unlocked() { return player.m.points.gte(95) },
                goal: function(){
					if(player.ap.challenges[31]>=5)return new Decimal("1e18040000").pow(Decimal.pow(1.3,Decimal.pow(player.ap.challenges[31]-5,1.5)));
					return [new Decimal("1e3891000"),new Decimal("1e4171000"),new Decimal("1e6322000"),new Decimal("1e8035000"),new Decimal("1e9196000")][player.ap.challenges[31]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
                rewardDescription() { return "Prestige Boost's effect is better." },
		},
	},
	passiveGeneration(){
		if(player.m.points.gte(90))return 5;
		return 0;
	},
		doReset(l){
			if(l=="ap"){return;}
			if(l=="t")if(player.m.points.gte(102))layerDataReset("ap",["upgrades"]);else layerDataReset("ap",[]);
		},
		update(){
			if(player.m.points.gte(103)&&!player.t.activeChallenge){
				let keep=3;
				if(player.m.points.gte(108))keep=6;
				if(player.m.points.gte(114))keep=9;
				player.ap.challenges[11]=Math.max(player.ap.challenges[11],keep);
				player.ap.challenges[12]=Math.max(player.ap.challenges[12],keep);
				player.ap.challenges[21]=Math.max(player.ap.challenges[21],keep);
				player.ap.challenges[22]=Math.max(player.ap.challenges[22],keep);
				player.ap.challenges[31]=Math.max(player.ap.challenges[31],keep);
			}
			if(player.m.points.gte(110)){
				if(player.ap.activeChallenge){
					if(player.points.gte(layers.ap.challenges[player.ap.activeChallenge].goal())){
						if(player.ap.challenges[player.ap.activeChallenge]<15)player.ap.challenges[player.ap.activeChallenge]++;
					}
				}
			}
		}
})


addLayer("t", {
    name: "transcend", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#FFFF00",
    requires: new Decimal("1e850"), // Can be a function that takes requirement increases into account
    resource: "transcend points", // Name of prestige currency
    baseResource: "atomic-prestige points", // Name of resource prestige is based on
    baseAmount() {return player.ap.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: Reset for transcend points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(99)},
	branches: ["ap"],
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
	getResetGain() {
		if(player.ap.points.lte("1e850"))return new Decimal(0);
		let amt=Decimal.log10(player.ap.points).sub(600).div(250).pow(2);
		if(player.mm.points.gte(21))amt=amt.mul(2);
		if(player.mm.points.gte(22))amt=amt.mul(2);
		if(player.mm.points.gte(23))amt=amt.mul(2);
		if(player.mm.points.gte(24))amt=amt.mul(2);
		amt=amt.floor();
		if(amt.gte(Decimal.sub(2e8,player.t.points))){
			amt=Decimal.sub(2e8,player.t.points).ceil().max(0);
		}
		return amt;
	},
	getNextAt() {
		if(player.ap.points.lte("1e850"))return new Decimal("1e850");
		let amt=Decimal.log10(player.ap.points).sub(600).div(250).pow(2);
		if(player.mm.points.gte(21))amt=amt.mul(2);
		if(player.mm.points.gte(22))amt=amt.mul(2);
		if(player.mm.points.gte(23))amt=amt.mul(2);
		if(player.mm.points.gte(24))amt=amt.mul(2);
		amt=amt.floor().plus(1);
		if(player.mm.points.gte(21))amt=amt.div(2);
		if(player.mm.points.gte(22))amt=amt.div(2);
		if(player.mm.points.gte(23))amt=amt.div(2);
		if(player.mm.points.gte(24))amt=amt.div(2);
		amt=Decimal.pow(10,amt.pow(1/2).mul(250).add(600));
		return amt;
	},
	upgrades: {
        rows: 5,
		cols: 4,
		11: {
			title: "Transcend Upgrade 11",
            description: "Third Milestone's effect ^1.005",
            cost: new Decimal(1),
        },
		12: {
			title: "Transcend Upgrade 12",
            description: "Prestige Point gain ^1.005",
            cost: new Decimal(1),
        },
		13: {
			title: "Transcend Upgrade 13",
            description: "Super-Prestige Point gain ^1.005",
            cost: new Decimal(1),
        },
		14: {
			title: "Transcend Upgrade 14",
            description: "Hyper-Prestige Point gain ^1.005",
            cost: new Decimal(1),
        },
		21: {
			title: "Transcend Upgrade 21",
            description: "Prestige and Super-Prestige Upgrade 31 is boosted.",
            cost: new Decimal(5),
        },
		22: {
			title: "Transcend Upgrade 22",
            description: "Atomic-Prestige Point gain ^1.01",
            cost: new Decimal(10),
        },
		23: {
			title: "Transcend Upgrade 23",
            description: "Third Milestone's effect ^1.005",
            cost: new Decimal(15),
        },
		24: {
			title: "Transcend Upgrade 24",
            description: "Prestige Boost is cheaper",
            cost: new Decimal(20),
        },
		31: {
			title: "Transcend Upgrade 31",
            description: "Third Milestone's effect ^1.005",
            cost: new Decimal(50),
        },
		32: {
			title: "Transcend Upgrade 32",
            description: "Prestige Point gain ^1.005",
            cost: new Decimal(75),
        },
		33: {
			title: "Transcend Upgrade 33",
            description: "Super-Prestige Point gain ^1.005",
            cost: new Decimal(100),
        },
		34: {
			title: "Transcend Upgrade 34",
            description: "Hyper-Prestige Point gain ^1.005",
            cost: new Decimal(125),
        },
		41: {
			title: "Transcend Upgrade 41",
            description(){return "Hyper Boost cost /"+format("1e60000")},
            cost: new Decimal(300),
			unlocked(){return player.m.points.gte(104);}
        },
		42: {
			title: "Transcend Upgrade 42",
            description(){return "Gain an extra Hyper Boost."},
            cost: new Decimal(400),
			unlocked(){return player.m.points.gte(104);}
        },
		43: {
			title: "Transcend Upgrade 43",
            description(){return "Hyper Boost's effect is better."},
            cost: new Decimal(500),
			unlocked(){return player.m.points.gte(104);}
        },
		44: {
			title: "Transcend Upgrade 44",
            description(){return "Unlock a new row of Atomic-Prestige upgrades."},
            cost: new Decimal(600),
			unlocked(){return player.m.points.gte(104);}
        },
		51: {
			title: "Transcend Upgrade 51",
            description(){return "First HP buyable's effect ^2.1"},
            cost: new Decimal(30000),
			unlocked(){return player.m.points.gte(111);}
        },
		52: {
			title: "Transcend Upgrade 52",
            description(){return "Milestone cost scaling starts later based on your transcend points."},
            cost: new Decimal(60000),
			unlocked(){return player.m.points.gte(111);},
			effect(){
				return new Decimal(9).plus(player.t.points.add(10).log10().sqrt().mul(1.2));
			},
            effectDisplay() { return "+"+format(this.effect(),4) },
        },
		53: {
			title: "Transcend Upgrade 53",
            description(){return "Reduce the 1st Milestone's softcap's potency."},
            cost: new Decimal(2e6),
			unlocked(){return player.m.points.gte(111);},
        },
		54: {
			title: "Transcend Upgrade 54",
            description(){return "1st Milestone's softcap starts later based on your transcend points."},
            cost: new Decimal(1.2e7),
			unlocked(){return player.m.points.gte(111);},
			effect(){
				return new Decimal(1).plus(player.t.points.add(10).log10().pow(0.8).mul(0.05));
			},
            effectDisplay() { return format(this.effect(),4)+"x later" },
        },
	},
	
	challenges: {
        rows: 3,
		cols: 2,
		11:{
                name: "Dilation",
                completionLimit: 4,
			    challengeDescription() {return "1st milestone's effect ^0.45<br>"+challengeCompletions(this.layer, this.id) +"/4 completions"},
                unlocked() { return true },
                goal: function(){
					if(player.m.points.gte(110))return (player.t.challenges[11]+1)*(player.t.challenges[11]+1);
					return (player.t.challenges[11]+1)*(player.t.challenges[11]+2);
				},
				canComplete(){
					let c=0;
					for(var i in player.ap.challenges)c+=player.ap.challenges[i];
					if(c>=tmp.t.challenges[this.id].goal)return true;
					return false;
				},
                currencyDisplayName: "AP challenge completions",
                rewardDescription() { return "3rd milestone's effect is better." },
		},
		12:{
                name: "Softcapped",
                completionLimit: 3,
			    challengeDescription() {return "1st milestone's softcap starts earlier<br>"+challengeCompletions(this.layer, this.id) +"/3 completions"},
                unlocked() { return player.m.points.gte(105) },
                goal: function(){
					return (player.t.challenges[12]+1)*(player.t.challenges[12]+1);
				},
				canComplete(){
					let c=0;
					for(var i in player.ap.challenges)c+=player.ap.challenges[i];
					if(c>=tmp.t.challenges[this.id].goal)return true;
					return false;
				},
				rewardEffect() {
		if(player.m.points.lt(112) && player.t.activeChallenge==12)return 1;
                    let ret = 1+player.t.challenges[12]*0.1;
                    return ret;
                },
				rewardDisplay() {
                    return format(this.rewardEffect())+"x later";
                },
                currencyDisplayName: "AP challenge completions",
                rewardDescription() { 
				if(player.m.points.lt(112))return "1st milestone's softcap starts later, but the reward is disabled in this challenge.";
				else return "1st milestone's softcap starts later.";
		 },
		},
		21:{
                name: "Prestige Dilation",
                completionLimit: 3,
			    challengeDescription() {return "1st milestone's effect and prestige point gain ^0.45<br>"+challengeCompletions(this.layer, this.id) +"/3 completions"},
                unlocked() { return player.m.points.gte(109) },
                goal: function(){
					return (player.t.challenges[21]+1)*(player.t.challenges[21]+1);
				},
				canComplete(){
					let c=0;
					for(var i in player.ap.challenges)c+=player.ap.challenges[i];
					if(c>=tmp.t.challenges[this.id].goal)return true;
					return false;
				},
                currencyDisplayName: "AP challenge completions",
                rewardDescription() { return "3rd milestone's effect is better." },
		},
		22:{
                name: "Hardcapped",
                completionLimit: 2,
			    challengeDescription() {return "'Softcapped' is applied, and 1st milestone's softcap is its hardcap.<br>"+challengeCompletions(this.layer, this.id) +"/2 completions"},
                unlocked() { return player.m.points.gte(115) },
                goal: function(){
					return (player.t.challenges[22]+1)*(player.t.challenges[22]+1);
				},
				canComplete(){
					let c=0;
					for(var i in player.ap.challenges)c+=player.ap.challenges[i];
					if(c>=tmp.t.challenges[this.id].goal)return true;
					return false;
				},
				rewardEffect() {
		            let ret = 1+player.t.challenges[22]*0.1;
                    return ret;
                },
				rewardDisplay() {
                    return format(this.rewardEffect())+"x later";
                },
                currencyDisplayName: "AP challenge completions",
                rewardDescription() { return "1st milestone's softcap starts later." },
		},
	},
	
	passiveGeneration(){
		if(player.m.points.gte(119))return 0.2;
		if(player.m.points.gte(118))return 0.1;
		if(player.m.points.gte(117))return 0.05;
		if(player.m.points.gte(116))return 0.02;
		if(player.m.points.gte(115))return 0.005;
		return 0;
	},
	tabFormat: ["main-display","prestige-button","resource-display",
				["display-text",function(){return "Transcend point is hardcapped at "+format(2e8)}],
				"upgrades","challenges"
				],
	update(){
		if(player.t.points.gte(2e8))player.t.points=new Decimal(2e8);
	}
})


addLayer("hb", {
    name: "hyper boost", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "HB", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#90FFC0",
    requires(){
		r = new Decimal("1e473950");
		if(hasUpgrade("t",41))r=r.div("1e60000");
        return r
	}, // Can be a function that takes requirement increases into account
    resource: "hyper boosts", // Name of prestige currency
    baseResource: "hyper-prestige points", // Name of resource prestige is based on
    baseAmount() {return player.hp.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "B", description: "Shift+B: Reset for hyper boosts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(104)},
	branches: ["hp","pb"],
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
	base: new Decimal("1e100000"),
	exponent: function(x){
		if(x===undefined)x=player.hb.points;
		let p=new Decimal(1.25);
		if(x.gte(10)){
			let scaling=x.sub(10).pow(2).div(1000);
			if(player.m.points.gte(119))scaling=scaling.div(1.2);
			p=p.add(scaling);
		}
		return p;
	},
	effect(){
		let p=0.5;
		let m=0.02;
		let e=0;
		if(hasUpgrade("t",42))e++;
		if(hasUpgrade("t",43)){
			m+=0.02;
		}
		if(hasUpgrade("hb",13)){
			m+=0.004;
		}
		if(hasUpgrade("hb",14)){
			m+=0.003;
		}
		return new Decimal(1).add(player.hb.points.add(e).pow(p).mul(m));
	},
	effectDescription(){
		return "hyper-prestige points and prestige boost effect is powered by "+format(layers.hb.effect(),4)
	},
	
	upgrades: {
        rows: 1,
		cols: 4,
		11: {
			title: "Hyper Boost Upgrade 11",
            description: "Hyper Boost effect affects the 1st Milestone's softcap.",
            cost: new Decimal(7),
			effect() {
				let p=tmp.hb.effect;
				return p;
            },
            effectDisplay() { return format(this.effect(),4)+"x later" },
        },
		12: {
			title: "Hyper Boost Upgrade 12",
            description: "Non-Extra Hyper Boosts provide extra Prestige Boosts.",
            cost: new Decimal(12),
			effect() {
				let exp=0.7;
				let p=player.hb.points.pow(exp);
				return p;
            },
            effectDisplay() { return "+"+format(this.effect(),4) },
        },
		13: {
			title: "Hyper Boost Upgrade 13",
            description: "Hyper Boost's effect is better.",
            cost: new Decimal(20),
        },
		14: {
			title: "Hyper Boost Upgrade 14",
            description: "Hyper Boost's effect is better.",
            cost: new Decimal(26),
        },
	},
	resetsNothing(){return player.m.points.gte(111)},
		doReset(l){
			if(l=="hb"){return;}
			if(l=="t")if(player.m.points.gte(999999))layerDataReset("hb",["upgrades"]);else layerDataReset("hb",[]);
		},
	//autoPrestige(){return player.m.points.gte(116)},
	update(){
		if(player.m.points.gte(116)){//quick autobuy
			while(true){
				let req=layers.hb.requires().mul(layers.hb.base.pow(Decimal.pow(player.hb.points,layers.hb.exponent())));
				if(player.hp.points.gt(req))player.hb.points=player.hb.points.add(1);
				else break;
			}
		}
	},
	
})