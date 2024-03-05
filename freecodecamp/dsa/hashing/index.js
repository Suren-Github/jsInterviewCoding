function isArrayASubsetOfAnother() {

    const a1 = [11, 1, 13, 21, 3, 7];
    const a2 = [11, 3, 7, 1, 4];

    const map = new Map();

    a1.forEach((item) => map.set(item, false));

    for (let item in a2) {
        if (!map.has(a2[item])) {
            return false;
        }
    }
    return true;
}
