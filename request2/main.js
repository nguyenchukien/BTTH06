let arr 
let btnCreate = document.querySelector('#createArr')
let Arr = document.querySelector('#Arr')
let result = document.querySelector('#result')
let ipSort = document.querySelectorAll('input[name=sort]')
let btnAdd = document.querySelector('#addValue')

addArr = (pos,value)=>{
    arr.splice(pos,0,value)
}
Array.from(ipSort).map(item=>{
    item.addEventListener('change',(e)=>{
        console.log(e)
    console.log(e.target.value)
    if(e.target.value=='tang'){
        arr.sort((a,b)=>a-b)
        result.innerHTML = arr
    }
    else {
        arr.sort((a,b)=>b-a)
        result.innerHTML = arr
    }
})

})
btnCreate.addEventListener('click',()=>{
     arr = Array.from({length: Math.floor(10 + Math.random()*10)}, () => Math.floor(10 + Math.random()*90));
    Arr.innerHTML = arr
})

btnAdd.addEventListener('click', ()=>{
    let pos = document.querySelector('#pos').value
    let valueAdd = document.querySelector('#valueAdd').value
    if(pos && valueAdd){
        addArr(pos,valueAdd)
        result.innerHTML = arr
    }
    else{
        alert("Nhap day du vao!!!")
    }
})