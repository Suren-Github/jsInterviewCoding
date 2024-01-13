var twoSum = function(nums, target) {
    const myMap = new Map();
    
    for(let i=0; i< nums.length; i++) {
    	const balance = target - nums[i];
      console.log(balance, myMap.has(balance), nums[i], i);
      if(myMap.has(balance)){
      	/* console.log(myMap.get(balance), i) */;
      	return [myMap.get(balance), i];
      }      
      console.log(nums[i], i)
      myMap.set(nums[i], i);
    }
};

twoSum([2,7,11,15], 18);