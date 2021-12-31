class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        number = 0
        for j in jewels:
            for k in stones:
                if(j==k):
                     number += 1
        return number
