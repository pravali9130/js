let arr=[1,2,3,4,5];
console.log(arr);
for(let val of arr){
    //console.log(val);
    if(val%2==0){
        console.log(val);
        arr.pop();
        console.log(arr);
    }
}