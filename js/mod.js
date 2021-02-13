let modInfo = {
	name: "The Milestone Tree",
	id: "c2nv4in9eusojg59bmo",
	author: "qq1010903229 (loader3229)",
	pointsName: "points",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.050",
	name: "",
}

let changelog = ``

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	var b=new Decimal(0)
	if(player.m.best.gte(1))b=b.add(1);
	if(player.m.best.gte(2))b=b.mul(3);
	if(player.m.best.gte(3))b=b.mul(tmp.m.milestone3Effect);
	if(hasUpgrade("p",11))b=b.mul(upgradeEffect("p",11));
	if(hasUpgrade("p",12))b=b.mul(upgradeEffect("p",12));
	if(hasUpgrade("sp",11))b=b.mul(upgradeEffect("sp",11));
	if(hasUpgrade("sp",12))b=b.mul(upgradeEffect("sp",12));
	return b
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.m.points.gte(50);
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}