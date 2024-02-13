class Solution(object):
    def reverseVowels(self, s):
        l, r, sList, vowels = 0, len(s) - 1, list(s), 'aeiouAEIOU'
        while l< r:
            while l< r and vowels.find(sList[l]) == -1:
                l+=1
            while l<r and vowels.find(sList[r]) == -1:
                r-=1
            sList[l], sList[r] = sList[r], sList[l]
        
            l+=1
            r-=1
        print(sList)
        return "".join(sList)
