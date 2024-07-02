// 'use strict';

// const arr1=[1,3,2,5,4,-5,2,'error'];

// const arr2=[3,6,'error'];

// const arr= arr1.concat(arr2);
// const fil= arr.filter((curr) => {
//     return (typeof curr=='number');
// })

// console.log(fil);
//  let max= Math.max(...fil)
//  console.log(max);

//  let min= Math.min(...fil)
//  console.log(min);

//  console.log(`amplitude= ${max-min}`);

// var max1=fil[0];
//  for(var i=1;i<fil.length;i++){
//   if( fil[i]>max1)
//   max1=fil[i];
//  }

//  console.log(max1);



//  const kelvin=function(){
//      const obj={
//          type:'celcius',
//          value:Number(prompt('this is serius problem'))
//      }

//      return obj.value+273;

//  }

//  const kel= kelvin()
//  console.log(kel)


let arr=[17,34,21];

const forcast= function(arr){
    let arr1="";

    for( var i=0; i<arr.length; i++)
    {
        arr1= arr1+(`...${arr[i]} in ${i+1} day`);
    }

    return arr1;
}

const for1= forcast(arr);
console.log(for1)

// const sfor1= JSON.stringify(for1)

// console.log(sfor1);