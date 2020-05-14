let array=[1,2,3,4,5];
let val=4;

function chunk(arr1, num){
    let out=[];
    console.log(out);
    let arr2=arr1;
    console.log(arr2.length);
    let num1=num;
    let result=[];
    console.log(result);
    for(let i=0;i<arr2.length;i++){
        if(((i % num1) === 0) && (i !== 0)){
            out=[[...result]];
            result=[];
        }
        result=[...arr2[i]];
        //console.log(result);
    }
    out=[[...result]];
    //out.shift();
    console.log(out);
};

chunk(array,val);