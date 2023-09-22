let btn=document.getElementById("btn");


btn.onclick=()=>{
    console.log("start");
   let pr=myFetch('https://jsonplaceholder.typicode.com/todos/1');
   let z=pr.then((data)=>{
    // console.log(data);
   },(error)=>{
    console.log(error);
   })
   console.log("z",z);
console.log("end");
}















