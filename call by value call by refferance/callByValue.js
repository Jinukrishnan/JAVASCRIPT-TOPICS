// // call by reffance
// function asd(){
//     a=[100];
//     bsd(a)
//     console.log("asd",a[0]);
// }


// function bsd(b)
// {
//    b[0]=b[0]+1;
//    console.log("bsd",b[0]); 
// }

// asd()

// // call by value

// function csd(){
//     a=100;
//     dsd(a);
//     console.log("asd",a);
// }


// function dsd(b)
// {
//    b=b+1;
//    console.log("bsd",b); 
// }

// csd()




a=["a","b","c","d","e"];

s="";
a.forEach(function (val,index){
s+=val
})
console.log(s);


