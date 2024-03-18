/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let i = 0, stack = [];

    while (i < s.length) {
        if(s.charAt(i) === "*"){
            if(stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(s[i]);
        }
        i++;
    }
    return stack.join('');
};