import {Rating} from "./Rating.js";
import {ExperiencedChinaRating} from "./ExperiencedChinaRating.js";

export class RatingFactory
{
    static Create(voyage, history)
    {
        if (voyage.zone === "china" && history.some(v => "china" === v.zone))
            return new ExperiencedChinaRating(voyage, history);
        else return new Rating(voyage, history);
    }
}