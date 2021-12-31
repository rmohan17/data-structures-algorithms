var numJewelsInStones = function(jewels, stones) {
  let count = 0; 
  let hashTable = {};
  
  for(let index = 0; index < stones.length; index++){
      if (hashTable[stones[index]] == undefined){
          hashTable[stones[index]] = 1;
         } else{
             hashTable[stones[index]] = hashTable[stones[index]] + 1;
         }
  }
  
  for(let index = 0; index < jewels.length; index++){
      if(hashTable[jewels[index]] !== undefined){
          count += hashTable[jewels[index]];
         } else{
             count += 0;
         }
  }
  
  return count;
};
numJewelsInStones("aA","aAAbbbb")
