//your JS code here. If required.
let promise1=()=>{
    return new Promise((resolve)=>{
       setTimeout(() => {
        resolve([1,2,3,4])
       }, 3000);
    })
}

async function display(params) {
    let div=document.getElementById('output')
    const data=await promise1()
    console.log(data);
    const filterodd=data.filter((e)=>e%2==0)
    console.log(filterodd)
    setTimeout(() => {
        div.innerHTML=""
        div.innerHTML= filterodd.join(",");
    }, 1000);
    let mulbytwo=filterodd.map((e)=>e*2)
    console.log(mulbytwo)
    setTimeout(() => {
        div.innerHTML=""
        div.innerHTML = mulbytwo.join(",");
    }, 4000);
}
display()