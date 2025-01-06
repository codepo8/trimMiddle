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
    let remainder = (length - replaceString.length) / 2;
    let head = Math.ceil(remainder);
    let tail = [];
    let i = 0;
    for (let { segment } of new Intl.Segmenter().segment(str)) {
        if (i < head) {
            res += segment;
        } else {
            tail.push(segment);
        }
        i++;
    }
    return res + replaceString + tail.slice(-Math.floor(remainder)).join("");
};
export { trimMiddle };
