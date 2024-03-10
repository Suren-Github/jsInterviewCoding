/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    const uniqWords1 = [...new Set(word1)];
    const uniqWords2 = [...new Set(word2)];
    console.log(uniqWords1, uniqWords2);

    const isWord1AvailableInWord2 = uniqWords1.every(item => uniqWords2.includes(item));
    const isWord2AvailableInWord1 = uniqWords2.every(item => uniqWords1.includes(item));
    console.log(isWord1AvailableInWord2, isWord2AvailableInWord1);

    const obj1 = {}, obj2 = {};

    uniqWords1.forEach(item => obj1[item] = 0);
    uniqWords2.forEach(item => obj2[item] = 0);
    
    word1.split("").forEach(item => obj1[item] = obj1[item] + 1);
    word2.split("").forEach(item => obj2[item] = obj2[item] + 1);
    console.log(obj1, obj2);

    const sortedArr1 = Object.values(obj1).slice().sort();
    const sortedArr2 = Object.values(obj2).slice().sort();
    console.log(sortedArr1, sortedArr2);

    // const sortedArr1Equality = sortedArr1.every(item => sortedArr2.includes(item));
    // const sortedArr2Equality = sortedArr2.every(item => sortedArr1.includes(item));
    // console.log(sortedArr1Equality, sortedArr2Equality);

    for(let i=0; i< sortedArr1.length; i++) {
        if(sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }

    console.log(word1.length !== word2.length, !isWord1AvailableInWord2, !isWord2AvailableInWord1);

    if (word1.length !== word2.length || !isWord1AvailableInWord2 || !isWord2AvailableInWord1) {
        console.log(false);
        return false;
    }

    console.log(true);
    return true;
};