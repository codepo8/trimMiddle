const trimMiddle = (str, length = 16, replaceString = "…") => {
    if (typeof str !== "string") {
        throw new TypeError("The first argument must be a string.");
    }
    if (typeof length !== "number") {
        throw new TypeError("The length argument must be a number.");
    }
    if (typeof replaceString !== "string") {
        throw new TypeError("The replaceString argument must be a string.");
    }
    if (length <= replaceString.length) {
        throw new RangeError("The length argument must be greater than the replaceString length.");
    }

    if (str.length <= length) {
        return str;
    }

    let res = "";
    const remainder = (length - replaceString.length) / 2;
    const head = Math.ceil(remainder);
    const tail = [];
    let i = 0;
    for (const { segment } of new Intl.Segmenter().segment(str)) {
        if (i < head) {
            res += segment;
        } else {
            tail.push(segment);
        }
        i++;
    }
    const end = Math.floor(remainder);
    return res + replaceString + (end > 0 ? tail.slice(-end).join("") : "");
};
export { trimMiddle };
