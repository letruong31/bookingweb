function phepTinh(a,b) {

    if(a<b){
const arr = [];
for(let x =a;x<=b;x++){
    let check = false;
    for(i=2; i<x;i++){
        if(x%i==0){
            check= true;
        }
    }
    if(!check){
        arr.push(x)
    }
}
let tong=0;
for(let m=0; m<arr.length;m++){
    tong= tong+arr[m]
}
console.log('a:', a , ' b:',b)

console.log(arr)

console.log('tổng: ' ,tong)
const show = document.getElementById('show')
show.textContent = tong
console.dir(show)

    }
    
}

function getElement(){
    const a = document.getElementById('a').valueAsNumber
    const b = document.getElementById('b').valueAsNumber
    console.log(a)
    console.log(b)
    phepTinh(a,b);
}
