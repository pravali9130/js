// traditional function
function findOddOrEven(no){
    if(no%2==0){
        console.log("even");
    }else {
        console.log("Odd");
    }
}
//using arrow function
const oddOrEven=(no)=>{
    if(no%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
findOddOrEven(17);
oddOrEven(20);