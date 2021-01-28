var mainTree = 
    [["job", "work out"]]

addLayer("job", {
    //row: 0, // Row the layer is in on the tree (0 is the first row)
    //position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "J",
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    resource: "dollars", // Name of prestige currency
    baseResource: "hours", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    requires: new Decimal(4),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        return new Decimal(1)
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    hotkeys: [
        {key: "p", description: "Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("work out", {
    //row: 0, // Row the layer is in on the tree (0 is the first row)
    //position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "WO",
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#4bdc13",
    resource: "strength points", // Name of prestige currency
    baseResource: "hours", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    requires: new Decimal(4),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        return new Decimal(1)
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    hotkeys: [
        {key: "p", description: "Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
