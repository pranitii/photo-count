let count =0
let saveEl=document.getElementById("save-el")
let countEl= document.getElementById("count-el")
console.log(countEl)
function increment()
{
    count=count+1
    countEl.innerText=count
    console.log(count)
}
function save()
{
    let countStr=count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
    //console.log(count)
}