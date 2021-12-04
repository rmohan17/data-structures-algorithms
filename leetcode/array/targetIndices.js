var targetIndices = function(nums, target) {
  const ans = [];
 nums.sort(function(a, b){return a - b});
  for(let i =0;i<nums.length;i++){
      if(nums[i] === target){
          ans.push(i);
      }
  }
  console.log(ans);
  return ans;
};
targetIndices([48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38],6)
