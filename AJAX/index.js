document.getElementById("btn").addEventListener("click",function(){
   setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=>response.json())
    .then(data=>{
        tb='';
        data.map((dt)=>{
        
        
            tb=tb+` <tr>
            <td>${dt.id}</td><td>${dt.title}</td><td id="asd">${dt.completed}</td>
        </tr>`
        })
        document.getElementById("head").innerHTML=tb
    })
    .catch((error)=>{
        console.log(error);
    })
   }, 3000);
})


