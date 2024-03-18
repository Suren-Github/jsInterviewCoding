/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    debugger;
    let stack = [];

    function isSameDirection(curr, next) {
        return curr > 0 && next > 0;
    }

    for (let i = 0; i < asteroids.length - 1; i++) {

        let curr = Math.abs(asteroids[i]), next = Math.abs(asteroids[i + 1]);

        // Handle edge cases

        if (asteroids.length === 0) { // Input is empty
            return stack;
        }

        if (curr === next && asteroids[i] !== asteroids[i + 1]) { // Check for 5, -5 => Opposite direction, same weight, cancels each other
            continue;
        } else if (isSameDirection(asteroids[i], asteroids[i + 1])) { // Check for 5, 5 => Same direction. Push asteroids[i]
            stack.push(asteroids[i]);
        } else { // Check for 10, -5 => Opposite direction, different weight. Max. value stays ('-'ve denotes direction. Not lesser value)
            stack.push(Math.max(curr, next));
            /* if() */
            return asteroidCollision(stack);
        }

    }
    console.log(stack);
    return stack;
};

asteroidCollision([5, 10, -5]);