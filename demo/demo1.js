// // // call back function

// // posts=[
// //     {id:1,title:"alan"},
// //     {id:2,title:"amal"}
// // ]


// // let getPost=()=>{
// //     let s=""
// //    setTimeout(()=>{
// //     posts.forEach((post)=>{
// //         s=s+`<li>${post.id}-${post.title}</li>`
// //     })
// //     document.getElementById("list").innerHTML=s;
// //    },1000)
// // }




// // let addPost=(post,callback)=>{
// //   setTimeout(() => {
// //     posts.push(post);
// //     callback();
// //   }, 2000);
// // }

// // addPost({id:3,title:"avin"},getPost)


// // promise


// // let p1=new Promise((res,rej)=>{
// //     rej();
// // })

// // p1.then(()=>{
// //     console.log("success");
// // }).catch(()=>{
// //     console.log("rejected");
// // })

// // promise


// posts=[{id:1,title:"alan"},{id:2,title:"amal"}]
// let getPost=()=>{
//     let s=""
//    setTimeout(()=>{
//     posts.forEach((post)=>{
//         s=s+`<li>${post.id}-${post.title}</li>`
//     })
//     document.getElementById("list").innerHTML=s;
//    },1000)
// }
// let addPost=(post,)=>{
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//         posts.push(post);
//        let err=false;
//        if(err){ rej();}
//        else{res(); }
//       }, 2000); })}

// // addPost({id:3,title:"avin"}).then(()=>{
// //     getPost();
// // }).catch(()=>{
// //     console.log("error");
// // })
// async function trigger()
// {
//     await addPost({id:3,title:"avin"});
//     getPost();
// }trigger();



// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   fetchData();



// users=[{name:"john",age:30},{name:"james",age:40},{name:"jacob",age:35}];




// function getUser()
// {
//     let lis="";
//    setTimeout(() => {
//     users.forEach((user)=>{
//         lis+=`<li>${user.name}-${user.age}</li>`
//     });
//     document.getElementById("list").innerHTML=lis;
//    }, 1000);
// }



// function addUser(post,callback){
//     setTimeout(() => {
//         users.push(post);
//         callback();
//     }, 2000);
// }


// addUser({name:"nivin",age:25},getUser);

// -------------------------------------------------------------------------------------------------------

// promise

// let p=new Promise((resolve,reject)=>{
//     reject();
// });
// p.then(()=>{
//     console.log("success");
// }).catch(()=>{
//     console.log("error");
// })

// ------------------------------------------------------------------------------------





// Using Promise 

// users=[{name:"john",age:30},{name:"james",age:40},{name:"jacob",age:35}];



// function getUser()
// {
//     let lis="";
//    setTimeout(() => {
//     users.forEach((user)=>{
//         lis+=`<li>${user.name}-${user.age}</li>`
//     });
//     document.getElementById("list").innerHTML=lis;
//    }, 1000);
// }
// function addUser(post){
//    return new Promise((res,rej)=>{
//     setTimeout(() => {
//         users.push(post);
//         res();
//     }, 2000);
//    });
// }
// addUser({name:"nivin",age:25}).then(()=>{
//     getUser();
// }).catch(()=>{
//     console.log("error");
// })

// --------------------------------------------------------------------------------
// using async await



// users=[{name:"john",age:30},{name:"james",age:40},{name:"jacob",age:35}];



// function getUser()
// {
//     let lis="";
//    setTimeout(() => {
//     users.forEach((user)=>{
//         lis+=`<li>${user.name}-${user.age}</li>`
//     });
//     document.getElementById("list").innerHTML=lis;
//    }, 1000);
// }
// function addUser(post){
//    return new Promise((res,rej)=>{
//     setTimeout(() => {
//         users.push(post);
//         res();
//     }, 2000);
//    });
// }
// // addUser({name:"nivin",age:25}).then(()=>{
// //     getUser();
// // }).catch(()=>{
// //     console.log("error");
// // })
// async function data()
// {
//     await addUser({name:"nivin",age:25});
//     getUser();
// }

// data();
    
let lis="";
fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()).then((data)=>
{
    data.forEach((dt)=>{
        lis+=`<li>${dt.id}-->${dt.title}</li>`;
    })
    document.getElementById("list").innerHTML=lis;
}
).catch((error)=>{console.log(error);})


