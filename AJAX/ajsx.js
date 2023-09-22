document.getElementById("btn").addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>response.json())
    .then((datas)=>{
        let tb=""
        datas.map((data)=>{
            tb+=`<tr>
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.completed}</td>
        </tr>`
        })
        document.getElementById("body").innerHTML=tb
    })
    .catch((error)=>{console.log(error);})
})