

 function myFetch(param)
{
    return new Promise((res,rej)=>{
        $.ajax({type:'GET',url:param,
    success:(msg)=>{
        res(msg);
    },
    error:(xhr,error)=>{
      rej(error)
    
    },
    
});
    })
}
