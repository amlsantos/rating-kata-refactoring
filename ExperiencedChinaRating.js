import { Rating } from "./Rating.js";

export class ExperiencedChinaRating extends Rating
{
    get captainHistoryRisk() {
        const result = super.captainHistoryRisk - 2;
        return Math.max(result, 0);
    }
}