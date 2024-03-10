/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {

    var uniqueCharactersExist = (string1, string2) => {
        // Function to extract unique characters from a string
        const extractUniqueCharacters = (str) => [...new Set(str)];

        // Extract unique characters from both strings
        const uniqueChars1 = extractUniqueCharacters(string1);
        const uniqueChars2 = extractUniqueCharacters(string2);

        // Check if all unique characters in string1 exist in string2
        const allCharsInString2 = uniqueChars1.every(char => uniqueChars2.includes(char));

        // Check if all unique characters in string2 exist in string1
        const allCharsInString1 = uniqueChars2.every(char => uniqueChars1.includes(char));

        // Return true if both conditions are met, false otherwise
        return allCharsInString1 && allCharsInString2;
    }

    if (word1.length !== word2.length || !uniqueCharactersExist(word1, word2)) {
        return false;
    }
    return true;
};