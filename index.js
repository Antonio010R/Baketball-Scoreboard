// console.log(Board1)
// function topper(){
//     let Board1=document.getElementById("board1").textContent
//     let Board2=document.getElementById("board2").textContent
//     if
// }
function add1(x){
    let Board1=document.getElementById("board1").textContent
    let Update1=document.getElementById("board1")
    let result=parseInt(Board1)+x
    // console.log(result)
    if (result<=9)
    Update1.textContent="0"+result
    else
    Update1.textContent=result
}
function add2(x){
    let Board2=document.getElementById("board2").textContent
    let Update2=document.getElementById("board2")
    let result=parseInt(Board2)+x
    // console.log(result)
    if (result<=9)
    Update2.textContent="0"+result
    else
    Update2.textContent=result
}
function Reset(){
    let b1=document.getElementById("board1")
    let b2=document.getElementById("board2")
    b1.textContent="00"
    b2.textContent="00"
}