addLayer("job", {
    row: 0, // Row the layer is in on the tree (0 is the first row)
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "Job",
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        wage: new Decimal(8),
    }},
    color: "#4BDC13",
    resource: "dollars", // Name of prestige currency
    baseResource: "hours", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource   
    
    resetDescription: "Spend your time working for ",
     
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    requires: new Decimal(1),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        return player[this.layer].wage
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },

    
    upgrades: {
        rows: 3,
        cols: 2,
        showRespec: false,
        11: {
            title: "High school tutor",
            description: "Increase hourly wage by 50%.",
            cost: new Decimal(2000),
            unlocked() { return player[this.layer].unlocked},
            effect() {
                return new Decimal(1.5)
            },
            effectDisplay() {
                return format(this.effect())+"x"}
        },
        21: {
            title: "College Education",
            description: "Increase hourly wage by 50%.",
            cost: new Decimal(50000),
            unlocked() { return player[this.layer].unlocked},
            effect() {
                return new Decimal(1.5)
            },
            effectDisplay() {
              return format(this.effect())+"x"}  
        }
    },
        
    
    layerShown(){return true}
})



