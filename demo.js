import { trimMiddle } from "./index.js";

const demosentences = [
    "This is a long string that will be trimmed",
    "This is a short string",
    "This is a medium string that will be trimmed",
    "This 🇺🇳 is 🤡 🐥 a string 🥰 🧑‍🧑‍🧒‍🧒 with compound emoji 😊 ",
    "This is a string with a compound emoji 🧑‍🧑‍🧒‍🧒",
    "This is a string with a compound emoji 🧑‍🧑‍🧒‍🧒 and a flag 🇺🇳",
    "Dies is ein öü deutscher String mit Umlauten äß"
];
demosentences.forEach(sentence => {
    console.log(sentence);
    console.log(trimMiddle(sentence));
});
console.log(trimMiddle("This is a long string that will be trimmed", 8, "↔"));
// Error cases
// console.log(trimMiddle("This is a long string that will be trimmed", 16, "…"));
// console.log(trimMiddle(4, 16, "…"));
// console.log(trimMiddle("This is a long string that will be trimmed", "16", "…"));
// console.log(trimMiddle("This is a long string that will be trimmed", 4, "…"));
// console.log(trimMiddle("This is a long string that will be trimmed", 16, 4));
