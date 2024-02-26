import { Rating } from "./Rating.js";

export class ExperiencedChinaRating extends Rating
{
    get captainHistoryRisk() {
        const result = super.captainHistoryRisk - 2;
        return Math.max(result, 0);
    }

    get voyageLengthFactor() {
        let result = 0;
        
        result += 3;

        if (this.voyage.length > 12)
            result += 1;
        if (this.voyage.length > 18)
            result = 1;
        
        return result;
    }

    get historyLengthFactor() {
        return (this.history.length > 10) ? 1 : 0;
    }
}