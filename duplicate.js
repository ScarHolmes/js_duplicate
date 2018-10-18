var test = [1,1,3,6,6,6,7,7,7,7,8,9,9,9,9]
function dup_array(nums){
  var count = 0;
  for(var i = 0; i<= nums.length-1-count; i++) {
    if(nums[i] === nums[i+1]){
      count ++;
      console.log("This is index ", i);
      console.log(nums);
      for(var p=i+1; p<nums.length-1; p++){
        nums[p] = nums[p+1];
      }
      // nums[count] = nums[i+1];
      // console.log("this is nums " + nums[count]);
      }
      if(nums[i] === nums[i+1]){
       i--;
     }
  }
     

    
         console.log(count, "This is index jjjjjjjjj ", i);
      console.log(nums);
  
    
  for(var x=count-1; x>0; x--){
    nums.pop();
    }
  console.log(count)
  return count;
}


            
dup_array(test)
console.log(test)
