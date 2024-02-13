class Solution(object):
    def firstPalindrome(self, words):
        """
        :type words: List[str]
        :rtype: str
        """
        l = 0
        while l <= len(words) - 1:
            reversedWord = words[l][::-1]

            if words[l] == reversedWord:
                return words[l]
            l+=1
        
        return ""
            
    # firstPalindrome(["abc","car","ada","racecar","cool"])
