let btn=document.getElementById("btn");


btn.onclick=()=>{
    console.log("start");
    $.ajax({type:'GET',url:'https://jsonplaceholder.typicode.com/todos/1',
    success:(msg)=>{
        console.log(msg);
    },
    error:(error)=>{
        console.log(error);
        
    },
    
});
console.log("end");
}