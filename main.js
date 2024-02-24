import {Rating} from "./Rating.js";

function rating(voyage, history) {
    return new Rating(voyage, history).value;
}

/** the client code **/
const voyage = { zone: "west­indies", length: 10 };
const history = [
    { zone: "east­indies", profit: 5 },
    { zone: "west­indies", profit: 15 },
    { zone: "china", profit: 2},
    { zone: "west­africa", profit: 7 },
];

const myRating = rating(voyage, history);
console.log(myRating);