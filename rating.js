export class Rating {
    constructor(voyage, history) {
        this.voyage = voyage;
        this.history = history;
    }

    get value() {
        const profit = this.voyageProfitFactor;
        const risk = this.voyageRisk;
        const history = this.captainHistoryRisk;

        if (profit * 3 > (risk + history * 2))
            return "A";
        else
            return "B";
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "china") result += 1;
        if (this.voyage.zone === "eastindies") result += 1;
        
        result += this.voyageLengthFactor;
        result += this.historyLengthFactor;

        return result;
    }

    get voyageLengthFactor() {
        let result = 0;

        if (this.voyage.length > 14)
            result = 1;

        return result;
    }

    get historyLengthFactor() {
        return (this.history.length > 8) ? 1 : 0;
    }

    get voyageRisk() {
        let result = 1;

        if (this.voyage.length > 4) 
            result += 2;
        if (this.voyage.length > 8)
            result += this.voyage.length - 8;
        if (["china", "eastindies"].includes(this.voyage.zone))
            result += 4;
    
        return Math.max(result, 0);
    }

    get captainHistoryRisk() {
        let result = 1;
        if (this.history.length < 5)
            result += 4;
    
        result += this.history.filter(v => v.profit < 0).length;
    
        return Math.max(result, 0);
    }

    get hasChinaHistory() {
        return this.history.some(v => "china" === v.zone);
    }
}