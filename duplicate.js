var test = [1,1,3,3,6,6,6,7,8]
function dup_array(nums){
     	var count = 0;
     	for(var i = 0; i< nums.length-1; i++) {
        if(nums[i] != nums[i+1]){
            count ++;
            nums[count] = nums[i+1];
        }
    }
    for(var x=count; x>0; x--){
        nums.pop();
    }
    return count;
}

            
dup_array(test)
console.log(test)