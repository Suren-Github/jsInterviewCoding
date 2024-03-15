/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    debugger;
    let i = 0;
    if(flowerbed.length === 1 && flowerbed[0] === 0) {
        return true;
    }

    while (i < flowerbed.length && n > 0) {

        if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        } else if (flowerbed[i + 1] === 0 && flowerbed[i === 0 ? i : i - 1] === 0 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
        i++;
    }
    console.log(n);
    return n == 0;
};

// canPlaceFlowers([1,0,0,0,1,0,0], 2);